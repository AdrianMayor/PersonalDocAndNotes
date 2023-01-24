// Queremos ingresar un string y que devuelva un array
// Nico => [N,i,c,o]. string => string[]

// y tambien
// [N,i,c,o] => Nico. string[] => string

// overload en funciones solo sirve con 'function', no en arrow function

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // Devuelve un string
  } else {
    return input.split(''); // Devuelve string[]
  }
}

const rtaArray = parseStr('Nico');
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log(rtaArray); // imprime: ['N', 'i', 'c', 'o']

const rtaStr = parseStr(['N', 'i', 'c', 'o']);
if (typeof rtaStr === 'string') {
  rtaStr.toLowerCase();
}
console.log(rtaStr); // imprime: Nico

//PROBLEMATICA: TS no puede inferir que es lo que puede devolver solo con nuestra logica.
