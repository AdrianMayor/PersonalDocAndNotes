(() => {
  let myDinamicVar: any; // --> se le quita la validacion de tipos y puede ser cualquier cosa
  myDinamicVar = 100;
  myDinamicVar = null;
  myDinamicVar = {};
  myDinamicVar = '';
  // se aconseja que el any no sea utilizado, su principal uso es para integrar y migrar a TS en un proyecto ya hecho.

  // CAST --> hacer que la variable sea tratada como otro tipo
  myDinamicVar = 'Hola';
  const rta = (myDinamicVar as string).toLocaleLowerCase();
  console.log(rta);

  myDinamicVar = 1212;
  const rta2 = (<number>myDinamicVar).toFixed(); // Se puede convertir una variable tipada como 'any'
  console.log(rta2);
})();
