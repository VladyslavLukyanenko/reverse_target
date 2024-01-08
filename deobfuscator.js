// @ts-ignore
var process = require('process');
// @ts-ignore
var fs = require("fs");
// @ts-ignore
var deobfuscators = require("./deobfuscators");
var userSpecifiedInput = process.argv[2];
var userSpecifiedOutput = process.argv[3];
if (userSpecifiedInput) {
    console.log("input " + userSpecifiedInput);
}
if (userSpecifiedOutput) {
    console.log("output " + userSpecifiedOutput);
}
var baseDir = "./samples/1/";
var inputFiles = [
    "message_70",
    "child.1",
    "doc1_files/-jw74B8FdASXdJQr",
    "doc1_files/aElf-f95DGHuEGvF",
    "doc1_files/kiUcZf_RjZ15gtvx",
];
for (var _i = 0, inputFiles_1 = inputFiles; _i < inputFiles_1.length; _i++) {
    var inputFile = inputFiles_1[_i];
    var script = fs.readFileSync(baseDir + inputFile + ".js", "utf8");
    var deobfuscated = deobfuscators.v1Main(script);
    fs.writeFileSync(baseDir + inputFile + ".deobfuscated.js", deobfuscated, { encoding: "utf8" });
}
