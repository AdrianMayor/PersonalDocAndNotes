"use strict";

function depurate(newArray) {
  const uniqueNames = [...new Set(newArray)];
  console.log(uniqueNames);
}

const names = [
  "A-Jay",
  "Manuel",
  "Manuel",
  "Eddie",
  "A-Jay",
  "Su",
  "Reean",
  "Manuel",
  "A-Jay",
  "Zacharie",
  "Zacharie",
  "Tyra",
  "Rishi",
  "Arun",
  "Kenton",
];

depurate(names);
