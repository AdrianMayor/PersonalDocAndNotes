"use strict";

/* 
    PROMESAS

    -> estado inicial es pendiente, una promesa se resuelve o se rechaza
*/

const miPromesa = new Promise((resolve, reject) => {
  // El callback recibe 2 argumentos:
  //  - resolve: completado con exito
  //  - reject: la promesa falla

  // Para simlar una promesa real utilizaremos un timeout
  setTimeout(() => {
    const random = Math.round(Math.random() * 10);

    if (random > 5) {
      resolve("Todo ha ido bien");
    } else {
      reject("Algo ha fallado");
    }
  }, 2000);
});

/* 
    GESTIONAR/TRABAJAR CON UNA PROMESA
    
        -  El metodo then(), si todo ha ido bien retorna lo que devuelva la promesa
        -  catch() , e el encargado de gestionar el error si la promesa falla
        -  finally -> (opcional) siempre se ejecutara, de error o no
*/

// console.log(miPromesa); // Nos devuelve que esta pendiente

miPromesa
  .then((response) => console.log(response)) // Va a tomar el valor del resolve
  .catch((error) => console.error(error)) // va a tomar el valor de reject
  .finally(() => console.log("finally() ->  pase lo que pase se ejecuta"));

///////////////////

// CASO REAL

// Vamos a pedir a la API de rick y morty sus datos -> https://rickandmortyapi.com/api/character

/* 
    FETCH()
   La manera que tenemos de pedir lo datos a una API es usando el metodo fetch()
   Este devuelve una promesa */

const url = "https://rickandmortyapi.com/api/character";

fetch(url)
  .then((response) => response.json()) // devuelve otra promesa
  .then((body) => {
    const { results } = body;

    const personajesVivos = results.filter(
      (personaje) =>
        personaje.status === "Alive" && personaje.species === "Alien"
    );

    console.log(personajesVivos);
  })
  .catch((error) => console.error(error));

fetch("https://www.el-tiempo.net/api/json/v2/home")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
