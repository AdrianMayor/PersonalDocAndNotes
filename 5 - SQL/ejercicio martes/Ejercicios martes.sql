DROP DATABASE IF EXISTS ejercicioMartes;
CREATE DATABASE ejercicioMartes;

USE ejercicioMartes;

DROP TABLE IF EXISTS tabla;
DROP TABLE IF EXISTS direccion;

-- Ejercicio 1
/*
# Ejercicio sql 1
Crea una tabla que permita guardar usuarios en la que guardes una id, su DNI, su tlf., su email, su nombre y apellidos. Crea también campos para su dirección: país, CP, varias líneas de dirección...
*/

CREATE TABLE IF NOT EXISTS usuario(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    dni VARCHAR(12) NOT NULL,
    tlf VARCHAR(9),
    email VARCHAR(50),
    nombre VARCHAR(10),
    apellidos VARCHAR (20),
    
    pais VARCHAR (20),
    cp VARCHAR (5)
);

show tables;
describe usuario;

CREATE TABLE IF NOT EXISTS direccion(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    pais VARCHAR (50),
    cp CHAR(5)
);

-- Ejercicio 2
ALTER TABLE usuario DROP COLUMN pais;
ALTER TABLE usuario DROP COLUMN cp;

ALTER TABLE usuario ADD direccion_id INT UNSIGNED;
ALTER TABLE usuario ADD FOREIGN KEY (direccion_id) REFERENCES direccion (id);



/*
ALTER TABLE direccion ADD paisUsuario VARCHAR (20);
ALTER TABLE direccion ADD cpUsuario VARCHAR (5);
ALTER TABLE direccion ADD FOREIGN KEY (paisUsuario) REFERENCES usuario (id_pais);
ALTER TABLE direccion ADD FOREIGN KEY (cpUsuario) REFERENCES usuario (cp);

*/

-- Ejercicio 3

INSERT INTO direccion (pais, cp)
VALUES ('Indonesia', '83297'),
	   ('Philippines', '44455'),
       ('Indonesia', '62965'),
       ('Norway','54756'),
       ('United States','51471');
       
INSERT INTO usuario (nombre, apellidos, email, tlf, dni, direccion_id)
VALUES ('Irvin','Lethem','ilethem0@google.com.au','993870144','279948941-9','1'),
('Kylie','Mungan','kmungan1@howstuffworks.com','497494899','748551874-7','2'),
('Yul','Dibbert','ydibbert2@businesswire.com','776631050','215649413-4','3'),
('Tamra','Mc Gorley','tmcgorley3@studiopress.com','921948685','617064473-7','4'),
('Elmira','Imbrey','eimbrey4@cpanel.net','304168000','178988896-4','5');

describe usuario;
select * from usuario;
select * from direccion;


-- Ejercicio 4
/*
# Ejercicio sql 4
Selecciona el nombre, apellido y número de teléfono de todos los usuarios, ordenados alfabéticamente según su apellido.
Después haz otra consulta que indique cuántos usuarios hay de cada país, basándote en la tabla de direcciones.
*/

SELECT nombre, apellidos, tlf FROM usuario ORDER BY apellidos;
SELECT pais, COUNT(pais) FROM direccion GROUP BY pais;

-- SIGUIENTE SEMANA

/*
	# Ejercicio join

Usando la base de datos que creamos en los ejercicios de la semana pasada, selecciona todos los datos de los usuarios, incluida toda la información de su dirección.
*/
SELECT U.*, D.*
FROM usuario U
INNER JOIN direccion D ON U.id = D.id;

/*
	# Ejercicio update

Actualiza la tabla de usuarios para añadir una columna para la edad. A continuacion, rellena esa columna para los 5 usuarios que existen.
*/

ALTER TABLE usuario ADD edad TINYINT UNSIGNED;

UPDATE usuario
SET edad=34 WHERE id = 1;
UPDATE usuario
SET edad=43 WHERE id = 2;
UPDATE usuario
SET edad=23 WHERE id = 3;
UPDATE usuario
SET edad=14 WHERE id = 4;
UPDATE usuario
SET edad=12 WHERE id = 5;


/*
	# Ejercicio subconsulta

Selecciona el nombre y la edad del/los usuario/s más mayores.
*/


/* SELECT nombre, max(edad)
FROM usuario; */

SELECT nombre, edad
FROM usuario
WHERE edad = (SELECT MAX(edad) FROM usuario);


/*
	# Ejercicio extra de SQL

Realiza una única consulta que devuleva todos los datos de los usuarios que vivan en el país en el que más usuarios hay (debe ser dinámico y seguir funcionando aunque cambien los datos).

Este ejercicio es bastante complejo y combina varias mecánicas de SQL. Si lo intentas y no te sale, no te desanimes. Recuerda que este es un bootcamp de JavaScript y podemos ayudarnos de él para encadenar varias consultas.
Intenta pensar en cuáles deberías hacer para obtener, combinando la lógica de JS, el resultado deseado.
*/

SELECT *
FROM usuario U
INNER JOIN direccion D ON U.id = D.id
WHERE D.pais = (SELECT pais
			  FROM direccion
			  GROUP BY pais
			  ORDER BY COUNT(pais) DESC
			  LIMIT 1);
              
              
              