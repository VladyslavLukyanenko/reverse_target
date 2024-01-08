"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.simplifySequenceExpr = exports.splitReturnSeqStatementToExprsArray = exports.processBlockStatements = void 0;
var estraverse = require("estraverse");
var globalArgsCounter = 0;
var globalVarCounter = 0;
function processBlockStatements(script) {
    estraverse.replace(script, {
        enter: function (node, parent) {
            var _a;
            if (node.type !== "BlockStatement") {
                return;
            }
            // processing if statements.
            for (var i = 0; i < node.body.length; i++) {
                var curr = node.body[i];
                var toAppend = [];
                switch (curr.type) {
                    case "IfStatement":
                        if (curr.consequent.type !== "BlockStatement") {
                            curr.consequent = {
                                type: "BlockStatement",
                                body: [
                                    curr.consequent
                                ]
                            };
                        }
                        if (curr.alternate && curr.alternate.type !== "BlockStatement") {
                            curr.alternate = {
                                type: "BlockStatement",
                                body: [
                                    curr.alternate
                                ]
                            };
                        }
                        if (curr.test.type === "LogicalExpression") {
                            var logical = curr.test;
                            // if (logical.operator === "&&") {
                            //   curr.test = logical.right;
                            //   const ifStmt = convertLogicalExpressionToIfStatement(logical);
                            //   ifStmt.consequent = curr;
                            //   ifStmt.alternate = curr.alternate;
                            //   curr.alternate = null;
                            //   node.body[i] = ifStmt;
                            //   i--;
                            // }
                            // if (logical.left.type === "UnaryExpression") {
                            //
                            // }
                            processLogicalExpr(logical, toAppend);
                        }
                        else {
                            processIfStatementInBlock(curr, toAppend);
                        }
                        break;
                    case "SwitchStatement":
                        if (curr.discriminant.type === "SequenceExpression") {
                            curr.discriminant = simplifySequenceExpr(curr.discriminant, toAppend);
                        }
                        break;
                    case "ExpressionStatement":
                        if (!curr.expression) {
                            break;
                        }
                        switch (curr.expression.type) {
                            case "AssignmentExpression":
                                if (curr.expression.right.type === "ConditionalExpression" && curr.expression.left.type === "Identifier") {
                                    var cond = curr.expression.right;
                                    var id = curr.expression.left;
                                    var ifExpr = {
                                        type: "IfStatement",
                                        test: cond.test,
                                        consequent: {
                                            type: "BlockStatement",
                                            body: [
                                                {
                                                    type: "ExpressionStatement",
                                                    expression: {
                                                        type: "AssignmentExpression",
                                                        left: id,
                                                        right: cond.consequent,
                                                        operator: curr.expression.operator
                                                    }
                                                }
                                            ]
                                        },
                                        alternate: {
                                            type: "BlockStatement",
                                            body: [
                                                {
                                                    type: "ExpressionStatement",
                                                    expression: {
                                                        type: "AssignmentExpression",
                                                        left: curr.expression.left,
                                                        right: cond.alternate,
                                                        operator: curr.expression.operator
                                                    }
                                                }
                                            ]
                                        }
                                    };
                                    node.body[i] = ifExpr;
                                    i--;
                                }
                                else if (curr.expression.right.type === "LogicalExpression") {
                                    var logical = curr.expression.right;
                                    var id = {
                                        type: "Identifier",
                                        name: "var_" + globalVarCounter++
                                    };
                                    curr.expression.right = id;
                                    var variable = {
                                        type: "VariableDeclaration",
                                        kind: "var",
                                        declarations: [
                                            {
                                                type: "VariableDeclarator",
                                                init: logical,
                                                id: id
                                            }
                                        ]
                                    };
                                    node.body.splice(i, 0, variable);
                                    i--;
                                }
                                else {
                                    processAssignmentExpressionInExpressionStmt(curr.expression, toAppend);
                                }
                                break;
                            case "CallExpression":
                                processCallExpr(curr.expression, toAppend);
                                break;
                            case "NewExpression":
                                processNewExpr(curr.expression, toAppend);
                                break;
                            case "LogicalExpression":
                                node.body[i] = convertLogicalExpressionToIfStatement(curr.expression);
                                i--;
                                break;
                            case "SequenceExpression":
                                curr.expression = simplifySequenceExpr(curr.expression, toAppend);
                                break;
                            case "ConditionalExpression":
                                var ifStmt = __assign(__assign({}, curr.expression), { type: "IfStatement", consequent: {
                                        type: "ExpressionStatement",
                                        expression: curr.expression.consequent
                                    }, alternate: !curr.expression.alternate ? null : {
                                        type: "ExpressionStatement",
                                        expression: curr.expression.alternate
                                    } });
                                node.body[i] = ifStmt;
                                i--;
                                break;
                        }
                        break;
                    case "ReturnStatement":
                        /*if (true || !curr.argument || curr.argument.type === "Identifier" || curr.argument.type === "Literal" || curr.argument.type === "MemberExpression" && !curr.argument.computed) {
                          return;
                        }
            
                        const variable: ESTree.Identifier = {
                          type: "Identifier",
                          name: "var_" + globalVarCounter++
                        };
            
                        const varDecl: ESTree.VariableDeclaration = {
                          type: "VariableDeclaration",
                          kind: "var",
                          declarations: [
                            {
                              type: "VariableDeclarator",
                              init: curr.argument,
                              id: variable
                            }
                          ]
                        };
            
                        node.body.splice(i, 0, varDecl);
                        i--;
                        curr.argument = variable;*/
                        break;
                    case "VariableDeclaration":
                        for (var _i = 0, _b = curr.declarations; _i < _b.length; _i++) {
                            var d = _b[_i];
                            if (!d.init) {
                                continue;
                            }
                            switch (d.init.type) {
                                case "SequenceExpression":
                                    d.init = simplifySequenceExpr(d.init, toAppend);
                                    break;
                                case "LogicalExpression":
                                    processLogicalExpr(d.init, toAppend);
                                    break;
                                case "CallExpression":
                                    processCallExpr(d.init, toAppend);
                                    break;
                                case "ArrayExpression":
                                    processArrayExpr(d.init, toAppend);
                                    // for (let eidx = 0; eidx < d.init.elements.length; eidx++) {
                                    //   const el = d.init.elements[eidx];
                                    //   if (el.type === "SequenceExpression") {
                                    //     d.init.elements[eidx] = simplifySequenceExpr(el, toAppend);
                                    //   }
                                    // }
                                    break;
                                case "NewExpression":
                                    processNewExpr(d.init, toAppend);
                                    break;
                                case "ObjectExpression":
                                    processObjectExpr(d.init, toAppend);
                                    break;
                                case "ConditionalExpression":
                                    if (d.id.type === "Identifier") {
                                        var cond = d.init;
                                        d.init = {
                                            type: "Literal",
                                            value: null,
                                            raw: "null"
                                        };
                                        var id = d.id;
                                        var ifExpr = {
                                            type: "IfStatement",
                                            test: cond.test,
                                            consequent: {
                                                type: "BlockStatement",
                                                body: [
                                                    {
                                                        type: "ExpressionStatement",
                                                        expression: {
                                                            type: "AssignmentExpression",
                                                            left: id,
                                                            right: cond.consequent,
                                                            operator: "="
                                                        }
                                                    }
                                                ]
                                            },
                                            alternate: {
                                                type: "BlockStatement",
                                                body: [
                                                    {
                                                        type: "ExpressionStatement",
                                                        expression: {
                                                            type: "AssignmentExpression",
                                                            left: id,
                                                            right: cond.alternate,
                                                            operator: "="
                                                        }
                                                    }
                                                ]
                                            }
                                        };
                                        node.body.splice(i + 1, 0, ifExpr);
                                        i--;
                                    }
                                    break;
                                case "AssignmentExpression":
                                    processAssignmentExpressionInExpressionStmt(d.init, toAppend);
                                    break;
                                case "BinaryExpression":
                                    processBinaryExpression(d.init, toAppend);
                                    break;
                                case "UnaryExpression":
                                    processUnaryExpr(d.init, toAppend);
                                    break;
                            }
                        }
                        break;
                    case "ForStatement":
                        if (curr.body.type !== "BlockStatement") {
                            curr.body = {
                                type: "BlockStatement",
                                body: [
                                    curr.body
                                ]
                            };
                        }
                        if (curr.init) {
                            toAppend.push({
                                type: "ExpressionStatement",
                                expression: curr.init
                            });
                            curr.init = null;
                        }
                        //
                        // if (curr.init?.type === "AssignmentExpression") {
                        //   processAssignmentExpressionInExpressionStmt(curr.init, toAppend)
                        // } else if (curr.init?.type === "SequenceExpression") {
                        //   curr.init = simplifySequenceExpr(curr.init, toAppend);
                        // }
                        break;
                }
                if (toAppend.length) {
                    (_a = node.body).splice.apply(_a, __spreadArray([i, 0], toAppend));
                    i--;
                }
            }
        },
    });
}
exports.processBlockStatements = processBlockStatements;
function processUnaryExpr(expr, toAppend) {
    switch (expr.argument.type) {
        case "SequenceExpression":
            expr.argument = simplifySequenceExpr(expr.argument, toAppend);
            break;
        case "BinaryExpression":
            processBinaryExpression(expr.argument, toAppend);
            break;
        case "LogicalExpression":
            processLogicalExpr(expr.argument, toAppend);
            break;
        case "MemberExpression":
            processMemberExpr(expr.argument, toAppend);
            break;
        case "CallExpression":
            processCallExpr(expr.argument, toAppend);
            break;
        case "AssignmentExpression":
            var varName = {
                type: "Identifier",
                name: "var_" + globalVarCounter++
            };
            var variable = {
                type: "VariableDeclaration",
                kind: "var",
                declarations: [
                    {
                        type: "VariableDeclarator",
                        init: expr.argument,
                        id: varName
                    }
                ]
            };
            toAppend.push(variable);
            expr.argument = varName;
            break;
    }
}
function processInlineExpression(expr, toAppend, replaceHandler) {
    switch (expr.type) {
        case "CallExpression":
            processCallExpr(expr, toAppend);
            break;
        case "SequenceExpression":
            replaceHandler(simplifySequenceExpr(expr, toAppend));
            break;
        case "UnaryExpression":
            processUnaryExpr(expr, toAppend);
            break;
        case "BinaryExpression":
            processBinaryExpression(expr, toAppend);
            break;
        case "MemberExpression":
            processMemberExpr(expr, toAppend);
            break;
        case "AssignmentExpression":
            processAssignmentExpressionInExpressionStmt(expr, toAppend);
            break;
        case "LogicalExpression":
            processLogicalExpr(expr, toAppend);
            break;
        case "NewExpression":
            processNewExpr(expr, toAppend);
            break;
    }
}
function processLogicalExpr(logical, toAppend) {
    if (logical.operator === "&&") {
        var left = logical.left;
        processInlineExpression(left, toAppend, function (r) { return logical.left = r; });
        // processInlineExpression(logical.right, toAppend, r => logical.right = r)
        //
        // if (logical.right.type === "SequenceExpression") {
        //   logical.right = simplifySequenceExpr(logical.right, toAppend);
        // }
        //
        //
        // const left = logical.left;
        // processInlineExpression(left, toAppend, r => logical.left = r);
    }
    else if (logical.operator === "||") {
        processInlineExpression(logical.left, toAppend, function (r) { return logical.left = r; });
        // if (logical.left.type === "SequenceExpression") {
        //   logical.left = simplifySequenceExpr(logical.left, toAppend);
        // } else if (logical.left.type === "AssignmentExpression") {
        //   processAssignmentExpressionInExpressionStmt(logical.left, toAppend);
        // } else if (logical.left.type === "BinaryExpression") {
        //   processBinaryExpression(logical.left, toAppend);
        // }
    }
}
function processObjectExpr(expr, toAppend) {
    for (var _i = 0, _a = expr.properties; _i < _a.length; _i++) {
        var prop = _a[_i];
        if (prop.type === "Property") {
            if (prop.value.type === "SequenceExpression") {
                prop.value = simplifySequenceExpr(prop.value, toAppend);
            }
        }
        else {
            debugger;
            throw new Error("Only Property supported for processing of ObjectExpression");
        }
    }
}
function splitReturnSeqStatementToExprsArray(ret) {
    var seq = ret.argument;
    var leadingExpressions = seq.expressions.slice(0, -1).map(function (e) { return ({
        type: "ExpressionStatement",
        expression: e
    }); });
    var lastExpr = distillateReturnExpressions(seq.expressions[seq.expressions.length - 1]);
    leadingExpressions.push(lastExpr);
    return leadingExpressions;
    function distillateReturnExpressions(inExpr) {
        if (inExpr.type === "SequenceExpression") {
            leadingExpressions.push.apply(leadingExpressions, inExpr.expressions.slice(0, -1).map(function (e) { return ({
                type: "ExpressionStatement",
                expression: e
            }); }));
            return distillateReturnExpressions(inExpr[inExpr.expressions.length - 1]);
        }
        return {
            type: "ReturnStatement",
            argument: inExpr
        };
    }
}
exports.splitReturnSeqStatementToExprsArray = splitReturnSeqStatementToExprsArray;
function simplifySequenceExpr(seq, toAppend) {
    for (var _i = 0, _a = seq.expressions.slice(0, -1); _i < _a.length; _i++) {
        var expr = _a[_i];
        if (expr.type === "LogicalExpression") {
            var ifExpr = convertLogicalExpressionToIfStatement(expr);
            toAppend.push(ifExpr);
        }
        else {
            toAppend.push({
                type: "ExpressionStatement",
                expression: expr
            });
        }
    }
    return seq.expressions.slice(-1)[0];
}
exports.simplifySequenceExpr = simplifySequenceExpr;
function processMemberExpr(callee, toAppend) {
    if (callee.property.type === "SequenceExpression") {
        callee.property = simplifySequenceExpr(callee.property, toAppend);
    }
    if (callee.object.type === "MemberExpression") {
        // callee = callee.object;
        processMemberExpr(callee.object, toAppend);
        // continue;
    }
    if (callee.property.type === "MemberExpression") {
        // callee = callee.object;
        processMemberExpr(callee.property, toAppend);
        // continue;
    }
    if (callee.object.type === "CallExpression") {
        processCallExpr(callee.object, toAppend);
    }
    if (callee.object.type === "SequenceExpression") {
        callee.object = simplifySequenceExpr(callee.object, toAppend);
    }
}
function canArgumentBeConvertedToBlockScopeVar(arg) {
    // TODO: maybe check if LogicalExpression||ArrayExpression||ConditionalExpression||BinaryExpression are simple and skip them?
    return arg.type === "CallExpression"
        || arg.type === "LogicalExpression"
        || arg.type === "NewExpression"
        || arg.type === "FunctionExpression"
        || arg.type === "ArrayExpression"
        || arg.type === "ConditionalExpression"
        || arg.type === "ObjectExpression"
        || arg.type === "BinaryExpression";
}
function processCallExpr(call, toAppend) {
    var callee = call.callee;
    if (callee.type === "MemberExpression") {
        processMemberExpr(callee, toAppend);
    }
    else if (callee.type === "SequenceExpression") {
        call.callee = simplifySequenceExpr(callee, toAppend);
    }
    for (var idx = 0; idx < call.arguments.length; idx++) {
        var arg = call.arguments[idx];
        // const id = convertArgToStatementIfNotSimple(arg, toAppend);
        // if (id) {
        //   call.arguments[idx] = id;
        // }
        if (arg.type === "SequenceExpression") {
            call.arguments[idx] = simplifySequenceExpr(arg, toAppend);
        }
        else if (arg.type === "MemberExpression") {
            processMemberExpr(arg, toAppend);
        }
        else if (canArgumentBeConvertedToBlockScopeVar(arg)) {
            var id = convertArgToStatementIfNotSimple(arg, toAppend);
            if (id) {
                call.arguments[idx] = id;
            }
        }
    }
}
function processIfStatementInBlock(curr, toAppend) {
    var test = curr.test;
    processInlineExpression(test, toAppend, function (r) { return curr.test = r; });
}
function processBinaryExpression(node, toAppend) {
    deepProcessSequenceInBinaryExpression(node, toAppend);
    var handlers = {
        "CallExpression": processCallExpr,
        "MemberExpression": processMemberExpr,
        "BinaryExpression": processBinaryExpression,
    };
    for (var _i = 0, _a = [node.left, node.right]; _i < _a.length; _i++) {
        var side = _a[_i];
        var handler = handlers[side.type];
        if (handler) {
            handler(side, toAppend);
        }
    }
    function deepProcessSequenceInBinaryExpression(expr, toAppend) {
        var sides = ["right", "left"];
        for (var _i = 0, sides_1 = sides; _i < sides_1.length; _i++) {
            var side = sides_1[_i];
            if (expr[side].type === "BinaryExpression") {
                var bin = expr[side];
                processSequences(bin);
            }
        }
        processSequences(expr);
        function processSequences(node) {
            for (var _i = 0, sides_2 = sides; _i < sides_2.length; _i++) {
                var childSide = sides_2[_i];
                if (node[childSide].type === "SequenceExpression") {
                    node[childSide] = simplifySequenceExpr(node[childSide], toAppend);
                }
            }
        }
    }
    /*
      function processDeepestBinaryExpression(bin: ESTree.BinaryExpression, toAppend: ESTree.Node[]): void {
        const bins = [bin.left, bin.right].filter(e => e.type === "BinaryExpression") as ESTree.BinaryExpression[];
        for (const b of bins) {
          if (b.right.type === "BinaryExpression") {
            processDeepestBinaryExpression(b.right, toAppend);
          }
          if (b.left.type === "BinaryExpression") {
            processDeepestBinaryExpression(b.left, toAppend);
          }
  
        }
  
        deepProcessSequenceInBinaryExpression(bin, toAppend);
      }
  
      function processDeepestMemberExpression(bin: ESTree.BinaryExpression, toAppend: ESTree.Statement[]): void {
        const bins = [bin.left, bin.right].filter(e => e.type === "BinaryExpression") as ESTree.BinaryExpression[];
        for (const b of bins) {
          processBinaryExpression(b, toAppend);
        }
  
        processChildMemberExpr(bin);
  
        function processChildMemberExpr(expr: ESTree.BinaryExpression) {
          if (expr.right.type === "MemberExpression") {
            processMemberExpr(expr.right, toAppend);
          }
          if (expr.left.type === "MemberExpression") {
            processMemberExpr(expr.left, toAppend);
          }
        }
      }*/
}
function convertLogicalExpressionToIfStatement(expr) {
    var test;
    if (expr.operator === "&&") {
        test = expr.left;
    }
    else if (expr.operator === "||") {
        test = {
            type: "UnaryExpression",
            operator: "!",
            prefix: true,
            argument: expr.left
        };
    }
    else {
        throw new Error("Operator \"" + expr.operator + "\" not supported in conversion from LogicalExpression to IfStatement yet.");
    }
    return {
        type: "IfStatement",
        test: test,
        consequent: {
            type: "BlockStatement",
            body: [
                {
                    type: "ExpressionStatement",
                    expression: expr.right
                }
            ]
        }
    };
}
function convertArgToStatementIfNotSimple(arg, toAppend) {
    if (arg.type === "Literal" || arg.type === "Identifier") {
        return undefined;
    }
    var id = {
        type: "Identifier",
        name: "arg_" + globalArgsCounter++
    };
    var varDecl = {
        type: "VariableDeclaration",
        declarations: [
            {
                type: "VariableDeclarator",
                init: arg,
                id: id
            }
        ],
        kind: "var"
    };
    toAppend.push(varDecl);
    return id;
}
function processNewExpr(newExpr, toAppend) {
    for (var aIdx = 0; aIdx < newExpr.arguments.length; aIdx++) {
        var arg = newExpr.arguments[aIdx];
        var id = convertArgToStatementIfNotSimple(arg, toAppend);
        if (id) {
            newExpr.arguments[aIdx] = id;
        }
        //
        // if (arg.type === "SequenceExpression") {
        //   newExpr.arguments[aIdx] = simplifySequenceExpr(arg, toAppend);
        // }
    }
    if (newExpr.callee.type === "SequenceExpression") {
        newExpr.callee = simplifySequenceExpr(newExpr.callee, toAppend);
    }
}
function processArrayExpr(arrayExpr, toAppend) {
    for (var i = 0; i < arrayExpr.elements.length; i++) {
        var e = arrayExpr.elements[i];
        if (e.type === "SequenceExpression") {
            arrayExpr.elements[i] = simplifySequenceExpr(e, toAppend);
        }
        else if (e.type === "CallExpression") {
            processCallExpr(e, toAppend);
        }
        else if (e.type === "MemberExpression") {
            processMemberExpr(e, toAppend);
        }
    }
}
function processCondExpr(cond, toAppend) {
    if (cond.test.type === "CallExpression") {
        processCallExpr(cond.test, toAppend);
        // if (cond.test.callee.type === "MemberExpression") {
        //   const seq = cond.test.callee.object;
        //   if (seq.type === "SequenceExpression") {
        //     cond.test.callee.object = seq.expressions.slice(-1)[0];
        //     toAppend.push(...toExpressionStatements(seq, 0, -1));
        //   }
        // }
    }
    else if (cond.test.type === "BinaryExpression") {
        processBinaryExpression(cond.test, toAppend);
    }
    else if (cond.test.type === "SequenceExpression") {
        cond.test = simplifySequenceExpr(cond.test, toAppend);
    } /* else if (cond.test.type === "LogicalExpression") {
      processLogicalExpr(cond.test, toAppend);
    }*/
    if (cond.consequent.type === "SequenceExpression") {
        cond.consequent = simplifySequenceExpr(cond.consequent, toAppend);
    }
}
function processAssignmentExpressionInExpressionStmt(assignment, toAppend) {
    function processRightMember() {
        if (assignment.right.type === "ConditionalExpression") {
            var cond = assignment.right;
            processCondExpr(cond, toAppend);
        }
        if (assignment.right.type === "NewExpression") {
            var newExpr = assignment.right;
            processNewExpr(newExpr, toAppend);
        }
        if (assignment.right.type === "CallExpression") {
            processCallExpr(assignment.right, toAppend);
            // const callee = assignment.right.callee;
            // processCallExpr(assignment.right, toAppend);
            // if (callee.type === "MemberExpression" && callee.property.type === "SequenceExpression") {
            //   toAppend.push(...toExpressionStatements(callee.property, 0, -1))
            //   callee.property = callee.property.expressions.slice(-1)[0];
            // }
        }
        if (assignment.right.type === "MemberExpression") {
            processMemberExpr(assignment.right, toAppend);
        }
        if (assignment.right.type === "SequenceExpression") {
            assignment.right = simplifySequenceExpr(assignment.right, toAppend);
        }
        if (assignment.right.type === "ArrayExpression") {
            var arrayExpr = assignment.right;
            processArrayExpr(arrayExpr, toAppend);
        }
        if (assignment.right.type === "BinaryExpression") {
            processBinaryExpression(assignment.right, toAppend);
        }
        if (assignment.right.type === "UnaryExpression") {
            processUnaryExpr(assignment.right, toAppend);
        }
        if (assignment.right.type === "ObjectExpression") {
            processObjectExpr(assignment.right, toAppend);
        }
    }
    if (assignment.right.type === "AssignmentExpression") {
        processAssignmentExpressionInExpressionStmt(assignment.right, toAppend);
    }
    if (assignment.left.type === "MemberExpression") {
        processMemberExpr(assignment.left, toAppend);
    }
    processRightMember();
}
