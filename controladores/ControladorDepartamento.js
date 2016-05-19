module.exports= function(modelo){
	return{
		add:function(req,res){
			modelo.departamento.create({
				idDepartamento : null,
				nombre:req.body.nombre,
				descripcion:req.body.descripcion
			}).then(function(){
				res.json({"mensaje":"agregado"});
			}).error(function(){
					res.json({"mensaje":"error al intentar guardar el departamento."});
				throw err;
			});
		},
		
		delete:function(req,res){
			modelo.departamento.destroy({
				where:{
					idDepartamento: req.params.id
				}
			}).then(function(){
				res.json({"mensaje":"Departamento eliminado"});
			}).error(function(){
				throw err;
			});			
		},
		list:function(req,res){
			modelo.departamento.findAll({
				where:{
					idDepartamento: req.params.id
				}
			}).then(function(data){
				res.json(data);
			}).error(function(){
				res.json({"mensaje":"Error al listar departamento","status":500});
			});
		},
		
		edit:function(req,res){
			modelo.departamento.find({
				where:{
					idDepartamento:req.params.id
				}
			}).then(function(departamento){
				if(departamento){
					departamento.updateAttributes({
						nombre:req.body.nombre,
						descripcion:req.body.descripcion,
					}).then(function(departamento){
						res.json({"mensaje":"El departamento "+departamento.nombre+" fue modificado de manera correcta."});
					});
				}
			}).error(function(error){
						res.json({"mensaje":"El departamento no se pudo editar "+error,"status":500});
			});
		}
	}
}