"use strict";

const letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

/* function validId() {
  try {
    const idSplit = id.split("-");
    if (id.length !== 10) {
      throw new Error(
        "DNI introducido no corresponde con el formato indicado 00000000-L"
        );
      } else if (idSplit[0].length !== 8 || isNaN(idSplit[0])) {
        throw new Error("Numero de digitos numericos incorrectos");
      } else if (idSplit[1].length !== 1 || !isNaN(idSplit[1])) {
        throw new Error("Caracter incorrecto");
      } else if (
        idSplit[1].toUpperCase() !==
        letras[parseInt([...idSplit[0]].reduce((acc, item) => acc + item)) % 23]
        ) {
          throw new Error("DNI no valido");
        } else {
          console.log("DNI Valido");
        }
      } catch (error) {
    console.error("Se ha producido un error:", error.message);
    id = prompt("Introduce un DNI en formato 00000000-L");
    return validId(id);
  }
} */

let id = prompt("Introduce un DNI en formato 00000000-L.");
function validId(id) {
  try {
    checkInputEmpty(id);

    const idSplit = id.split("-");

    validateNumberLength(id);
    validateNumberOk(idSplit[0]);
    validateChartOk(idSplit[1]);
    validateCharToLetter(idSplit);
    console.log("DNI Valido");
  } catch (error) {
    errorId(error.message);
  }
}

// Comprobamos que el input del usuario no este vacio, si no, salta un error del metodo split().
function checkInputEmpty(input) {
  if (input && input.length === 0) {
    throw new Error("El campo no puede estar vacio");
  }
}

// Comprobamos que los datos introducidos encajen en el formato requerido.
function validateNumberLength(value) {
  if (value.length !== 10) {
    throw new Error(
      "DNI introducido no corresponde con el formato indicado 00000000-L"
    );
  }
}

// Comprobamos que la parte numerica del DNI coincide con el numero de digitos que deberian ser (8 en este caso), y que no existan caracteres alfabeticos en los mismos.
function validateNumberOk(numberId) {
  if (numberId.length !== 8 || isNaN(numberId)) {
    throw new Error("Digitos numericos incorrectos");
  }
}

// Comprobamos que la letra sea solo una letra y que no existan numeros.
function validateChartOk(chartId) {
  if (chartId.length !== 1 || !isNaN(chartId)) {
    throw new Error("Caracter incorrecto");
  }
}

// Comprobamos que la letra del DNI, mediante validacion: numero del DNI resto 23; concuerde con el string de la posicion del Array. Resultado de validacion === posicion de array letras.
function validateCharToLetter(chartCorrectLeter) {
  if (
    chartCorrectLeter[1].toUpperCase() !==
    letras[
      parseInt([...chartCorrectLeter[0]].reduce((acc, item) => acc + item)) % 23
    ]
  ) {
    throw new Error("DNI no valido");
  }
}

// En caso de dar algun proceso error, lo recogemos y mostramos a que se debe dicho error.
function errorId(message) {
  console.error("Se ha producido un error: ", message);
  id = prompt("Introduce un DNI en formato 00000000-L");
  return validId(id);
}

validId(id);
