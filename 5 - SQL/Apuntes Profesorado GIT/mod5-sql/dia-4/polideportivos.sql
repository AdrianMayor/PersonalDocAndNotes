-- Crear la base de datos.
CREATE DATABASE IF NOT EXISTS reserveCenters;

-- Seleccionamos la base de datos.
USE reserveCenters;

-- Borrar tablas.
DROP TABLE IF EXISTS userBookings;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS bookings;
DROP TABLE IF EXISTS courts;
DROP TABLE IF EXISTS sportCenters;

-- Crear tabla de polideportivos.
CREATE TABLE IF NOT EXISTS sportCenters (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    address VARCHAR(100) NOT NULL,
    m2 MEDIUMINT UNSIGNED NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Crear tabla de pistas.
CREATE TABLE IF NOT EXISTS courts (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    type ENUM('fútbol', 'baloncesto', 'tenis') NOT NULL,
    priceHour FLOAT NOT NULL,
    lastBooking DATETIME,
    maintenance BOOLEAN NOT NULL,
    idSportCenter INT UNSIGNED NOT NULL,
    FOREIGN KEY (idSportCenter) REFERENCES sportCenters (id),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
);

-- Crear tabla de reservas.
CREATE TABLE IF NOT EXISTS bookings (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    hoursOfUse TINYINT NOT NULL,
    dateOfUse DATETIME NOT NULL,
    idCourt INT UNSIGNED NOT NULL,
    FOREIGN KEY (idCourt) REFERENCES courts (id),
	createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Crear tabla de usuarios.
CREATE TABLE IF NOT EXISTS users (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    surname VARCHAR(60) NOT NULL,
    birthDate DATETIME NOT NULL,
    email VARCHAR(50),
    phone VARCHAR(30),
    dni CHAR(9) NOT NULL,
	createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Crear la tabla de reservas - usuarios.
CREATE TABLE IF NOT EXISTS userBookings (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    idBooking INT UNSIGNED NOT NULL,
    FOREIGN KEY (idBooking) REFERENCES bookings (id) ON DELETE CASCADE,
    idUser INT UNSIGNED NOT NULL,
    FOREIGN KEY (idUser) REFERENCES users (id),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 1. Inserta cuatro usuarios.
INSERT INTO users (name, surname, birthDate, dni)
VALUES ('Sara', 'González', '1992-05-05', '43221812H'),
	('Pepe', 'González', '1967-03-15', '33689763H'),
	('Lucía', 'González', '1983-11-16', '34356812G'),
	('Miguel', 'González', '1999-12-27', '33621812B');


-- 2. Inserta un polideportivo.
INSERT INTO sportCenters (name, address, m2)
VALUES ('Polimolón', 'Dirección dePolimolón', 420);

-- 3. Inserta dos pistas.
INSERT INTO courts (type, priceHour, maintenance, idSportCenter)
VALUES ('fútbol', 30, false, 1),
	('baloncesto', 30, false, 1);

-- 4. Realiza dos reservas: en la primera estarán los usuarios con id 1 y 2, y en la segunda los usuarios con id 3 y 4.
INSERT INTO bookings (hoursOfUse, dateOfUse, idCourt)
VALUES (2, '2022-08-10T16:00:00', 1),
	(1, '2022-08-10T19:30:00', 2);
    
INSERT INTO userBookings (idUser, idBooking)
VALUES (1, 1),
	(2, 1),
    (3, 2),
    (4, 2);

-- 5. Elimina los atributos "teléfono" y "email" de los usuarios.
ALTER TABLE users DROP COLUMN phone;
ALTER TABLE users DROP COLUMN email;

-- 6. Cambia el nombre y la dirección al primer polideportivo.
UPDATE sportCenters SET name = 'Coca-Cola Center', address = 'Dirección Coca-Cola Center' WHERE id = 1;

-- 7. Elimina la segunda reserva.
DELETE FROM bookings WHERE id = 2;