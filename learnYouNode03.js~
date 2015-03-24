var fs = require('fs');
var buf;
var realData;
var splitLines = [];

buf = fs.readFileSync(process.argv[2]);
realData = buf.toString();
splitLines = realData.split('\n');

console.log(splitLines.length - 1);
