# Simple Twitter API

Este ejercicio consiste en crear una API que simule el funcionamiento de una aplicación similar a Twitter.

## Instalar

- Crear una base de datos vacía en una instancia de MySQL local.

- Guardar el archivo `.env.example` como `.env` y cubrir los datos necesarios.

- Ejecutar `npm run initDB` para crear las tablas necesarias en la base de datos anteriormente creada.

- Ejecutar `npm run dev` o `npm start` para lanzar el servidor.

## Entidades

- User:
  - id
  - email
  - password
  - createdAt

- Tweet:
  - id
  - idUser
  - text
  - image (opcional)
  - createdAt

- Likes:
  - id
  - idUser
  - idTweet
  - createdAt

## Endpoints ✅

### Usuarios:

- POST [/users] - Registro de usuario.
- GET [/users] - Devuelve información del usuario del token (necesita cabecera con token).
- GET [/users/:idUser] - Devuelve información de un usuario concreto. 
- POST [/users/login] - Login de usuario (devuelve token).

### Tweets:

- POST [/tweets] - Permite crear un tweet (necesita cabecera con token).
- GET [/tweets] - Lista todos los tweets. 
- GET [/tweets/:idTweet] - Devuelve información de un tweet concreto. 
- POST [/tweets/:idTweet/like] - Añade o elimina un like a un tweet.
- DELETE [/tweets/:id] - Borra un tweet solo si eres quien lo creó (necesita cabecera con token).

