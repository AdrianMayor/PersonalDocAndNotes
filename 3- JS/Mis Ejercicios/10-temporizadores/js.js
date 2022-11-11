"use strict";

let counter = 18060;
const set = "0d0h30m0s";
const rawTime = setInterval(() => {
  counter--;
  if (counter % 5 === 0) {
    console.log(formatTime());
  }
}, 1000);

/* function formatTime() {
  let seconds = Math.floor(counter % 60);
  let days = Math.floor(seconds / 86.4);
  let hours = Math.floor(counter / 60 / 60);
  let minutes = Math.floor(counter / 60);
  return days + "d " + hours + "h " + minutes + "m " + seconds + "s";
} */

function formatTime() {
  const days = Math.floor(counter / 86400);
  const hours = Math.floor(counter / 3600);
  const secondsInHours = counter - hours * 3600;
  const minutes = Math.floor(secondsInHours / 60);
  const seconds = Math.floor(secondsInHours - minutes * 60);
  return days + "d " + hours + "h " + minutes + "m " + seconds + "s";
}

/* function setCounter(array) {
  const finalCounter =
    array[array.indexOf("D") - 1] * 86.4 +
    array[array.indexOf("H") - 1] * 3600 +
    array[array.indexOf("M") - 1] * 60 +
    array[array.indexOf("S") - 1] / 10;

  return finalCounter;
}

function checkInput() {
  try {
    const setSplit = Array.from(set).map((key) => key.toUpperCase());

    if (set.length < 2 || set.length > 11) {
      throw new Error(
        "Introduce el formato correctamente 0D0H0M0S o 0D-0H-0M-0S"
      );
    }

    if (
      isNaN(setSplit.indexOf("D") - 1) ||
      isNaN(setSplit.indexOf("H") - 1) ||
      isNaN(setSplit.indexOf("M") - 1) ||
      isNaN(setSplit.indexOf("S") - 1)
    ) {
      throw new Error(
        "Revisa que asignas un numero correcto a cada parametro temporal y el formato"
      );
    }
    return setSplit;
  } catch (error) {
    console.error(error.message);
  }
}
 */
