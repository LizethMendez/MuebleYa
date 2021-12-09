var http=require('http');
var url=require('url');
var fs=require('fs');
var querystring = require('querystring');

var mysql=require('mysql');

var conexion=mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'base10'
});

conexion.connect(function (error){
	if (error)
		console.log('Problemas de conexion con mysql');
});


var mime = {
   'html' : 'text/html',
   'css'  : 'text/css',
   'jpg'  : 'image/jpg',
   'ico'  : 'image/x-icon',
   'mp3'  :	'audio/mpeg3',
   'mp4'  : 'video/mp4'
};

var servidor=http.createServer(function(pedido,respuesta){
    var objetourl = url.parse(pedido.url);
	var camino='public'+objetourl.pathname;
	if (camino=='public/')
		camino='public/index.html';
		console.log('Problemas de conexion con puerto');
	/*encaminar(pedido,respuesta,camino);*/
});

servidor.listen(8888);
