var fs = require('fs');

var data = fs.readFile('myTxt.txt',function(err,data){
	
	if(err){
		console.log(err);
	}
	setTimeout(()=>{
		console.log("display after 3 second");
	},3000);
	console.log(data);
});
console.log("start hear");