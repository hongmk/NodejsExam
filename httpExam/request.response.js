//http method 방식에 따른 분기 (POST는 요청에 대한 data를 읽어야함.)

var http = require('http');
var fs = require('fs');
var ejs = require('ejs');
var jade = require('jade');

http.createServer(function(req, res){
	if(req.method == 'GET'){
		console.log(req.url+" GET");
		
		if(req.url == '/'){
			fs.readFile('index.html', function(err, data) {
				if(!err) {
					res.writeHead(200, {'Content-Type':'text/html'});
					res.end(data);
				} else {
					res.wrtieHead(404);
				}
			});

		} else if(req.url == '/ejs') { //ejs 수행로직 추가
			fs.readFile('template.ejs', 'utf8', function(err, data) {
				if(!err) {
					var html = ejs.render(data, {
						name: 'Hello',
						description: 'Hello ejs With Node.js111'
					});

					res.writeHead(200, {'Content-Type':'text/html'});
					res.end(html);

				} else {
					res.wrtieHead(404);
				}
			});

		} else if (req.url == '/jade') { //JADE 로직추가
			fs.readFile('template.jade', 'utf8', function(err, data) {
				if(!err) {
					var fn = jade.compile(data);
					var html = fn({
						name: 'Hello',
						value: 'value',
						description: 'Hello jade With Node.js111'
					});

					res.writeHead(200, {'Content-Type':'text/html'});
					res.end(html);

				} else {
					res.wrtieHead(404);
				}
			});
		}


	} else if(req.method == 'POST') {
		console.log(req.url+" POST");
		req.on('data', function(data) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end('<h1>'+data+'<h1>');
		});
	}
	//console.log(req.headers);

}).listen(52273, function(){
	console.log('Server running...');
});