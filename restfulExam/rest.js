var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));

var users = [];

app.get('/user', function(req, res){
	res.send(JSON.stringify(users));
});

app.get('/user/:id', function(req, res) {
	var select_index = -1;

	for(var i=0; i< users.length; i++){
		var obj = users[i];
		if(obj.id == Number(req.params.id)) {
			select_index = i;
			break;
		}
	}

	if(select_index == -1) {
		res.send(JSON.stringify({}));
	} else {
		res.send(JSON.stringify(users[select_index]));
	}
	//res.send(JSON.stringify({api:'get user info', id: req.params.id}));

});

app.post('/user', function(req, res){
	var name = req.body.name;
	var age = Number(req.body.age);
	var id = Number(req.body.id);

	var obj = users[id];

	if(obj.name == name && obj.age == age) {
		res.send(JSON.stringify(obj));
	} else {
		res.send("Fail Login");
	}		
	
	
});

app.put('/user/:id', function(req, res){
	var name = req.body.name;
	var age = Number(req.body.age);
	var obj = {id:users.length+1, name:name, age:age};
	users.push(obj);

	res.send(JSON.stringify({result:true, api: 'modify user info'}));

});

app.delete('/user/:id', function(req, res){
	res.send(JSON.stringify({api: 'delete user info', id: req.params.id}));
});

app.listen(52273, function() {
	console.log('Server Running');
});