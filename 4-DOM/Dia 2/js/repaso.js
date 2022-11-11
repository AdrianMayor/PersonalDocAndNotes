"use sctrict";

/* 
    REPASO
*/

// Seleccionar elementos del DOM
const body = document.querySelector("body");
const subtitulo = document.querySelector(".subtitulo");
const h3 = document.querySelector("header > h3");
const li = document.querySelectorAll("ul li");
const ul = document.querySelector("ul");
console.log(body);
console.log(subtitulo);

/* ------------------------------------------------ */

//Manipulamos el texto contenido de los elemento

setTimeout(() => {
  subtitulo.textContent = "Subtitulo modificado";
  //subtitulo.textContent = "Subtitulo <strong>modificado<strong>"; Introduce las etiquetas como texto
}, 2000);

/* ----------------------------------------------- */

// innerHTML -> acepta el uso de etiquetas
h3.innerHTML =
  "Contenido <span>modificado</span> con <strong>etiquetas</strong> dentro";

/* ------------------------------------------------- */

//outerHTML -> incluye la mdoficacion a la etiqueta de quien aplicamos
h3.outerHTML = `
    <p>lorem ipsum modificado</p>
    <p>lorem ipsum modificado</p>
    <p>lorem ipsum modificado</p>
    `;

/* --------------------------------------------------- */

// Agregar atributos
body.setAttribute("lang", "es");

/* --------------------------------------------------- */

// Borramos un atributo
setTimeout(() => {
  body.removeAttribute("lang");
}, 2000);

/* ---------------------------------------------------- */

// Estilos con JS
body.style.backgroundColor = "#90AA76";

body.style.color = "rgb(255,255,255)";

/* ------------------------------------------------- */

// CLASES

// Añadir una clase
console.log(li);

li[0].classList.add("importante", "grande");

for (const key of li) {
  key.classList.add("rojo");
}

/* ------------------------------------------------ */

// Remover / Elminar una clase
li[2].classList.remove("rojo");

/* ------------------------------------------------ */

// añadir una clase o quitarla con toggle

setInterval(() => {
  li[1].classList.toggle("grande");
}, 1000);

/* -------------------------------------------------- */

// Reemplazar una clase
li[0].classList.replace("importante", "borde");

/* ///////////////////////////////////////////////////// */

// ELEMENTOS

// Creamos un elemento li
const miLi = document.createElement("li");

// Añadimos texto a nuestro li
miLi.textContent = "Soy un nuevo li";

// Añadimos AL FINAL de la lista
ul.append(miLi);

// Añadir el elemento al principio de la lista
ul.prepend(miLi);

// Eliminar un elemento ( no tiene porque ser algo que hayamos creado medienta JS )

miLi.remove();

/////////////////////////////////////////////////////////////

// AÑADIR VARIOS ELEMENTOS

/* ---------------------------------- */
/* const colore = ["blanco", "azul", "verde"];

for (const color of colore) {
  const liColor = document.createElement("li");

  liColor.textContent = color; // <li>blanco</li>

  ul.append(liColor);
} */

// Metodo de añadir vario elemento anteriormente expuesto no es recomendable

/* --------------------------------------- */

//      FRAGMENTOS

// Creamos un fragmento al cual vamos a añadir cada uno de los li que queremos introducir en el ul (DOM)
const colore = ["blanco", "azul", "verde"];
const frag = document.createDocumentFragment();

// Recorremos el array de colores y en cada vuelta creamos un li nuevo con el texto del color del array colore y lo añadimos al fragmento
for (const color of colore) {
  const liColor = document.createElement("li");

  liColor.textContent = color;

  frag.append(liColor);
}

// Añadimos el fragmento con todos los li a la lista
ul.append(frag);
