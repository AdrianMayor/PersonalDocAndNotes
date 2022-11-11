'use strict';

// Creo una variable que contará los segundos
let secondsCounter = 1;

// Un intervalo que va a ir sumando 1 a 1 los segundos
const secondsInterval = setInterval(() => {
  secondsCounter++;
}, 1000);

// Creo la funcion encargada de imprimir los dias, horas, minutos y segundos...
function printCounter() {
  const seconds = secondsCounter % 60;

  // El contador de minutos va a ser el resultado de dividir el contador de segundos entre 60
  // como ya guardamos los segundos redondeamos hacia abajo el contador de minutos
  const minuteCounter = Math.floor(secondsCounter / 60);

  const minutes = minuteCounter % 60;

  // A los 60 minutos tenemos 1 hora por lo tanto
  const hourCounter = Math.floor(minuteCounter / 60);

  const hours = hourCounter % 24;

  // A las 24 horas = 1 dia
  const days = Math.floor(hourCounter / 24);

  // Funcion que pone en plural la palabra si el numero es distinto de 1
  function plural(numero) {
    if (numero === 1) {
      return '';
    }

    return 's';
  }

  // Imprimimos por consola la frase
  console.log(
    `Han pasado ${days} dia${plural(days)}, ${hours} hora${plural(
      hours
    )}, ${minutes} minuto${plural(minutes)}, ${seconds} segundo${plural(
      seconds
    )} desde la ejecución`
  );
}

// Creamos el intervalo que indica cada 5 segundos cuanto tiempo ha pasado desde la ejecución del programa
const printInterval = setInterval(() => {
  console.clear(); // limpiamos la consola antes de mostrar el mensaje por pantalla
  printCounter();
}, 5000);

// Funcion que para el programa
function stop(time, unit) {
  // Creamos la variable que vamos a indicar al setTimeout como tiempo
  let msTime = time; // msTIme porque lo que vamos a acabar indicando a setTimeout son los milisegundos

  // 'D' -> dias
  // 'H' -> horas
  // 'M' -> minutos
  // 'S' -> segundos

  switch (unit) {
    case 'D':
      // Convertimos el time indicado (en días) a horas
      msTime = msTime * 24;

    case 'H':
      // Convertimos de horas a minutos
      msTime = msTime * 60;

    case 'M':
      // Convertimos los minutos a segundos
      msTime = msTime * 60;

    case 'S':
      // Convertimos a milisegundos
      msTime = msTime * 1000;
  }

  setTimeout(() => {
    clearInterval(secondsInterval); // detenemos el contador de segundos
    clearInterval(printInterval); // detenemos el intervalo principal
    console.log('El contador se ha detenido');
  }, msTime);
}

// Llamamos a la funcion que para los intervalos
stop(1, 'M');
