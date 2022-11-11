/* Vamos a usar 3 variables:
    - 2 de ellas para guardar numeros
    - 1 para un operador ,debe ser string, (suma, resta, division, multiplicacion , resto)
    
Hagamos un condicional, segun que operador hayamos indicado, que muestre por consola el resultado de operar esos dos numeros*/

// Creamos las variables para los numeros
// Creamnos la variable para el operador (tipo string)
// Condicional (if...)
// else if el operador es una resta
// else if el operador es multiplicacion
// Imprimir por consola el resultado

let numA = 10;
let numB = 2;
let operador = "%";

if (operador === "+") {
  console.log(numA + numB);
} else if (operador === "-") {
  console.log(numA - numB);
} else if (operador === "*") {
  console.log(numA * numB);
} else if (operador === "/") {
  console.log(numA / numB);
} else if (operador === "%") {
  console.log(numA % numB);
} else {
  console.log("Indica un operador");
}
