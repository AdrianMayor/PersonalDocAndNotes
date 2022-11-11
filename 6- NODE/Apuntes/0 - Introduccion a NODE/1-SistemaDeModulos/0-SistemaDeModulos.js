/* 
*Node.js* usa el sistema modular *CommonJS* (*ES6 Modules* de forma experimental).

    El sistema de modulos permite importar contenido de ficheros de JS o requerir 'core modules' como modulos instalados con 'npm'


- Cada fichero con extensión `.js` que creamos define un nuevo módulo. Se supone que cada módulo se encargará de una pequeña parte del código de nuestro servidor.

- Exportaremos ciertas partes de nuestros módulos a otros módulos. Esto nos permitirá separar la lógica de nuestra aplicación dando una mayor legibilidad de nuestro código.

-- Para exportar un módulo usaremos el objeto `module.exports`.

-- Para importar funcionalidades de otros módulos usando `require`.

- Además de los módulos que nosotros definamos, *Node.js* expone una serie de módulos que nos permiten interactuar con el sistema operativo y otras utilidades. Son los llamados *core modules* (`http`, `fs`, `path`, etc.). 


        Existen numerosos módulos que *Node.js* pone a nuestra disposición para facilitarnos el desarrollo. Estos módulos cubren tareas comunes y ahorran al programador tener que reescribir utilidades que se necesitan en cualquier servidor web. Tal es el caso de módulos de uso general como:
        -`http`,
        -`fs`, 
        -`path`, 
        -`crypto`,
        -etc. 
*/

// Definir nmuestros propios modulos -> Practicamente lo mismo que la modularizacion en vanilla JS

/* Opcion 1 */
//Fichero JS donde tenemos el codigo y exportamos
const arraySum = (arr) => arr.filter((i) => i > 3).reduce((sum, i) => sum + i);

module.exports = arraySum;

// Fichero donde importamos la funcion como un modulo de Node

const sum = require("./sum.js");

const array = [1, 2, 3, 4, 5, 6, 7];

const result = sum(array);

console.log(`El resultado es ${result}.`);

/* Opcion 2 */
//Fichero JS donde tenemos el codigo y exportamos
const arraySum2 = (arr) => arr.filter((i) => i > 3).reduce((sum, i) => sum + i);

module.exports = { arraySum2 };

// Fichero donde importamos la funcion como un modulo de Node
const { arraySum } = require("./sums");

const array2 = [1, 2, 3, 4, 5, 6, 7];

const result2 = arraySum(array2);

console.log(`El resultado es ${result2}.`);
