/* 



## VARIABLES DE ENTORNO

Son una serie de propiedades y valores que tiene asociada la sesion del terminal y se utilizan como fuente de configuracion de cosas. 

env -> Para acceder a la lista de variables de entorno, comando 'env' en la terminal.

export -> Se puede crear una variable de entorno en terminal = export USER_PET=naruto. Estas variables de entorno son temporales por defecto

echo -> Devuelve lo que se indique / solicite; si es una variable va con $ -> echo $USER_PET

metodo para crear variables de entorno mas efimeras, definiendo la variable a nivel de proceso, no de entorno. Al ejecutar  'node {index.js}' se crea la variable -> USER_PASSWORD=loremipsum node {index.js}

*/

/* process.env ->

Mediante el objeto `process.env`, podemos acceder a las variables de entorno del proceso de _Node_ que se está ejecutando. Estas variables de entorno suelen almacenar información crítica en nuestros servidores _Node.js_. Por ejemplo, el usuario y contraseña de una base de datos, el código secreto para verificar _tokens_ de usuario, etc.


Todas estas variables funcionan como una fuente de configuracion en modo texto de un programa de NODE. Ej: contraseña de server SQL

*/

// Si queremos imprimir todas las variables de entorno por pantalla:
console.log(process.env); // -> tiene el mismo contenido que 'env' devuelto en forma de objeto. -> Contiene informacion sensible

console.log(process.env.USER_PET); // -> naruto
console.log(process.env.USER_PASSWORD);

// Para imprimir el contenido de una variable en concreto, por ejemplo `PATH`:
console.log("//////////////////////////////////");

console.log(process.env.PATH);

/*Por lo general, no querremos imprimir ni modificar las variables de entorno en nuestra aplicación _Node.js_. La mayoría de veces tomaremos información de estas variables para configurar nuestro servidor. */
