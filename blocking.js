var fs = require('fs');

var data = fs.readFileSync('myTxt.txt');
console.log(data.toString());
console.log("end hear");
