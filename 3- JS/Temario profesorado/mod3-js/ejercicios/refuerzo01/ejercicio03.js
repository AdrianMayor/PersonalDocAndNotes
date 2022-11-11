/* #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Llegó el momento de poner en práctica todo lo aprendido hasta ahora para...
 * ¡¡DESACTIVAR UNA BOMBA!! Tranquilos, no tenemos que ser expertos en explosivos.
 * Se trata de crear un juego en el que damos al usuario 5 intentos para tratar de
 * desactivar la bomba.
 *
 * Estos son los pasos que debes seguir para tratar de conseguir el objetivo:
 *
 *  - Generar un nº aleatorio del 1 al 10. Existe una función en JavaScript que
 *    nos permite generar un nº al azar, ¿por qué no investigas un poco?
 *
 *  - Una vez hayamos generado el nº de desactivación daremos al usuario un total
 *    de 5 intentos para tratar de averiguar el nº en cuestión.
 *
 *  - Si acierta detenemos el bucle (con un break) y mostramos un mensaje que indica
 *    que la bomba ha sido desactivada. De lo contrario indicamos que la bomba ha explotado.
 */

// 1º Generar un numero aleatorio entre el 1 y el 10
const numeroRandom = Math.ceil(Math.random() * 10);

// 2º Generar un bucle que de 5 vueltas (5 intentos al usuario)
for (let i = 5; i > 0; i--) {
  const password = parseInt(prompt(`Intento ${i}. Dime un numero del 1 al 10`));

  if (password === numeroRandom) {
    alert(`Enhorabuena sigues viv@`);
    break; // break para el bucle
  }

  // Si i es igual a 1 (es la ultima oportunidad) y ya hemos comprobado que no ha acertado
  if (i === 1) alert('BOOOOOOOOOOOOOOOOOOOOM!');
}

////////////////////////////

const numeroAleatorio = Math.ceil(Math.random() * 10);

console.log(numeroAleatorio);

function bomba() {
  let usuario = parseInt(prompt('Introduce un nº entre 0 - 10: '));

  for (let i = 4; i > 0; i--) {
    if (numeroAleatorio === usuario) {
      return alert('La bomba ha sido desactivada!!!');
    } else if (numeroAleatorio !== usuario) {
      usuario = parseInt(prompt('Tienes otro intento: '));
    }
    if (i === 1) {
      return alert(' BOOM!!!! ');
    }
  }
}

bomba();
