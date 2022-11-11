/* 
    Dotenv proporciona una manera rapida, segura y sencilla de gestionar variables de entorno.

    Instalamos dotenv -> npm i dotenv -> Se instala en node_modules (que a su vez se instala en el root del proyecto)
    Creamos en el directorio del proyecto el fichero .env
    Creamos las variables necesarias en ese fichero

*/

//     Hacemos require sobre el modulo dotenv para tener disponibles las variables indicadas en .env
const dotenv = require("dotenv");
dotenv.config();

// Estas variables estaran disponibles en process.env
console.log(process.env.MYSQL_PASSWORD);
console.log(process.env.LNG);
console.log(process.env.API_URL);

// Debe introducirse el .env siempre en .gitignore
// Dejamos junto con el proyecto un .env.example para indicar que es necesaro cumplicmentar una serie de datos
