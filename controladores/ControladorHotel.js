module.exports= function(modelo){
	return{
		add:function(req,res){
			modelo.hotel.create({
				idHotel : null,
				nombre:req.body.nombre,
				idDepartamento: req.body.idDepartamento
			}).then(function(){
				res.json({"mensaje":"agregado"});
			}).error(function(){
					res.json({"mensaje":"error al intentar guardar el hotel."});
				throw err;
			});
		},
		
		delete:function(req,res){
			modelo.hotel.destroy({
				where:{
					idHotel: req.params.id
				}
			}).then(function(){
				res.json({"mensaje":"hotel eliminado"});
			}).error(function(){
				throw err;
			});			
		},
		list:function(req,res){
			modelo.hotel.findAll({
				where:{
					idDepartamento: req.params.id
				}
			}).then(function(data){
				res.json(data);
			}).error(function(){
				res.json({"mensaje":"Error al listar hotel","status":500});
			});
		},
		
		edit:function(req,res){
			modelo.hotel.find({
				where:{
					idHotel:req.params.id
				}
			}).then(function(hotel){
				if(hotel){
					hotel.updateAttributes({
						nombre:req.body.nombre,
						descripcion:req.body.descripcion,
					}).then(function(hotel){
						res.json({"mensaje":"El hotel "+hotel.nombre+" fue modificado de manera correcta."});
					});
				}
			}).error(function(error){
						res.json({"mensaje":"El hotel no se pudo editar "+error,"status":500});
			});
		}
	}
}