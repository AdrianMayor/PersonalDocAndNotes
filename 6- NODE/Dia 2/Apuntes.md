'$ npm init -y' -> Para instalar el fichero package.json (Informacion sobre las dependencias que se usaran en el proyecto)

'npm i -D prettier eslint nodemon' -> Instalar dependencias de desarrollo- -> Aparece package-lock.json y node_modules

    (no demon es para poder relanzar el server cada vez que guardamos y hacemos algun cambio en el fichero del server)

'npm i' -> Revisa el archivo package.json y ve que dependencias hay que instalar en caso de que borremos node_modules

La carpeta node_modules no se sube, por lo que se debe crear el fichero '.gitignore' desde el principio e indicar que node_modules no se comitea a git.

'npm i express' -> instala dependencias normales

Cambiar en el package.json -> "scripts": {
"dev": "nodemon ./server.js"
},

'npm run dev' -> Lanzar el server con nodemon

Matar proceso -> pgrep node // kill 'proceso'

\***\* Enviar datos desde el body cliente al servidor \*\***
raw -> Siempre que se envien body al servidor informacion en json se hace en raw --> Lo que mas se utiliza
form-data -> Enviar desde el cliente al servidor cualquier tipo de archivo ( avatar, pdf ... )

///////

$ npm i mysql2 dotenv -> instala dependencia para usar de forma mas segura la conexion al servidor. No subir nunca el .env. Para eso creamos el .env.example

En el archivo .env nada de espacios , puntos y coma ni nada

$ npm i bcrypt -> encripta contraseñas para almacenarlas en sql

morgan es un logger

$ npm i jsonwebtoken -> Generar token una vez este conectado

npm i sharp -> trabajar con imagenes
npm i express-fileupload
