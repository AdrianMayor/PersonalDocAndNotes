CREATE DATABASE IF NOT EXISTS empresa;

USE empresa;

DROP TABLE IF EXISTS empleados;
DROP TABLE IF EXISTS departamentos;

CREATE TABLE IF NOT EXISTS departamentos (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS empleados (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(20),
    idDepartamento INT UNSIGNED,
    FOREIGN KEY (idDepartamento) REFERENCES departamentos(id)
);

INSERT INTO departamentos (nombre)
VALUES ('Ventas'), ('Académico'), ('Marketing'), ('Talento');

INSERT INTO empleados (nombre, idDepartamento)
VALUES ('Sara', 1), ('Andrea', 2), ('Laura', null), ('Juan', 2), ('Rafa', 3); 

-- Inner Join
SELECT * FROM empleados E 
INNER JOIN departamentos D ON E.idDepartamento = D.id;

-- Left Join
SELECT E.nombre, IFNULL(D.nombre, 'Sin departamento') AS 'departamento'
FROM empleados E 
LEFT JOIN departamentos D ON E.idDepartamento = D.id;

-- Right Join
SELECT * FROM empleados E 
RIGHT JOIN departamentos D ON E.idDepartamento = D.id;