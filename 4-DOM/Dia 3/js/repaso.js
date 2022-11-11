"use strict";

/* 
    REPASO
*/

// Seleccionamos los elementos qe vamos a utilizar

const boton = document.querySelector("button");
const ul = document.querySelector("ul");

let contador = 0;

// Funcion manejadora del event click sobre el boton
function handleClickBoton() {
  const li = document.createElement("li");

  li.textContent = `Item ${contador++} `;

  const deletebutton = document.createElement("button");

  deletebutton.textContent = "borrar";

  deletebutton.classList.add("delete");

  li.append(deletebutton);
  ul.append(li);
}

// Añadimos al boton el evento click con la funcion creada previamente
boton.addEventListener("click", handleClickBoton);

/* 
    COMO SELECCIONAR ELEMENTOS QUE NO ESTAN EN EL HMTL INICIAL

    >>> EVENT DELEGATION <<<
*/

// Creamo la funcion manejadora del evento click obre la lista para borrar un li creado desde JS cuando pulse sobre us boton 'borrar'

function handleClickUl(e) {
  // ... hacemos destructuring del objeto event (e)
  const { target } = e;

  // ... El metodo matches() comprueba si un elemento coincide con el selector indicado
  if (target.matches("button.delete")) {
    console.log(target);
    console.log("click a boton con la clase delete");

    // Selecionamos el li entero
    const item = target.parentElement;

    console.log(item);

    // Una vez seleccionado el li solo nos queda borrarlo
    item.remove();
  }
}

// Asignamos el evento de click del ul a la funcion manejadora handleClickUl
ul.addEventListener("click", handleClickUl);
