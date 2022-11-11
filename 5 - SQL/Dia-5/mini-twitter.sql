CREATE DATABASE IF NOT EXISTS minitwitter;

USE minitwitter;

-- Eliminamos las tablas si existen.
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS tweets;
DROP TABLE IF EXISTS users;

-- Creamos la tabla de usuarios.
CREATE TABLE IF NOT EXISTS users (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(30) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL, 
    createdAt TIMESTAMP NOT NULL
);

-- Creamos la tabla de tweets.
CREATE TABLE IF NOT EXISTS tweets (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    idUser INT UNSIGNED NOT NULL,
    FOREIGN KEY (idUser) REFERENCES users (id),
    text VARCHAR(250) NOT NULL,
    image VARCHAR(100),
    createdAt TIMESTAMP NOT NULL
);

-- Creamos la tabla de likes.
CREATE TABLE IF NOT EXISTS likes (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    value BOOLEAN DEFAULT true,
    idUser INT UNSIGNED NOT NULL,
    FOREIGN KEY (idUser) REFERENCES users (id),
    idTweet INT UNSIGNED NOT NULL,
    FOREIGN KEY (idTweet) REFERENCES tweets (id),
    createdAt TIMESTAMP NOT NULL
);