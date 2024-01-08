"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCallGraph = void 0;
// @ts-ignore
var esprima = require("esprima");
// @ts-ignore
var escodegen = require("escodegen");
// @ts-ignore
var estraverse = require("estraverse");
function getCallGraph(script) {
    var calls = [];
    var $script = esprima.parseScript(script, {
        loc: true
    });
    // grab defined function names
    estraverse.replace($script, {
        enter: function (node, parent) {
        }
    });
    estraverse.replace($script, {
        enter: function (node, parent) {
        }
    });
    return calls;
}
exports.getCallGraph = getCallGraph;
