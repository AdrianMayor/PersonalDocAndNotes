'use strict';

console.log('Hello world');
console.log(5 + 5);
console.log(5 > 2);

for (let i = 0; i < 11; i++) {
    console.log(i);
}

/* 
    Para visualizar el archivo JS desde NODE se introduce en el terminal 'node ./index.js'

    El objeto global 'window' no existe en node. No hay DOM. 
*/

/* 
    Para acceder a los objetos de entorno en NODE. Utiles para mover datos confidenciales

    */
console.log('');
console.log(process.env);

/* 
    Lo que sea .js para NODE es un modulo
*/

/* 
    COMMON JS: import
*/

const { sum, sub } = require('./helpers');

console.log(sum('Suma', 5, 5));
console.log(sub('Resta', 5, 5));

/* ***************************************************

// Comando a realizar siempre cada vez que se empieza un nuevo prouyecto 'npm init -y' antes de instalar ninguna dependencia // -> crea un archivo package.json

// Comando para instalar la dependencia de prettier y eslint '$ npm i prettier eslint -D'

Creamos el archivo .prettierrc con la configuracion requerida. 
{
    "tabWidth": 4,
    "useTabs": false,
    "semi": true,
    "singleQuote": true
}

// Comando para configurar eslint '$ npx eslint --init'

// Node modules nunca se sube a git. En caso de borrarse se pueede volver a generar con 'npm i'

****************************************************** */
