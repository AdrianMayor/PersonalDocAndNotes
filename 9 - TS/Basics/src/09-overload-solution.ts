// Queremos ingresar un string y que devuelva un array
// Nico => [N,i,c,o]. string => string[]

// y tambien
// [N,i,c,o] => Nico. string[] => string

// overload en funciones solo sirve con 'function', no en arrow function
// -----------------------------------------------------------------------

// Tipamos que es lo que queremos. Tipandolo de esta manera no es necesario realizar ninguna comprobacion posterior. (Lineas 24 y 30)
export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

// El metodo no cambia, aunque realizaremos un pequeño refactor
/* export function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // Devuelve un string
  } else {
    return input.split(''); // Devuelve string[]
  }
} */

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // Devuelve un string
  } else if (typeof input === 'string') {
    return input.split(''); // Devuelve string[]
  } else if (typeof input === 'number') {
    return true; // Devuelve boolean
  }
}

const rtaArray = parseStr('Nico');
/* if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
} */
console.log(rtaArray); // imprime: ['N', 'i', 'c', 'o']

const rtaStr = parseStr(['N', 'i', 'c', 'o']);
/* if (typeof rtaStr === 'string') {
  rtaStr.toLowerCase();
} */
console.log(rtaStr); // imprime: Nico

const rtaBoolean = parseStr(123);
console.log(rtaBoolean); // imprime: true
