function two() {
  return 1 + 1;
}

console.log(two());

/* 
    Si ejecurtamos en la terminal de visual code 'node ./0-REPL-ConsolaNode.js' ejecuta el codigo que exista en dicho fichero.

    Aunque si solo ejecutamos el comando 'node' en la terminal, entramos en la consola de NODE

        -> REPL (Read-Eval-Print-Loop) se traslada al Español a Leer-Evaluar-Imprimir-Repetir.
        El REPL de _Node_ es una herramienta de consola que te permite evaluar declaraciones en JavaScript y ver sus resultados inmediatamente.

        Esta funcionalidad nos permite ejecutar código JavaScript directamente en la línea de comandos. Para abrir un REPL, una vez instalado _Node.js_ en nuestra máquina, simplemente abrimos el terminal y tecleamos `node`. A partir de ese momento podremos ejecutar código _JavaScript_ directamente

        console.log('hola'); -> Imprimiria tal cual una consola de navegador en el terminal de vs

        Se podrian realizar operaciones complejas como el map de un array, funciones...

        Todo lo que se escriba en la consola de NODE estara disponible hsata que se cierre

        > function hello(name){
        ... console.log(`hello ${name}`)
        ... }
        undefined
        > hello('adrian');
        hello adrian
        undefined
        >

*/

/* 
          dotCommands -> .help
          .break    Sometimes you get stuck, this gets you out     
          .clear    Alias for .break
          .editor   Enter editor mode -> Escribir en consola cosas mas complejas
          .exit     Exit the REPL
          .help     Print this help message
          .load     Load JS from a file into the REPL session      
          .save     Save all evaluated commands in this REPL session to a file


          
          Matar proceso -> 'pgrep node' // kill 'proceso'
                        -> 'killall node'
*/
