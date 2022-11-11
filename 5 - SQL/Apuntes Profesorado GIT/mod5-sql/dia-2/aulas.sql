-- Creamos la base de datos.
-- CREATE DATABASE aulas;

-- Seleccionamos la base de datos.
USE aulas;

-- Borramos las tablas (las eliminamos en el orden inverso al que
-- las creamos).
DROP TABLE IF EXISTS userSubjects;
DROP TABLE IF EXISTS subjects;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS classrooms;

-- Creamos la tabla de aulas.
CREATE TABLE IF NOT EXISTS classrooms (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    number TINYINT NOT NULL, 
    capacity TINYINT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Creamos la tabla de cursos.
CREATE TABLE IF NOT EXISTS courses (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    idClassroom INT UNSIGNED NOT NULL,
    FOREIGN KEY (idClassroom) REFERENCES classrooms (id),
    turn ENUM('morning', 'afternoon') NOT NULL,
    code INT UNSIGNED NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Creamos la tabla de usuarios.
CREATE TABLE IF NOT EXISTS users (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL, 
    surname VARCHAR(60),
    type ENUM('teacher', 'student') DEFAULT 'student',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modifiedAt TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Creamos la tabla de asignaturas.
CREATE TABLE IF NOT EXISTS subjects (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    idCourse INT UNSIGNED NOT NULL,
    FOREIGN KEY (idCourse) REFERENCES courses (id),
    name VARCHAR(30) NOT NULL,
    hours SMALLINT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Creamos la tabla intermedia "userSubjects".
CREATE TABLE IF NOT EXISTS userSubjects (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    idUser INT UNSIGNED NOT NULL,
    FOREIGN KEY (idUser) REFERENCES users (id),
    idSubject INT UNSIGNED NOT NULL,
    FOREIGN KEY (idSubject) REFERENCES subjects (id),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

