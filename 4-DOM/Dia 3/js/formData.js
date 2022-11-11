"use strict";

/* 
    FORM DATA

    En el form data es obligatorio que todos los input tengan un nombre
*/

// 1.- Seleccionar el formulario

const form = document.forms.formulario;

// 2.- Crear el objeto form data
const data = new FormData(form);

console.log(data); // data es un objeto iterable ( es decir, lo podemos recorrer)

for (const key of data) {
  console.log(key);
}

/* ---------------------------------------------------- */

// Para evitar que formData se quede con los valores por defecto de los input, vamos a crear el objeto dentro dentro de un evento, generalmente dentro del evento 'submit'

function handleSubmitForm(e) {
  e.preventDefault();

  // .- Crear el objeto form data
  const data = new FormData(form);

  for (const key of data) {
    console.log(key);
  }
}

form.addEventListener("submit", handleSubmitForm);

///////////////

/* ------------------------------------------------- */

//  AÑADIR ENTRADAS AL FORM DATA
// Antes de pasar los datos del DOM al backend podemo añadir valores

console.log("");
console.log("Añadimos entradas");

data.append("userId", 4);

for (const elemento of data) {
  console.log(elemento);
}

/* ---------------- */

// QUITAR ENTRDAS DEL FORM DATA

console.log("");
console.log("Eliminamos entradas");

data.delete("nombre");

for (const elemento of data) {
  console.log(elemento);
}

/* -------------------- */

// CAMBIAR / CREAR VALORES DE UNA ENTRADA
//// Pasamos el nombre de la entrrada que qeremos cambiar
console.log("");
console.log("Cambiar valores");

data.set("mail", "ejemplo@ejemplo.es");

data.set("city", "Madrid");

for (const elemento of data) {
  console.log(elemento);
}

/* ---------------------- */

// COMPROBAR SI EXISTE LA ENTRADA
console.log("");
console.log("Comprobar si existe");

console.log(data.has("mail")); // True

/* ------------------------- */

// LEER EL CONTENIDO DE NA ENTRADA EN CONCRETO

console.log("");
console.log("Leer na entrada");

console.log(data.get("city")); // Cando tenemos solamente un valor

// cuando tenemos mas valores
data.append("colores", "rojo");
data.append("colores", " azul");

console.log(data.getAll("colores"));
