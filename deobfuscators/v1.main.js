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
exports.deobfuscate = void 0;
var block_processor_1 = require("./processors/block.processor");
// @ts-ignore
var esprima = require("esprima");
// @ts-ignore
var escodegen = require("escodegen");
// @ts-ignore
var estraverse = require("estraverse");
function deobfuscate(script) {
    var rd_f__decryptFnStr = "\n(function (td_V, td_F) {\n      if (0 === this.td_d.length) {\n        var td_l = this.td_c.substr(0, 32);\n        var td_d = '';\n        var td_O = 32;\n        ;\n        for (; td_O < td_e.length; td_O += 2) {\n          var arg_3 = td_e.substr(td_O, 2);\n          var arg_2 = parseInt(arg_3, 16);\n          td_d += String.fromCharCode(arg_2);\n        }\n        this.td_d = getDecryptedStr(td_l, td_d);\n      }\n      if (this.td_d.substr) {\n        return this.td_d.substr(td_V, td_F);\n      }\n\n      function getDecryptedStr(td_D, td_M) {\n        try {\n          var td_z = [''];\n          var td_A = 0;\n          var td_N = 0;\n          ;\n          for (; td_N < td_M.length; ++td_N) {\n            var arg_1 = td_D.charCodeAt(td_A) ^ td_M.charCodeAt(td_N);\n            var arg_0 = String.fromCharCode(arg_1);\n            td_z.push(arg_0);\n            td_A++;\n            if (td_A >= td_D.length) {\n              td_A = 0;\n            }\n          }\n          return td_z.join('');\n        } catch (td_r) {\n          return null;\n        }\n      };\n    })\n";
    var rd_f__decryptFnAst = esprima.parseScript(rd_f__decryptFnStr, {
        loc: true
    });
    var decryptFnWithFunctionField = "td_3L";
    var td_3K = function (td_D, td_M) {
        try {
            var td_z = [''];
            var td_A = 0;
            var td_N = 0;
            ;
            for (; td_N < td_M.length; ++td_N) {
                var arg_1 = td_D.charCodeAt(td_A) ^ td_M.charCodeAt(td_N);
                var arg_0 = String.fromCharCode(arg_1);
                td_z.push(arg_0);
                td_A++;
                if (td_A >= td_D.length) {
                    td_A = 0;
                }
            }
            return td_z.join('');
        }
        catch (td_r) {
            return null;
        }
    };
    var td_3L = function (td_e) {
        // if (!String || !String.fromCharCode || !parseInt) {
        //   return null;
        // }
        try {
            this.td_c = td_e;
            this.td_d = '';
            this.td_f = function (td_V, td_F) {
                if (0 === this.td_d.length) {
                    var td_l = this.td_c.substr(0, 32);
                    var td_d = '';
                    var td_O = 32;
                    ;
                    for (; td_O < td_e.length; td_O += 2) {
                        var arg_3 = td_e.substr(td_O, 2);
                        var arg_2 = parseInt(arg_3, 16);
                        td_d += String.fromCharCode(arg_2);
                    }
                    this.td_d = getDecryptedStr(td_l, td_d);
                }
                if (this.td_d.substr) {
                    return this.td_d.substr(td_V, td_F);
                }
                function getDecryptedStr(td_D, td_M) {
                    try {
                        var td_z = [''];
                        var td_A = 0;
                        var td_N = 0;
                        ;
                        for (; td_N < td_M.length; ++td_N) {
                            var arg_1 = td_D.charCodeAt(td_A) ^ td_M.charCodeAt(td_N);
                            var arg_0 = String.fromCharCode(arg_1);
                            td_z.push(arg_0);
                            td_A++;
                            if (td_A >= td_D.length) {
                                td_A = 0;
                            }
                        }
                        return td_z.join('');
                    }
                    catch (td_r) {
                        return null;
                    }
                }
                ;
            };
        }
        catch (td_b) {
        }
        // return null;
    };
    var td_1R = function (td_b) {
        if (td_b === null || td_b.length === null || !String || !String.fromCharCode) {
            return null;
        }
        var td_x = null;
        try {
            var td_o = '';
            var td_G = [];
            var td_E = String.fromCharCode(48) + String.fromCharCode(48) + String.fromCharCode(48);
            var td_U = 0;
            var td_h = 0;
            ;
            for (; td_h < td_b.length; ++td_h) {
                if (65 + td_U >= 126) {
                    td_U = 0;
                }
                var td_S = (td_E + td_b.charCodeAt(td_U++)).slice(-3);
                td_G.push(td_S);
            }
            var td_j = td_G.join('');
            td_U = 0;
            var td_h = 0;
            ;
            for (; td_h < td_j.length; ++td_h) {
                if (65 + td_U >= 126) {
                    td_U = 0;
                }
                var arg_4 = 65 + td_U++;
                var td_q = String.fromCharCode(arg_4);
                if (td_q !== [][[]] + '') {
                    td_o += td_q;
                }
            }
            td_x = td_3K(td_o, td_j);
        }
        catch (td_l) {
            return null;
        }
        return td_x;
    };
    var td_3T = function (td_w) {
        if (td_w === null || td_w.length === null) {
            return null;
        }
        var td_t = '';
        try {
            var td_C = '';
            var td_Z = 0;
            var td_P = 0;
            ;
            for (; td_P < td_w.length; ++td_P) {
                if (65 + td_Z >= 126) {
                    td_Z = 0;
                }
                var arg_5 = 65 + td_Z++;
                var td_D = String.fromCharCode(arg_5);
                if (td_D !== [][[]] + '') {
                    td_C += td_D;
                }
            }
            var td_r = td_3K(td_C, td_w);
            var td_b = td_r.match(/.{1,3}/g);
            var td_P = 0;
            ;
            for (; td_P < td_b.length; ++td_P) {
                var arg_6 = parseInt(td_b[td_P], 10);
                td_t += String.fromCharCode(arg_6);
            }
        }
        catch (td_n) {
            return null;
        }
        return td_t;
    };
    var decryptFns = {
        td_3K: td_3K,
        td_3L: td_3L,
        td_1R: td_1R,
        td_3T: td_3T
    };
    var $script = esprima.parseScript(script, {
        loc: true
    });
    // 2. convert comma variable declarations to separate statements
    estraverse.replace($script, {
        enter: function (node, parent) {
            if (node.type !== "BlockStatement" || node.body.every(function (n) { return n.type !== "VariableDeclaration"; })) {
                return;
            }
            var body = [];
            var _loop_1 = function (c) {
                if (c.type === "VariableDeclaration" && c.declarations.length > 1) {
                    body.push.apply(body, c.declarations.map(function (s) { return (__assign(__assign({}, c), { declarations: [s] })); }));
                }
                else {
                    body.push(c);
                }
            };
            for (var _i = 0, _a = node.body; _i < _a.length; _i++) {
                var c = _a[_i];
                _loop_1(c);
            }
            return {
                type: "BlockStatement",
                body: body
            };
        },
    });
    // 4. replace !0 and !1 to boolean
    estraverse.replace($script, {
        enter: function (node, parent) {
            if (node.type === "UnaryExpression" && node.operator === "!" && node.argument.type === "Literal") {
                if (node.argument.value === 1 || node.argument.value === 0) {
                    return {
                        type: "Literal",
                        value: !node.argument.value
                    };
                }
            }
        }
    });
    // 5. make cases to have block statement as consequent part
    estraverse.replace($script, {
        enter: function (node, parent) {
            if (node.type !== "SwitchCase") {
                return;
            }
            if (node.consequent.every(function (e) { return e.type === "BlockStatement"; })) {
                return;
            }
            node.consequent = [
                {
                    type: "BlockStatement",
                    body: __spreadArray([], node.consequent)
                }
            ];
        }
    });
    // decrypt strings
    // example: td_0A.tdz_dcaf5d801872474daf2e4fd11da09a90 = new td_0A.td_3L('dcaf5d801872474daf2e4fd11da09a90442e322f70445c59470458505e52571041124b15515b465041140d595a004d590b0d4e1e1817505f52534053425219020d07410d1646005045055c121b414e590017095b17551a10595d5e555c4309465044120458125913540911444043070c14021307584456515c5d0a105958420d04441213550a11540c464310165f190c14021307584456515c5d0a10435a5b0004441213550a11540c461542580f4a40051104084146181f0f04185d565d510715585d075e0307455014115c500258440d0c0f494d494b585e5b5c4555415149070a53165c110d55450c095550065144050f150358144c4941594553595a5b1208034404581301465c0b05554d13585e17130014500a4c');
    var caches = {};
    estraverse.replace($script, {
        enter: function (node, parent) {
            if (node.type !== "ExpressionStatement" || node.expression.type !== "AssignmentExpression") {
                return;
            }
            var assign = node.expression;
            if (assign.type !== "AssignmentExpression") {
                return;
            }
            if (assign.left.type !== "MemberExpression" || assign.right.type !== "NewExpression") {
                return;
            }
            if (assign.left.property.type !== "Identifier" || assign.left.property.name.indexOf("tdz_") !== 0) {
                return;
            }
            var expr = assign.right;
            if (expr.callee.type !== "MemberExpression" || expr.callee.property.type !== "Identifier") {
                return;
            }
            var callFnName = expr.callee.property.name;
            if (expr.arguments.length !== 1
                || expr.arguments[0].type !== "Literal"
            // || !(callFnName in decryptFns)
            ) {
                return;
            }
            caches[assign.left.property.name] = new td_3L(expr.arguments[0].value);
            this.remove();
        }
    });
    estraverse.replace($script, {
        enter: function (node, parent) {
            var _a;
            if (node.type !== "VariableDeclaration" || node.declarations.length !== 1) {
                return;
            }
            var decl = node.declarations[0];
            if (decl.id.type !== "Identifier" || ((_a = decl.init) === null || _a === void 0 ? void 0 : _a.type) !== "NewExpression") {
                return;
            }
            var expr = decl.init;
            if (expr.callee.type !== "MemberExpression" || expr.callee.property.type !== "Identifier") {
                return;
            }
            var callFnName = expr.callee.property.name;
            if (expr.arguments.length !== 1
                || expr.arguments[0].type !== "Literal"
            // || !(callFnName in decryptFns)
            ) {
                return;
            }
            caches[decl.id.name] = new td_3L(expr.arguments[0].value);
            this.remove();
        }
    });
    estraverse.replace($script, {
        enter: function (expr, parent) {
            if (expr.type !== "CallExpression"
                || expr.callee.type !== "MemberExpression"
                || expr.callee.property.type !== "Identifier"
                || expr.callee.property.name !== "td_f") {
                return;
            }
            var memb = expr.callee.object;
            var fnName;
            if (memb.type === "MemberExpression" && memb.property.type === "Identifier" && memb.property.name in caches) {
                fnName = memb.property.name;
            }
            else if (memb.type === "Identifier" && memb.name in caches) {
                fnName = memb.name;
            }
            if (!fnName) {
                return;
            }
            var decryptor = caches[fnName];
            var value = decryptor.td_f.apply(decryptor, expr.arguments.map(function (e) { return e.value; }));
            return {
                type: "Literal",
                value: value
            };
        }
    });
    // simplify ternary exprs/if stmts
    estraverse.replace($script, {
        enter: function (node, parent) {
            if (node.type !== "ConditionalExpression" || node.test.type !== "LogicalExpression" || node.test.operator !== "&&") {
                return;
            }
            var bin = node.test.right;
            if (bin.type !== "BinaryExpression"
                || bin.left.type !== "UnaryExpression"
                || bin.left.operator !== "typeof") {
                return;
            }
            var arg = bin.left.argument;
            if (arg.type !== "MemberExpression" || arg.property.type !== "Identifier" || arg.property.name !== "td_f") {
                return;
            }
            return node.consequent;
        }
    });
    estraverse.replace($script, {
        enter: function (node, parent) {
            if (node.type !== "ConditionalExpression" || node.test.type !== "Identifier" || !(node.test.name in caches)) {
                return;
            }
            return node.consequent;
        }
    });
    estraverse.replace($script, {
        enter: function (node, parent) {
            if (node.type !== "IfStatement" || node.test.type !== "LogicalExpression" || node.test.operator !== "&&") {
                return;
            }
            var bin = node.test.right;
            if (bin.type !== "BinaryExpression"
                || bin.left.type !== "UnaryExpression"
                || bin.left.operator !== "typeof") {
                return;
            }
            var arg = bin.left.argument;
            if (arg.type !== "MemberExpression" || arg.property.type !== "Identifier" || arg.property.name !== "td_f") {
                return;
            }
            var consequent = node.consequent;
            if (consequent.type === "BlockStatement" && consequent.body.length === 1) {
                return consequent.body[0];
            }
            return consequent;
        }
    });
    // decrypt strings from numbers
    // var arg_22 = Number(890830).toString(31);
    estraverse.replace($script, {
        enter: function (node, parent) {
            var _a, _b;
            if (node.type !== "CallExpression"
                || node.callee.type !== "MemberExpression"
                || node.callee.property.type !== "Identifier"
                || node.callee.property.name !== "toString"
                || ((_a = node.arguments[0]) === null || _a === void 0 ? void 0 : _a.type) !== "Literal") {
                return;
            }
            var call = node.callee.object;
            if (call.type !== "CallExpression"
                || call.callee.type !== "Identifier"
                || call.callee.name !== "Number"
                || ((_b = call.arguments[0]) === null || _b === void 0 ? void 0 : _b.type) !== "Literal") {
                return;
            }
            return {
                type: "Literal",
                value: Number(call.arguments[0].value).toString(node.arguments[0].value)
            };
        }
    });
    // 5. control flow
    block_processor_1.processBlockStatements($script);
    return escodegen.generate($script);
}
exports.deobfuscate = deobfuscate;
