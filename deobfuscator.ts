// @ts-ignore
const process = require('process');
// @ts-ignore
const fs = require("fs");
// @ts-ignore
const deobfuscators = require("./deobfuscators");

const userSpecifiedInput = process.argv[2];
const userSpecifiedOutput = process.argv[3];

if (userSpecifiedInput) {
  console.log("input " + userSpecifiedInput);
}
if (userSpecifiedOutput) {
  console.log("output " + userSpecifiedOutput);
}

const baseDir = "./samples/1/";

const inputFiles = [
  "message_70",
  "child.1",
  "doc1_files/-jw74B8FdASXdJQr",
  "doc1_files/aElf-f95DGHuEGvF",
  "doc1_files/kiUcZf_RjZ15gtvx",
];

for (const inputFile of inputFiles) {
  var script = fs.readFileSync(baseDir + inputFile + ".js", "utf8");

  const deobfuscated = deobfuscators.v1Main(script);
  fs.writeFileSync(baseDir + inputFile + ".deobfuscated.js", deobfuscated, {encoding: "utf8"})
}
