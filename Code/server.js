//server.js
//Recibir comandos

var express = require('express');
var dns = require('dns');
var validator = require('validator');
var Pageres = require('pageres');

var server = express();

dns.setServers(['8.8.8.8']);

server.get("/", function(req, res){
	res.send("Hola Mundo");
	console.log(req.ip);
	console.log('req recibido');
});

server.get("/dig/:host/:ip", function(req, res){
	var sec = false
	console.log(req.ip);
	if(validator.isURL(req.params['host'])){
		//Verificar si de cierta manera el dominio resuelve el callback de err
		dns.lookup(req.params["host"], function(err, add){
			console.log(err)
			if(req.params["ip"] != add.toString()){
				/*var pageres = new Pageres()
	    		.src(req.params["ip"], ['640x480'], {crop: true})
	    		.dest(__dirname)
	    		.run();*/
				console.log('missmatch: '+req.params["host"]+': '+ req.params["ip"] +' || ' +add);
			};
		});
	};
	res.send('!');
});

server.get("/json/top", function(req, res){
	console.log('request domains')
	res.json({"domain": "facebook.com", "ip":"127.0.0.1"});
});

server.listen(3000, function(){
	console.log('server running on port 3000!!')
});