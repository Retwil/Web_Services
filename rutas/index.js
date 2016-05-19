var ruta=require('express').Router();


module.exports=(function(modelo){
var usuario=require('../controladores/ControladorUsuario.js')(modelo);
var departamento=require('../controladores/ControladorDepartamento.js')(modelo);
var restaurante=require('../controladores/ControladorRestaurante.js')(modelo);
var lugardesconocido=require('../controladores/ControladorLugarDesconocido.js')(modelo);
var hotel=require('../controladores/ControladorHotel.js')(modelo);
ruta.get('/',function(peticion, respuesta){
	respuesta.send("Servidor iniciado");
});

/*ruta usuario*/
ruta.post('/usuario/registro', usuario.registro);
ruta.post('/usuario/login', usuario.login);

ruta.use(usuario.tokenMiddleware);
/*ruta depto*/
ruta.get('/departamento/:id',departamento.list);
ruta.post('/departamento',departamento.add);
ruta.put('/departamento/:id',departamento.edit);
ruta.delete('/departamento/:id',departamento.delete);

/*ruta restau*/
ruta.get('/restaurante/:id',restaurante.list);
ruta.post('/restaurante',restaurante.add);
ruta.put('/restaurante/:id',restaurante.edit);
ruta.delete('/restaurante/:id',restaurante.delete);

/*ruta lugar*/
ruta.get('/lugardesconocido/:id',lugardesconocido.list);
ruta.post('/lugardesconocido',lugardesconocido.add);
ruta.put('/lugardesconocido/:id',lugardesconocido.edit);
ruta.delete('/lugardesconocido/:id',lugardesconocido.delete);

/*ruta hotel*/
ruta.get('/hotel/:id',hotel.list);
ruta.post('/hotel',hotel.add);
ruta.put('/hotel/:id',hotel.edit);
ruta.delete('/hotel/:id',hotel.delete);

ruta.get('/token', usuario.tokenGenerator);

return ruta;
});