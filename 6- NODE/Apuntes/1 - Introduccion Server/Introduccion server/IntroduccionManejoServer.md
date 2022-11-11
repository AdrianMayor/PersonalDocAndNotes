# Guia / Introduccion para el manejo de un Server

## 1. Lo primero es generar el 'package.json'

Con el comando

```bash
npm init -y
```

Con este fichero podemos volver a instlar todas las dependencias necesarias para instalarlas al proyecto mediante 'npm i'

## 2. Instalar las dependencias que necesite el proyecto

-   **'npm i -D prettier eslint nodemon'** (en este caso) | Las dependencias no son obligatorias pero facilitan la vida.
-   **'npm i express'** -> instala express, ya que 'http' esta en desuso

    ```bash
    npm i -D prettier eslint nodemon
    npm i express
    ```

-   Una vez termine de instalar, se crea la carpeta **'node_modules'**, por lo que introducimos esta carpeta en el fichero .gitignore

-   En el archivo 'package.json' podemos encontrar informacion de las dependencias instaladas. Desde la propiedad JSON de 'scripts' podemos establecer shorcouts.

## 3. Creamos el fichero 'server.js' | Creamos el propio servidor y lo ponemos a escuchar peticiones.

```javascript
const express = require('express');

// Creamos un servidor con express
const app = express();

// 2- Ponemos el servidor a escuchar al servidor en el puerto 4000
app.listen(4000, () => {
    console.log('Server listening at http://localhost:4000');
});

////    2.A -  Actualmente el server esta escuchando pero no va a responder a ninguna peticion dado que faltan los ENDPOINTS
```

## 4. Configurar la dependencia 'nodemon'

-   Vamos al ficheron 'package.json' y en la propiedad 'scripts', creamos un script.

    ```JSON

    "scripts": {
    "dev": "nodemon ./server.js"
    },

    ```

-   Con el comando 'npm run dev' ejecutamos este script y lanzamos lo que tengamos indicado. En este caso 'nodemon' lanzando el fichero './server.js'.

    ```bash

    npm run dev

    ```

## 5. Creamos ENDPOINTS para que el servidor sea capaz de responder

```javascript
// 3- Middlewares

//      3.A - Obtener lista de usuarios
app.get('/users', (req, res) => {
    res.send({
        status: 'ok',
        data: 'Listado de usuarios',
    });
});
```

### - Middleware de error

```javascript
//      3.B - Middleware de error.
app.use((req, res) => {
    // Especificamos el codigo de estado HTTP
    res.status(404).send({
        status: 'error',
        message: 'Not found!',
    });
});
```

Se debe poner al final dado que para acceder a él no es necesario ningun endpoint.

## Peticiones metodo GET

-   **GET**: se utiliza para pedir datos al servidor. Por lo general sin _body_.

### - Path params

Parametros de ruta.

Como no podemos saber que ID nos vendra del front, debemos preparar el end point para que pueda procesar cualquier id, conocido como parametro de ruta. -> :idUser

```javascript
//      3.C - Obtener informacion de un usuario en concreto mediante > 'path.params' <
app.get('/users/:idUser', (req, res) => {
    // Obtenemos el path param
    const { idUser } = req.params;

    res.send({
        status: 'ok',
        data: `Informacion del usuario ${idUser}`,
    });
});
```

-   'params' es una propiedad de request pero a su vez es un objeto. Por lo tanto, existe el objeto 'params' en el objeto 'request'

-   Puede haber mas de un path param por endpoint

-   Siempre va a ser 'req.params' para los parametros de ruta.

### - Query params

Parametros de la petición.

Comienzan con el cáracter '?'

Ej. : http://localhost:4000/tweets?keyword=gato&author=davidlosas

```javascript
//      3.D - Obtener el listado de tweets mediante > 'query params' <
app.get('/tweets', (req, res) => {
    // Obtenemos los query params
    const { keyword, author } = req.query;

    let data;

    if (keyword && author) {
        data = `Listado de tweets que contienen la palabra [${keyword}] y cuyo autor es [${author}]`;
    } else if (keyword) {
        data = `Listado de tweets que contienen la palabra [${keyword}]`;
    } else if (author) {
        data = `Listado de tweets cuyo autor es [${author}]`;
    }

    res.send({
        status: 'ok',
        data,
    });
});
```

## Peticiones metodo GET

-   **POST**: se utiliza para crear un nuevo recurso en el servidor. La información del recurso se incluye en el _body_.

### - Request body

Metodo mas seguro de manejar datos entre cliente y servidor , dado que se encripta.

```javascript
//      3.E - Crear un nuevo tweet mediante > 'Request Body' <
app.post('/tweets', (req, res) => {
    // Obtenemos la informacion del body
    const { text } = req.body;

    res.send({
        status: 'ok',
        message: 'Tweet creado',
    });
});
```

Las formas de recoger datos del body son:

-   raw -> Formato JSON
-   form-data -> Útil para enviar desde el cliente al servidor cualquier tipo de archivo. (Imagen, PDF...)
-   x-www-form-urlencoded-> Query string

#### - Body en formato **RAW**

Body -> serializado (0100101110) -> Server

Se serializa en codigo binario un archivo JSON y el server no es capaz de leerlo tal cual, por lo que hay que deserializarlo.

Para deserializar se utiliza un middleware especifico al principio de todos los middleware:

```javascript
//          3.E:1 - Middleware que deserializa el JSON recibido por el body
app.use(express.json());
```

Las variables que se recogen en el body deben coincidir en nombre con las declaradas en el backend.

Ej.: JSON body { "text": } | Backend const { text }

#### - Body en formato **Form-Data**
