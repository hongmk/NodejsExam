//http method 방식에 따른 분기 (POST는 요청에 대한 data를 읽어야함.)

var http = require('http');
var fs = require('fs');
http.createServer(function(req, res){
	if(req.method == 'GET'){
		console.log(req.url+" GET");
		fs.readFile('index.html', function(err, data) {
			if(!err) {
				res.writeHead(200, {'Content-Type':'text/html'});
				res.end(data);
			} else {
				res.wrtieHead(404);
			}
		});

	} else if(req.method == 'POST') {
		console.log(req.url+" POST");
		req.on('data', function(data) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end('<h1>'+data+'<h1>');
		});
	}

}).listen(52273, function(){
	console.log('Server running...');
});