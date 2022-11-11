"use strict";
/* 
    ## Variables globales

_Node.js_ pone a disposición pocos identificadores globales pero algunos son muy importantes.

-   `process`: este objeto global contiene información sobre el proceso de _Node.js_ que se está ejecutando. Muy útil para trabajar con las variables de entorno y para gestionar la ejecución del propio proceso.

-   `console`: nos permite escribir información en el _output_ del proceso. Dentro de este objeto hay varios objetos que nos permite escribir por diferentes salidas, por ejemplo `console.log`, `console.warn` o `console.error`.

-   `setTimeout`, `clearTimeout`, `setInterval`, `clearInterval`: para crear y controlar _timers_.

-   `module`: es una referencia al módulo (fichero) y nos permitirá exportar objetos mediante `module.exports`.

-   `__filename`: contiene la ruta completa del fichero.

-   `__dirname`: contiene la ruta completa del directorio donde está el fichero.

-   `require`: esta función nos permite incluir otros módulos.
*/

/*






VARIABLES GLOBALES
*/
console.log(module); // Hace referencia al fichero (modulo) actual. Se suele usar para exportar informacion

console.log("///////////////// PROCESS /////////////////");

console.log(process.pid); // -> Devuelve el numero del proceso que tiene el modulo al ejecutarse
console.log(process.version); // -> Devuelve el numero de la version de node que se tiene instalada
console.log(process.platform); // -> Plataforma de pc

process.title = "Procesaso";
console.log(process.title);

if (process.version !== "v17.0.0") {
  console.log("Version de NODEno soportada");
} else if (process.platform !== "win32") {
  console.log("este programa esta disponible solo en windows");
} else {
  console.log(continuamos);
}

let n = 0;

setInterval(() => {
  n = n + 1;
  console.log(n);
  if (n === 5) process.exit(); // -> Cada modulo esta vinculado a su propio proceso | process.exit tiene dos valores, 0 indica que el proceso acabo de forma satisfactoria y 1 indica que el proceso falló
}, 1000);

process.chdir("/Desktop/Hack a Boss/6- NODE/Segunda vuelta"); // -> chdir cambia el directorio de referncia pra el proceso

/* Tomamos el directorio del fichero en el que se ejecuta, no se ve afectado por chdir */
console.log(__dirname); // -> Referencia ruta donde se encuentra el archivo. Ruta absoluta
console.log(__filename); // -> Referencia donde se encuentra el fichero

// Eventos de process
process.on("exit", () => {
  console.log("Adios");
}); // -> Al salir del proceso, se carga el codigo que tenga. Es muy similar a los eventos del DOM

process.on("uncaughtException", (error) => {
  console.log("Lo sentimos hubo un error", error.message);
  process.exit();
}); //"uncaughtException" -> En caso de que suceda un error no previsto, ejecuta el codigo que contenga

/*







ARGUMENTOS
*/

const argvs = process.argv.slice(2);

console.log(argvs); // -> Imprime los argumentos que tiene un fichero. Los dos primeros normalmente molestan , por eso se eliminan con slice.

const a = Number(argvs[0]);
const b = Number(argvs[1]);

console.log("Calculadora en terminal", a + b);

// Introducimos argumentos mediante la consola 'node ./VariablesYArgumentos.js 12 30' -> Informacion volatil que esta solo en ese proceso
