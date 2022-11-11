"use strict";

/* 

        FORMULARIOS

*/

// SELECCIONAR FORMULARIO

//// Metodo generico
const form = document.querySelector("form");
console.log(form);

//// Propiedad forms
const forms = document.forms.formulario;
console.log(forms);

/* ---------------------------------------------- */

// SELECCIONAR LOS INPUT DEL FORMULARIO

//// Metodo generico
const input = document.querySelector("input");
console.log(input);

//// Form.elements()
const inputNombre = forms.elements.nombre;
console.log(inputNombre);

/* ----------------------------------------------- */

// LEER LOS VALORES DE UN CAMPO (INPUT)
console.log("Valor actual del input nombre: ", inputNombre.value);

// -> Los formularios van de la mano con los eventos

// Evento por cada cambio que sufra el value del input
inputNombre.addEventListener("input", () => {
  console.log("Valor del input", inputNombre.value);
});

/* ------------------------------------------------- */

// CUANDO PERDEMOS EL FOCO DEL INPUT
//// Evento change

inputNombre.addEventListener("change", () => {
  console.log("Valor del input cuando se deselecciona: ", inputNombre.value);

  // Nos puede servir de ayuda para hacer pequeñas comprobaciones al tiempo que el usuario cubre el formulario
  if (true) {
    inputNombre.style.border = "1px solid red";
  }
});

/* ------------------------------------------------- */

// CUANDO SE ENVIA EL FORMULARIO

/* forms.addEventListener("submit", (e) => {
  // ... El comportamiento por defecto del formulario por defecto es recargar la pagina
  // Para evitarlo utilizamos el objeto event
  e.preventDefault();
  console.log("Se ha enviado el formulario");
  console.log("Valor del input nombre cuando e envia: ", inputNombre.value);

  // Resetear el formulario una vez se envia
  forms.reset();
});
 */
/* //////////////////////////////////////////////////////// */

/* 
        EJEMPLO
    Ejemplo: Vamos a recoger el valor del input cuando se envie el form, añadirlo a un array  de nombre y mostramos por pantalla
*/

const nombres = [];

const inputNombre2 = forms.elements.nombre;

function handleSubmitForm(e) {
  e.preventDefault(); //evitamos el comportamiento por defecto de enviar un form(no recargar pagina)

  nombres.push(inputNombre2.value);

  console.log("Log del ejemplo");
  console.log(inputNombre2.value);
  console.log(nombres);
}

forms.addEventListener("submit", handleSubmitForm);
