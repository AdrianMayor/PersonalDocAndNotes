/* ## Módulo path

El módulo `path` nos servirá para manejar y transformar _paths_ (rutas) del sistema de ficheros. 

Es un módulo importante ya que las rutas en los diferentes sistemas operativos no tienen un formato común y este módulo nos garantiza que nuestra aplicación funciona bien en cualquier sistema. 

Path en si mismo no comprueba si existe o no un directorio, une directorios. Para solventar problemas de formato de directorios en diferentes sistemas operativos
*/

const path = require("path");

// Construye un path por partes de forma segura e independiente
// del sistema operativo.
path.join(x);

// Combina una serie de paths para convertirlos en un path absoluto.
path.resolve(x);

// Normaliza un path.
path.normalize(x);

// Retorna la extensión del fichero apuntado por el path.
path.extname(x);

/* Además, el módulo `path` nos sirve para componer rutas usando `path.join`. Por ejemplo, para componer la ruta al archivo `mi_archivo.txt` dentro del directorio actual, podemos hacer uso de `path.join` en conjunción con la variable global `__dirname` de _Node_. */

const path = require("path");

const myPath = path.join(__dirname, "mi_archivo.txt");

/* 
-   `__filename`: contiene la ruta completa del fichero.

-   `__dirname`: contiene la ruta completa del directorio donde está el fichero. */
