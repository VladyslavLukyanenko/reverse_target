import * as ESTree from "estree";

// @ts-ignore
const esprima = require("esprima");
// @ts-ignore
const escodegen = require("escodegen");
// @ts-ignore
const estraverse = require("estraverse");

interface Call {
  fnName: string;
  desc: string;
  expr: ESTree.CallExpression,
  callsTo: Call[];
  callsFrom: Call[];
}

export function getCallGraph(script: string): Call[] {
  const calls: Call[] = [];
  var $script = esprima.parseScript(script, {
    loc: true
  });

  // grab defined function names
  estraverse.replace($script, {
    enter: function (node: ESTree.Node, parent?: ESTree.Node) {
    }
  });

  estraverse.replace($script, {
    enter: function (node: ESTree.Node, parent?: ESTree.Node) {
    }
  });


  return calls;
}