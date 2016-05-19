module.exports= function(modelo){
	return{
		add:function(req,res){
			modelo.restaurante.create({
				idRestaurante : null,
				nombre:req.body.nombre,
				descripcion:req.body.descripcion,
				idDepartamento: req.body.idDepartamento
			}).then(function(){
				res.json({"mensaje":"agregado"});
			}).error(function(){
					res.json({"mensaje":"error al intentar guardar el restaurante."});
				throw err;
			});
		},
		
		delete:function(req,res){
			modelo.restaurante.destroy({
				where:{
					idRestaurante: req.params.id
				}
			}).then(function(){
				res.json({"mensaje":"restaurante eliminado"});
			}).error(function(){
				throw err;
			});			
		},
		list:function(req,res){
			modelo.restaurante.findAll({
				where:{
					idDepartamento: req.params.id
				}
			}).then(function(data){
				res.json(data);
			}).error(function(){
				res.json({"mensaje":"Error al listar restaurante","status":500});
			});
		},
		
		edit:function(req,res){
			modelo.restaurante.find({
				where:{
					idRestaurante:req.params.id
				}
			}).then(function(restaurante){
				if(restaurante){
					restaurante.updateAttributes({
						nombre:req.body.nombre,
						descripcion:req.body.descripcion,
					}).then(function(restaurante){
						res.json({"mensaje":"El restaurante "+restaurante.nombre+" fue modificado de manera correcta."});
					});
				}
			}).error(function(error){
						res.json({"mensaje":"El restaurante no se pudo editar "+error,"status":500});
			});
		}
	}
}