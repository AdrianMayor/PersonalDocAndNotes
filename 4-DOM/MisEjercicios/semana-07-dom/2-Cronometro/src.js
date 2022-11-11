"use strict";

const temp = document.querySelector("main :first-child");
//const tempPaused = document.querySelector("main :nth-child(2)");

const buttonStart = document.querySelector("#start");
const buttonReset = document.querySelector("#reset");
/* const buttonPaused = document.querySelector("#pause");
const buttonStop = document.querySelector("#stop"); */

let count = 0;
let on = false;
//let miStorage = window.localStorage;
count = localStorage.getItem("count", count);
temp.innerHTML = `Ha transcurrido ${formatTime(count)}`;

//let countPaused = 0;
//let pause = false;

buttonStart.addEventListener("click", () => {
  on = !on;
  countTime();
});

buttonReset.addEventListener("click", () => {
  count = 0;
  localStorage.setItem("count", count);
  temp.innerHTML = `Ha transcurrido ${formatTime(count)}`;
});

/* buttonPaused.addEventListener("click", () => {
  pause = !pause;
  countTime();
}); */

function countTime() {
  const rawTime = setInterval(() => {
    if (on) {
      //if (!pause) {
      count++;
      localStorage.setItem("count", count);

      console.clear();
      console.log("---------------");
      console.log("Ha transcurrido " + formatTime(count));
      console.log("---------------");

      temp.innerHTML = `Ha transcurrido ${formatTime(count)}`;
      //}
      /* if (pause) {
        
        countPaused++;

        console.clear();
        console.log("---------------");
        console.log("Tiempo pausado transcurrido " + formatTime(countPaused));
        console.log("---------------");

        tempPaused.innerHTML = `Tiempo pausado transcurrido ${formatTime(
          countPaused
        )}`; 
        }*/
    } else {
      clearInterval(rawTime);
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
