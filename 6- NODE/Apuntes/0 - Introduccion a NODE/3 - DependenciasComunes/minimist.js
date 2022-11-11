/* 
    Minimist proporciona una manera rapiday sencilla de gestionar argumentos convirtiendolos en un objeto.

    Instalamos minimsist -> npm i minimist -> Se instala en node_modules (que a su vez se instala en el root del proyecto)

*/

const minimist = require("minimist");

//console.log(process.argv.slice(2));
const args = minimist(process.argv.slice(2)); // -> minimist se encarga de procesar los argumentos y colocarlos en un objeto en propiedad:valor | Tiene una propiedad '_' en la que se recoge todos los valores que no estan asociados a una propiedad. (todos los argumentos que no tienen un nombre asociado)

// Introducimos en el terminal: 'node .{index.js} --VARIABLE1=1 --COCHE=bmw --CASA=duplex caballo
console.log(args);

/*

Imprime

 { 
    _: [ 'caballo' ], 
    VARIABLE1: 1, 
    COCHE: 'bmw', 
    CASA: 'duplex' 
} 

*/
