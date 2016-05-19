module.exports = function(sequelize, DataTypes) {
	return sequelize.define('restaurante', {
		idRestaurante: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		
		nombre: {
			type: DataTypes.STRING,
			allowNull:true
		},
		
		descripcion: {
			type: DataTypes.STRING,
			allowNull:true
		},
		
		idDepartamento: {
			type: DataTypes.INTEGER(10),
			allowNull:true,
			references:{
				model:'departamento',
				key:'idDepartamento'
			}
		}
	}, {
		tableName :'restaurante',
		timestamps:false
	});
};