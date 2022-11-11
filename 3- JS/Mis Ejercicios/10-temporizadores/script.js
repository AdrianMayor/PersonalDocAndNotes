"use strict";

const set1 = "1m 5s"; //prompt("Establece un tiempo, formato 0D-0H-0M-0S");

let set2 = set1.toUpperCase();
const counterSeted = setCounter(checkInput(set2));
let count = 0;
countTime(counterSeted, count);

/* function main() {
  checkInput();
  setCounter();
  formatTime();
  countTime();
} */

function countTime(counter, count) {
  const setedTime = setInterval(() => {
    if (counter === 0) {
      clearInterval(setedTime);
      clearInterval(rawTime);
      console.log("---------------");
      console.log(`Han pasado ${formatTime(count)} desde la ejecución `);
      console.log("Ha finalizado el contador");
      console.log("---------------");
    }
    counter--;
    if (counter % 5 === 0) {
      console.clear();
      console.log(formatTime(counter));
    }
  }, 1000);

  const rawTime = setInterval(() => {
    count++;
    if (count % 60 === 0) {
      console.clear();
      console.log("---------------");
      console.log("Ha transcurrido " + formatTime(count));
      console.log("---------------");
    }
  }, 1000);
}

function formatTime(item) {
  const days = Math.floor(item / 86400);
  const hours = Math.floor(item / 3600);
  const secondsInHours = item - hours * 3600;
  const minutes = Math.floor(secondsInHours / 60);
  const seconds = Math.floor(secondsInHours - minutes * 60);
  if (seconds === 1 && minutes === 1) {
    return (
      days +
      " Dias " +
      hours +
      " Horas " +
      minutes +
      " Minuto " +
      seconds +
      " Segundo"
    );
  } else if (minutes === 1) {
    return (
      days +
      " Dias " +
      hours +
      " Horas " +
      minutes +
      " Minuto " +
      seconds +
      " Segundos"
    );
  } else if (seconds === 1) {
    return (
      days +
      " Dias " +
      hours +
      " Horas " +
      minutes +
      " Minutos " +
      seconds +
      " Segundo"
    );
  } else {
    return (
      days +
      " Dias " +
      hours +
      " Horas " +
      minutes +
      " Minutos " +
      seconds +
      " Segundos"
    );
  }
}

function setCounter(array) {
  const finalCounter =
    array[array.indexOf("D") - 1] * 86.4 +
    array[array.indexOf("H") - 1] * 3600 +
    array[array.indexOf("M") - 1] * 60 +
    array[array.indexOf("S") - 1] * 1;

  return finalCounter;
}

function checkInput(set) {
  try {
    if (set.length < 2 || set.length > 11) {
      throw new Error(
        "Introduce el formato correctamente 0D 0H 0M 0S o 0D-0H-0M-0S con un solo digito numerico"
      );
    }

    if (set.indexOf("D") === -1) {
      set += "0D";
    }

    if (set.indexOf("H") === -1) {
      set += "0H";
    }

    if (set.indexOf("M") === -1) {
      set += "0M";
    }

    if (set.indexOf("S") === -1) {
      set += "0S";
    }

    if (
      isNaN(set.indexOf("D") - 1) ||
      isNaN(set.indexOf("H") - 1) ||
      isNaN(set.indexOf("M") - 1) ||
      isNaN(set.indexOf("S") - 1)
    ) {
      throw new Error(
        "Revisa que asignas un numero correcto a cada parametro temporal y el formato introducido"
      );
    }
    const setSplit = Array.from(set);
    //console.log(setSplit);
    return setSplit;
  } catch (error) {
    console.error(error.message);
  }
}

/* const array = ["3", "S", "4", "H", "3", "M"];

console.log(array.indexOf("H") - 1);

let set = ``;
set = "0d5h1M0s"; //prompt("Establece un tiempo, formato 0D-0H-0M-0S");
const setSplit = Array.from(set).map((key) => key.toUpperCase());

console.log(setSplit); */
