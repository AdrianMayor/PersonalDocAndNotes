'use strict';

// FOR

for (let i = 8; i <= 22; i++) {
  // console.log(i);
}

// WHILE

let hora = 8;

while (hora <= 22) {
  // console.log(hora);

  hora++; // hora = hora + 1;
}

// Bucle con condicional

for (let i = 0; i < 24; i++) {
  if (i >= 8 && i <= 22) {
    // console.log(i);
  }
}

//// EXTRA

for (let i = 8; i <= 22; i++) {
  let hora = i;

  if (hora > 12) {
    hora -= 12;
  }

  let cadenaCucus = hora.toString();

  for (let j = 0; j < hora; j++) {
    cadenaCucus += ' cucu';
  }

  console.log(cadenaCucus);
}
