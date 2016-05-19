(function(){
	var express=require('express');
	var bodyParser=require('body-parser');
	var morgan=require('morgan');
	var mysql=require('mysql');
	var puerto=2000;
	var conf=require('./config');
	var modelo=require('./modelos');		
	var app=express();
	var cor=require('cors');
	
	app.use(cors());
	app.use(conf.secret);
	app.use(bodyParser.urlencoded({
		extended:false
	}));
	app.use(bodyParser.json());
	app.use(morgan('dev'));
	app.use('/api/v1',require('./rutas')(modelo));
	
	modelo.sequelize.sync().then(function(){
		app.listen(puerto,function(){
			console.log("Servidor iniciado en el puerto: "+puerto);
		});
	});
})();