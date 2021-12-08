var http = require('http');
var event = require('events');

var server = http.createServer(function(req,res){	
	res.end('server works !!!!!');
	
	
});

server.listen(3050,'localhost',function(){
	console.log('server start on port no : 3000');
});
