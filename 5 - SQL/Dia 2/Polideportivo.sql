 CREATE DATABASE reservaZaragoza;
 
USE reservaZaragoza;
 
/*
1 Inserta cuatro usuarios.
2 Inserta un polideportivo.
3 Inserta dos pistas.
4 realiza dos reservas, en la primera estará el usuario con id 1 y 2 y en la segunda con id 3 y 4
5 Elimina los atributos 'telefono' y 'email' de los usuarios
6 Cambia el nombre y la dirección al polideportivo con id 1
7 Elimina la segunda reserva.ALTER
*/
 
 
CREATE TABLE IF NOT EXISTS polideportivo (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    direccion VARCHAR(60) NOT NULL,
    extension SMALLINT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modifiedAt TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
 
CREATE TABLE IF NOT EXISTS pistas (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    codigo VARCHAR(10) NOT NULL,
    estado BOOLEAN DEFAULT 1 NOT NULL,
    precioHora FLOAT NOT NULL,
    ultimaReserva TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    tipo ENUM ('football','tennis','basketball','padel') NOT NULL,
    idPolideportivo INT UNSIGNED NOT NULL,
    FOREIGN KEY (idPolideportivo) REFERENCES polideportivo (id),
    modifiedAt TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
 
CREATE TABLE IF NOT EXISTS reserve (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    precioTotal FLOAT NOT NULL,
    fechaReserva TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fechaUso DATETIME NOT NULL,
    idPista INT UNSIGNED NOT NULL,
    FOREIGN KEY (idPista) REFERENCES pistas (id),
    modifiedAt TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
 
CREATE TABLE IF NOT EXISTS users (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(60) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    dni VARCHAR(15) NOT NULL,
    telefono VARCHAR(15) NOT NULL,
    fechaNacimiento DATE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modifiedAt TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
 
CREATE TABLE IF NOT EXISTS userEserve (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    idUsers INT UNSIGNED,
    FOREIGN KEY (idUsers) REFERENCES users (id), -- ON DELETE CASCADE
    idReserve INT UNSIGNED,
    FOREIGN KEY (idReserve) REFERENCES reserve (id), -- ON DELETE CASCADE
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modifiedAt TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);



-- 1 Inserta cuatro usuarios.
INSERT INTO users (nombre, apellidos, email, dni, telefono, fechaNacimiento)
VALUES('Pepe', 'Benavente Salas', 'pepito@email.com','43333333-Y','123456789', '19000323'),
	  ('Sheila', 'Castro Pino', 'pinito@email.com','48888888-Y','234567890', '20000730'),
	  ('Vicente', 'Higuera Najarro', 'Najarrin@email.com','42222222222-Y','456123890', '19801223'),
	  ('Desire', 'Rodriguez Gonzalez', 'Desi@email.com','41666888-Y','456234456', '20190323');

-- 2 Inserta un polideportivo.
INSERT INTO polideportivo (nombre,direccion,extension)
VALUES ('Centro 1', 'Calle del deporte', '1');

-- 3 Inserta dos pistas.
INSERT INTO pistas (codigo, estado, precioHora, tipo, idPolideportivo)
VALUES ('1', '1','2.50', 'football', '1'),
('2','1','4.6','tennis','1');

-- 4 realiza dos reservas, en la primera estará el usuario con id 1 y 2 y en la segunda con id 3 y 4
INSERT INTO reserve (precioTotal, fechaUso, idPista)
VALUES ('12.50', '20220721090000', '1'),
 ('18.50', '20220721110000', '2');

INSERT INTO userEserve (idUsers,idReserve)
VALUES ('1','1'),
 ('2','2');
-- 5 Elimina los atributos 'telefono' y 'email' de los usuarios
ALTER TABLE users DROP COLUMN telefono; 
ALTER TABLE users DROP COLUMN email; 

-- 6 Cambia el nombre y la dirección al polideportivo con id 1
UPDATE polideportivo  SET nombre = 'Centraso Deportivo', direccion='Calle modificada' WHERE id=1;

-- 7 Elimina la segunda reserva.ALTER

DELETE FROM userEserve WHERE idReserve = 2;
DELETE FROM reserve WHERE id=2;

