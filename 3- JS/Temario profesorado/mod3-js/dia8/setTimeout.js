'use strict';

/* 
    ¿Qué es la sincronia?

    Todo codigo que se ejecuta primero

    setTimeout es asíncrono, lo escribe después
*/

console.log(window); // Muchos metodos que usamos vienen de aqui
// hay muchos metodos utiles como el ancho de la ventana, el scroll....

/**
 * setTimeout()
 *   Recibe 2 argumentos: un callback, un tiempo (en milisegundos)
 *   El tiempo pospone lo que tenga indicado las acciones que realizará el callback
 */

setTimeout(() => {
  console.log('Hola tardo 5 segundos en ejecutarme :)');
}, 5000);

/*  */

console.log('1. Érase una vez...');

setTimeout(() => {
  console.log('2. En un planeta de otra galaxia...');
});

setTimeout(() => {
  console.log('3. Un villano muy malvado...');
});

console.log('4. ¿Su objetivo?');

console.log('5. ¡Conquistar el universo!');

/*  */

/* 
    JavaScript no es multitarea, no puede realizar varias tareas a la vez (tiene un solo hilo)

    Event Loop, el bucle de eventos, es quien decide cuando se tiene que ejecutar cada tarea
*/

////////////////

// El setTimeout tambien cuenta con un clear con algo que lo detiene
// clearTimeout() dandole un nombre al setTimeout podemos detenerlo antes
// de que se ejecute

const alarma = setTimeout(() => {
  console.log('RIIIIIIIIIIIIIING');
}, 5000);

const despierto = true;

if (despierto) {
  clearTimeout(alarma);
}
