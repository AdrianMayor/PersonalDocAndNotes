-- Creamos la base de datos.
-- CREATE DATABASE aulas;

-- Seleccionamos la base de datos
USE aulas;

-- Desactivamos las claves foraneas para poder hacer drop en cualquier orden
SET FOREIGN_KEY_CHECKS = 0;

-- Borramos las tablas. En orden inverso al que las creamos.
DROP TABLE IF EXISTS userSubjects;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS subjects;
DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS classrooms;


-- Creamos la tabla de usuarios.
CREATE TABLE IF NOT EXISTS users (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    surname VARCHAR(60),
    type ENUM('teacher', 'student') DEFAULT 'student'
);

-- Creamos la tabla de aula.
CREATE TABLE IF NOT EXISTS classrooms (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    number TINYINT NOT NULL,
    capacity TINYINT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modifiedAt TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Creamos la tabla de cursos.
CREATE TABLE IF NOT EXISTS 	courses (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    idClassroom INT UNSIGNED NOT NULL,
    FOREIGN KEY (idClassroom) REFERENCES classrooms (id),
    turn ENUM('morning', 'afternoon') NOT NULL,
    code INT UNSIGNED NOT NULL,
    modifiedAt TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Creamos tabla de asignaturas
CREATE TABLE IF NOT EXISTS subjects (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    idCourse INT UNSIGNED NOT NULL,
    FOREIGN KEY (idCourse) REFERENCES courses (id),
    name VARCHAR(30) NOT NULL,
    hours SMALLINT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Creamos la tabla intermedia relacional: 'userSubjects'
CREATE TABLE IF NOT EXISTS userSubjects(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    idUser INT UNSIGNED NOT NULL,
    FOREIGN KEY (idUser) REFERENCES users (id),
    idSubject INT UNSIGNED NOT NULL,
    FOREIGN KEY (idSubject) REFERENCES subjects (id),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- -------------------------------------------------------------------------------------------

 -- CREATE DATABASE campeonatos;

USE campeonatos;

DROP TABLE IF EXISTS plays;
DROP TABLE IF EXISTS games;
DROP TABLE IF EXISTS players;
DROP TABLE IF EXISTS teams;


CREATE TABLE IF NOT EXISTS teams (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    category ENUM('Primera', 'Segunda'),
    sponsor VARCHAR(30),
    shirtColor1 VARCHAR(15),
    shirtColor2 VARCHAR(15)
    );
    
CREATE TABLE IF NOT EXISTS players (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    idTeam INT UNSIGNED NOT NULL,
    FOREIGN KEY (idTeam) REFERENCES teams (id),
    phone INT UNSIGNED,
    address VARCHAR(30),
    firstSurname VARCHAR(15),
    secondSurname VARCHAR(15)
    );

CREATE TABLE IF NOT EXISTS games (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    score VARCHAR(30) NOT NULL DEFAULT('0-0'),
    stadium VARCHAR(30),
    referee VARCHAR(30),
    incident VARCHAR(30)
);

CREATE TABLE IF NOT EXISTS plays (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    idGame INT UNSIGNED NOT NULL,
    FOREIGN KEY (idGame) REFERENCES games (id),
    idLocalTeam INT UNSIGNED NOT NULL,
    FOREIGN KEY (idLocalTeam) REFERENCES teams (id),
    idOutTeam INT UNSIGNED NOT NULL,
    FOREIGN KEY (idOUtTeam) REFERENCES teams (id)
);


-- Insertamos dos equipos
INSERT INTO teams (name, shirtColor1, shirtColor2, category)
VALUES ('Equipo A', 'Azul','Verde', 'Segunda'), 
		('Equipo B', 'Blanco','Azul', 'Segunda');
        
-- Insertamos dos jugadores

INSERT INTO players (name, idTeam, phone, address, firstSurname, secondSurname)
VALUES ('Sara', '1', '666666666','Direccion de Sara','Rodriguez', 'Campos'),
('Pablo', '1', '666666666','Direccion de Pablo','Gonzalez', 'Blanco'),
('Lucia', '2', '666666666','Direccion de Lucia','Sosa', 'Perez'),
('Manuel', '2', '666666666','Direccion de Manuel','Betancour', 'Sanchez');

-- Insertamos un partido

INSERT INTO games (stadium, referee)
VALUES ('Gran Canaria', 'Pedrero');

-- Organizamos un partido que enfrente al equipo A y al equipo B

INSERT INTO plays (idGame, idLocalTeam, idOutTeam)
VALUES('1','2','1');

-- Eliminamos el atributo "secondSurname de la tabla 'players'
ALTER TABLE players DROP COLUMN secondSurname;

-- Modificamos el nombre y el telefono del jugador con id 2.
-- UPDATE players SET name ='David',phone = '77777777' WHERE id = 2;
-- UPDATE players SET name ='David',phone = '77777777' WHERE id = 2 OR id = 2;
UPDATE players SET name ='David',phone = '77777777' WHERE id IN (1,2);


-- Elminiamos un jugador de cada equipo (id 2 y 4)
DELETE FROM players WHERE id=2 or id =4;
-- ------------------------------------------------------------------------------------------

-- CREATE DATABASE	facilities;

USE facilities;

DROP TABLE IF EXISTS userBooking;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS booking;
DROP TABLE IF EXISTS tracks;
DROP TABLE IF EXISTS center;

CREATE TABLE IF NOT EXISTS center (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    address VARCHAR(30),
    squareMeters INT UNSIGNED NOT NULL
);

CREATE TABLE IF NOT EXISTS tracks (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	idCenter INT UNSIGNED NOT NULL,
    FOREIGN KEY (idCenter) REFERENCES center (id),
    state VARCHAR(30)
);

CREATE TABLE IF NOT EXISTS booking (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	idTrack INT UNSIGNED NOT NULL,
    FOREIGN KEY (idTrack) REFERENCES tracks (id),
    state VARCHAR(30)
);

CREATE TABLE IF NOT EXISTS users (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT
    
);

CREATE TABLE IF NOT EXISTS userBooking (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	idUser INT UNSIGNED NOT NULL,
    FOREIGN KEY (idUser) REFERENCES users (id),
    idBooking INT UNSIGNED NOT NULL,
    FOREIGN KEY (idBooking) REFERENCES booking (id)
);


-- Inserta cuatro usuarios
-- Inserta un polideportivo
-- Inserta dos pistas
-- Realiza dos reservas: en la primera estaran los usuarios con id 1 y 2, y en la segunda los usuarios con id 3 y 4
-- Elimina los atributos "telefono" y "email" de los usuarios
-- Cambia el nombre y la direccion al primer polideportivo

