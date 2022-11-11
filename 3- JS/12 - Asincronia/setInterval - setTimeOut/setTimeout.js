"use strict";

/* 
    ¿Que es la sincronia?

    Todo codigo que se ejecuta primero

    setTimeout es asincrono, es decir, lo escribe despues
*/

console.log(window); // Muchos metodos que usamos vienen de aqui, hay muchos metodos utiles como el ancho de la ventana, el scroll...

/* 
    setTimeout()  -> setea una cuenta atras

        -> Recibe 2 argumentos: un callback, un tiempo (en milisegundos). 
        -> El tiempo pospone lo que tenga indicado en las accionoes que realizara el callback

*/

setTimeout(() => {
  console.log("Hola tardo 5 segundos en ejecutarme");
}, 5000);

/* primero se ejecuta la linea 27 y posteriormente la 22 (setTimeout) */

console.log("hola que tal");

/* 
    JavaScript no es multitarea, no puede realizar varias tareas a la vez (tiene un solo hilo)

    Event Loop, el bucle de eventos, es quien decide cuando se tiene que ejecutar cada tarea
*/

////////////////

/* 
    El setTimeout tambien cuenta con un clear, con algo que lo detiene

    clearTimeout() dandole un nombre al setTimeout podemos detenerlo antes de que se ejecute
*/

const alarma = setTimeout(() => {
  console.log("RIING");
}, 5000);

const despierto = false;

if (despierto) {
  clearTimeout(alarma);
}
