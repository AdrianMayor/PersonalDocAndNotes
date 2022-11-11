# Process images

Comando:

node process.js --inputDir=images --outputDir=result --watermark==hab.png --resize=500

Hacer un programa de node que se llame process.js , que se ejecute con el node y el archivo y reciba una serie de parametros. '--resize=500'

## Módulos

- minimist -> Permitirá procesar argumentos
- chalk -> Permitirá poner mensajes en la consola de colores
- sharp -> Permitirá trabajar con imagenes

## Pasos a seguir

    - Creamos el fichero process.js
    - Comprobamos que los argumentos introducidos se encuentran bien formateados recogiendolos mediante la dependencia de minimist. Linea 31 -> process.js
