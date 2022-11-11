/* 
    Chalk proporciona una manera de colorear lineas de texto en la consola

    Instalamos chalk -> npm i chalk -> Se instala en node_modules (que a su vez se instala en el root del proyecto) | Actualmente para poder umportarlo con require ( forma nueva 'import "blabla" from "blabla" ' no compatible con minismist por ahora)

    npm i chalk@4.1.2 -> seleccionas una version en concreto

*/

console.log(chalk.green("Welcome to Image Process v1.0"));

console.error(
  chalk.red("Los argumentos --inputDir y --outputDir son obligatorios")
);
