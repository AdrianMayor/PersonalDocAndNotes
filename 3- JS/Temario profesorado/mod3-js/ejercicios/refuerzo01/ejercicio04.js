/**
 * #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Crea una función "showInfo()" con los parámetros nombre y edad:
 *
 *      - La función debe devolver un string del tipo: "Eres Pablo y tienes 33 años". Recuerda
 *        que el nombre y la edad son parámetros, pueden variar en cada llamado.
 *
 *      - Muestra lo que devuelva la función por consola. Aplica lo aprendido sobre "template
 *        strings" (template literals).
 *
 *      - Llama a la función tres veces pasándole argumentos distintos.
 *
 */
function showInfo(nombre, edad) {
  return `Eres ${nombre} y tienes ${edad} años`;
}

console.log(showInfo('Raquel', 24));
console.log(showInfo('Gonzalo', 49));
console.log(showInfo('Samu', 18));
