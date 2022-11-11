"use strict";

// JavaScript ya controla errores, pero nosotros podemos crear los nuestros personalizados

/* 
    CREAR UN NUEVO ERROR

        -> Para crearlo usamos el constructor new Error()
*/

const miError = new Error("Error personalizado");
miError.code = 404; // Establecemos un codigo HTTP que da informacion del error

console.log(miError);
console.log(miError.message);

// Los errores hay que lanzarlos, por ahora solo lo mostramos por consola

throw miError; // Una vez que lanza error , JavaScript no sigue leyendo codigo

console.log("Esto nunca es accesible desde que se lanza el error");
