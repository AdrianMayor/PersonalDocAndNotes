"use strict";

const url = "https://randomuser.me/api/";
const calls = 6;
const cards = document.querySelector("main");
/*  function main() {
   addPeople(getPeople(url, calls));
} */

function finalUrl(url, num) {
  const finalUrl = url + "?results=" + num;
  return finalUrl;
}

async function getData() {
  try {
    const response = await fetch(finalUrl(url, calls));

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error.message);
  }
}

async function getPeople() {
  const personFromServer = await getData();

  //console.log(personFromServer.results);

  /*   const nameUsers = personFromServer.results.map(
    (key) => key.name.first + " " + key.name.last
  );
  console.log(nameUsers); */
  const user = [];

  for (let i = 0; i < personFromServer.results.length; i++) {
    const nombre =
      personFromServer.results[i].name.first +
      " " +
      personFromServer.results[i].name.last;
    const country = personFromServer.results[i].location.country;
    const email = personFromServer.results[i].email;
    const img = personFromServer.results[i].picture.large;
    const formattedUser = {
      nombre: nombre,
      pais: country,
      email: email,
      foto: img,
    };
    user.push(formattedUser);
  }
  //console.log(user);
  return user;
}

async function addPeople() {
  const usersArray = await getPeople();
  console.log(usersArray);
  const frag = document.createDocumentFragment();

  for (const key of usersArray) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h2");
    const country = document.createElement("p");
    const mail = document.createElement("a");

    div.classList.add("card");
    img.setAttribute("src", `${key.foto}`);
    title.innerHTML = key.nombre;
    country.innerHTML = key.pais;
    mail.setAttribute("href", `mailto:${key.email}`);
    mail.innerHTML = key.email;

    div.append(img);
    div.append(title);
    div.append(mail);
    div.append(country);

    frag.append(div);
  }
  cards.append(frag);
  console.log(frag);
}

addPeople();
