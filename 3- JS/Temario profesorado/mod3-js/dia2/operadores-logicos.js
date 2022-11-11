'use strict';

/**
 * OPEADORES LOGICOS
 */

// Devuelven como resultado true o false
let numA = 5;
let numB = 3;
let numC = 10;
let numD = 5;

// Comparación estricto ===
console.log('numA es igual a numC?', numA === numC);

console.log(`El numero ${numA} es igual al numero ${numD}? ${numA === numD}`);

// Diferencia estricta !==
console.log('Son diferentes?', numA !== numC); // devuelve true si son distintos (false si son iguales)

console.log(`El numero ${numA} es distinto a ${numD}? ${numA !== numD}`);

// Mayor que >
console.log('Es el numero A mayor que el numero B?', numA > numB);
console.log(`El numero ${numA} es mayor que ${numD}? ${numA > numD}`);

// Menor que <
console.log(`El numero ${numB} es menor que ${numC}? ${numB < numC}`);

// Mayor o igual >=
console.log(`El numero ${numA} es mayor o igual a ${numD}? ${numA >= numD}`);

// Menor o igual <=
console.log(`El numero ${numB} es menor o igual a ${numA}? ${numB <= numA}`);

// LÓGICOS (puertas logicas AND y OR)

// AND -> &&
// devuelve true si TODAS las condiciones que le indiquemos se cumplen (todas true)

console.log(3 >= 2 && 10 > 2 && 5 !== 5);
console.log(true && true && true); // AND busca que todas las condiciones que tiene sean true

// OR -> ||
// devuelve true si una de las condiciones se cumple

console.log(3 < 2 || 10 > 2 || 5 !== 5);
console.log(false || true || false); // OR busca que al menos una condicion se cumpla

/* if (age >= 18 && country === 'España') {
  // codigo
} */

// NEGACIÓN
// devuelve lo contrario del booleano (true o false)

console.log('es 5 mayor que 3', 5 > 3);
console.log('es 5 mayor que 3', !5 > 3);

/* if (!usuario || !correo) {
  // codigo manda a pag registro
} */

console.log('Contrario de true:', !true);
console.log('Contrario del contrario de true:', !!true);
