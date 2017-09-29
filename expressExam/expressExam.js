var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var fs = require('fs');
var app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname +'/public'));

app.get('/', function(req, res){
	if(req.cookies.passAuth){
		//res.send('<h1>Login Success</h1>');
		fs.readFile(__dirname+'/public/logout.html', function(error, data) {
			if(error) {
				res.send(JSON.stringify(error));
			} else {
				res.send(data.toString());
			}
		});

	} else {
		res.redirect('/login');
	}
});

app.get('/login', function(req, res){
	fs.readFile(__dirname+'/public/login.html', function(error, data) {
		if(error) {
			res.send(JSON.stringify(error));
		} else {
			res.send(data.toString());
		}
	});
});

app.post('/login', function(req, res){
	var username = req.body.username;
	var password = req.body.password;

	console.log(username, password);
	console.log(req.body);

	if(username == 'rint' && password =='1234'){
		res.cookie('passAuth', true);
		res.redirect('/');
	} else {
		res.redirect('/login');
	}

});

app.post('/logout', function(req, res){
	//res.cookie('passAuth', false);
	res.clearCookie('passAuth');
	res.redirect('/login');
});

app.get('/a', function(req, res){
	res.send('<a href="/b"> Go to B </a>');
});

app.get('/b', function(req, res){
	res.send('<a href="/a"> Go to A </a>');
});

app.get('/page/:id', function(req, res){
	var name = req.params.id;

	res.send('<h1>'+ name + ' Page </h1>');
});


/*
app.use(function(req, res) {
	//res.writeHead(200, {'Content-Type': 'text/html'});
	//res.end('<h1>Hello express </h1>');
	
	var name = req.query.name;
	var region = req.query.region;

	res.send('<h1>Hello express </h1>'+ 'name:'+name+'<br>region:'+region);

});*/

app.listen(52273, function(){
	console.log("Server Running at http");
});