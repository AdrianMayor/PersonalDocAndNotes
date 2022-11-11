/* ##### Módulo os ######

El módulo `os` nos permite conseguir información sobre el sistema operativo donde se está ejecutando el proceso de _Node_. Cosas como la memoria total, la memoria libre, el número, estado de los procesadores y otras cosas relacionadas. */

const os = require("os");

// Total de memoria del sistema.
os.totalmem();

// Total de memoria libre.
os.freemem();

// Nombre del host (máquina donde corre el proceso de Node).
os.hostname();

// Ruta del directorio personal del usuario que ejecuta el proceso de Node.
os.homedir();

// Ruta del directorio temporal para trabajar con archivos volátiles.
os.tmpdir();

os.cpus();
