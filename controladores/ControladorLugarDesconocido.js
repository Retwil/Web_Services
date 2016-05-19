module.exports= function(modelo){
	return{
		add:function(req,res){
			modelo.lugardesconocido.create({
				idLugarDesconocido : null,
				nombre:req.body.nombre,
				idDepartamento: req.body.idDepartamento
			}).then(function(){
				res.json({"mensaje":"agregado"});
			}).error(function(){
					res.json({"mensaje":"error al intentar guardar el lugardesconocido."});
				throw err;
			});
		},
		
		delete:function(req,res){
			modelo.lugardesconocido.destroy({
				where:{
					idLugarDesconocido: req.params.id
				}
			}).then(function(){
				res.json({"mensaje":"lugardesconocido eliminado"});
			}).error(function(){
				throw err;
			});			
		},
		list:function(req,res){
			modelo.lugardesconocido.findAll({
				where:{
					idDepartamento: req.params.id
				}
			}).then(function(data){
				res.json(data);
			}).error(function(){
				res.json({"mensaje":"Error al listar lugardesconocido","status":500});
			});
		},
		
		edit:function(req,res){
			modelo.lugardesconocido.find({
				where:{
					idLugarDesconocido:req.params.id
				}
			}).then(function(lugardesconocido){
				if(lugardesconocido){
					lugardesconocido.updateAttributes({
						nombre:req.body.nombre,
						descripcion:req.body.descripcion,
					}).then(function(lugardesconocido){
						res.json({"mensaje":"El lugardesconocido "+lugardesconocido.nombre+" fue modificado de manera correcta."});
					});
				}
			}).error(function(error){
						res.json({"mensaje":"El lugardesconocido no se pudo editar "+error,"status":500});
			});
		}
	}
}