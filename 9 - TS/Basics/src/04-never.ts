// Never ayuda a identificar ciclos o funciones que nunca van a parar , o que van a detener la ejecucion del programa. TS puede detectar esos never.

const withoutEnd = () => {
  while (true) {
    console.log('nunca parar de aprender');
  }
};

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'es un string';
  } else if (Array.isArray(input)) {
    return 'es un array';
  }
  return fail('not match');
};

console.log(example('Hola'));
console.log(example([1, 1, 1, 1]));
console.log(example(121212)); // Aqui se detiene
console.log(example('hola despues del fail'));
