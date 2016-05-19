CREATE DATABASE `turismo_pro`;
USE `turismo_pro`;

CREATE TABLE `Usuario`(
`idUsuario` INT(10) NOT NULL AUTO_INCREMENT,
`nombre` VARCHAR(128) DEFAULT NULL,
`correo` VARCHAR(128) DEFAULT NULL,
`nick` VARCHAR(128) DEFAULT NULL,
`contraseña` VARCHAR(128) DEFAULT NULL,
PRIMARY KEY(`idUsuario`)
)ENGINE=INNODB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

CREATE TABLE `Departamento`(
`idDepartamento` INT(10) NOT NULL AUTO_INCREMENT,
`nombre` VARCHAR(128) DEFAULT NULL,
`descripcion` VARCHAR(128) DEFAULT NULL,
PRIMARY KEY(`idDepartamento`)
)ENGINE=INNODB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

CREATE TABLE `Restaurante`(
`idRestaurante` INT(10) NOT NULL AUTO_INCREMENT,
`nombre` VARCHAR(128) DEFAULT NULL,
`descripcion` VARCHAR(128) DEFAULT NULL,
`idDepartamento` INT(10) DEFAULT NULL,
PRIMARY KEY(`idRestaurante`),
KEY `FK_Restaurante` (`idDepartamento`),
CONSTRAINT `FK_Restaurante` FOREIGN KEY (`idDepartamento`) REFERENCES `departamento` (`idDepartamento`)
)ENGINE=INNODB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

CREATE TABLE `LugarDesconocido`(
`idLugarDesconocido` INT(10) NOT NULL AUTO_INCREMENT,
`nombre` VARCHAR(128) DEFAULT NULL,
`idDepartamento` INT(10) DEFAULT NULL,
PRIMARY KEY(`idLugarDesconocido`),
KEY `FK_LugarDesconocido` (`idDepartamento`),
CONSTRAINT `FK_LugarDesconocido` FOREIGN KEY (`idDepartamento`) REFERENCES `departamento` (`idDepartamento`)
)ENGINE=INNODB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

CREATE  TABLE `Hotel`(
`idHotel` INT(10) NOT NULL AUTO_INCREMENT,
`nombre` VARCHAR(128) DEFAULT NULL,
`descripcion` VARCHAR(128) DEFAULT NULL,
`idDepartamento` INT(10) DEFAULT NULL,
PRIMARY KEY(`idHotel`),
KEY `FK_Hotel` (`idDepartamento`),
CONSTRAINT `FK_Hotel` FOREIGN KEY (`idDepartamento`) REFERENCES `departamento` (`idDepartamento`)
)ENGINE=INNODB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

/*CREATE TABLE imagenes (
id INT NOT NULL DEFAULT 0 auto_increment,
imagen LONGBLOB,
tipo VARCHAR(255),
PRIMARY KEY (id)
);*/


/* Procedure structure for procedure `sp_autenticarUsuario` */

/*!50003 DROP PROCEDURE IF EXISTS  `sp_autenticarUsuario` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_autenticarUsuario`(IN _nick varchar(128),in _contrasena varchar(128))
BEGIN
	select nombre,correo,nick from usuario where usuario.`nick`=_nick and usuario.`contraseña`=md5(_contrasena);
    END */$$
DELIMITER ;

/* Procedure structure for procedure `sp_listacontactos` */

/*!50003 DROP PROCEDURE IF EXISTS  `sp_listacontactos` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_listacontactos`(in _idUsuario int)
BEGIN
	SELECT contacto.idContacto,contacto.nombre,contacto.correo,contacto.direccion,contacto.nombre,contacto.telefonoCasa,contacto.telefonoMovil,usuario.nombre AS usuario,usuario.idUsuario FROM contacto 
	LEFT JOIN usuario ON usuario.idUsuario=contacto.idUsuario 
	where usuario.idUsuario=_idUsuario;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `sp_registroUsuario` */

/*!50003 DROP PROCEDURE IF EXISTS  `sp_registroUsuario` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_registroUsuario`(IN _nombre varchar(128),IN _correo varchar(128),in _nick varchar(128),_contraseña varchar(128))
BEGIN
	insert into usuario values(null,_nombre,_correo,_nick,md5(_contraseña));
    END */$$
DELIMITER ;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
