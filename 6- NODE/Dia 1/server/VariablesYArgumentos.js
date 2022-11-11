"use strict";

///////////////// VARIABLES

/* 
    Para acceder a los objetos de entorno en NODE. Utiles para mover datos confidenciales

    */
console.log("");

console.log(process.env); // Aqui entramos a las variables de entorno, para aplicaciones de escritorio habria que entrar a traves de procesos.

/* 
        Lo que sea .js para NODE es un modulo
    */

console.log(console); // Console aqui es una variable de entorno, ya que windows no existe en NODE

console.log(module); // Hace referencia al fichero (modulo) actual. Se suele usar para exportar informacion

/* 
    COMMON JS: export
*/

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;

module.exports = { sum, sub }; // Si se usan llaves, se deberia usar llaves tambien a la hroa de importarlo, ya que es destructuring

/* 
    (__dirname) -> Referencia ruta donde se encuentra el archivo. Ruta absoluta
    (__filename) -> Referencia donde se encuentra el fichero
*/

/////////////////////// ARGUMENTOS

const argvs = process.argv.slice(2);

console.log(argvs); // -> Imprime los argumentos que tiene un fichero. Los dos primeros normalmente molestan , por eso se eliminan con slice.

const a = Number(argvs[0]);
const b = Number(argvs[1]);

console.log("Calculadora en terminal", a + b);

// Introducimos argumentos mediante la consola 'node ./VariablesYArgumentos.js 12 30' -> Informacion volatil que esta solo en ese proceso
