"use strict";

// Seleccionamos el boton y la lista

const addButton = document.querySelector("button.add");
const lista = document.querySelector("ul");

let contador = 0;

// Funcion manejadora del boton que añadira un nuevo item a la lista con cada click

const handleClickAddButton = () => {
  if (contador < 13) {
    const li = document.createElement("li"); // Creamos un li

    li.textContent = `Item ${contador++} `; // Añadimos texto al li

    const deleteButon = document.createElement("button"); // Creamos el boton para borrar el li
    deleteButon.textContent = "borrar";
    deleteButon.classList.add("delete");

    li.append(deleteButon);
    lista.append(li); // Añadimos al final de la lista el li creado
  }
};

// Funcion manejadora para el boton de borrar . |No existe el boton de borrar en el html por lo que no podemos seleccionarlo. | Pero is que podemos añadirsela al padre

const handleClickDelete = (event) => {
  if (event.target.matches("button.delete")) {
    console.log(event.target);

    const li = event.target.parentElement;

    console.log(li);

    li.remove();

    contador--;
  }
};

// Añadimos al boton el evento de click con la funcion handleClickAddButton()

addButton.addEventListener("click", handleClickAddButton);

// Asignamos al evento de click sobre la lista la funcion handleClickDelete()
lista.addEventListener("click", handleClickDelete);
