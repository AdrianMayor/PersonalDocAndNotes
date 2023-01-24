(() => {
  const prices = [1, 2, 3, 4, 5, 6, 7, 8, 212]; // --> se infiere como number
  // prices.push('asas'); --> da error porque el array esta inferido como array de numeros
  // prices.push(true);
  // prices.push({});
  prices.push(12);

  const products = ['hola', true]; // --> se infiere con los tipos con los que inicializamos el array: string | boolean
  products.push(12);

  // para poder indicar que un array puede recibir varios tipos
  let mixed: (string | number | boolean)[] = ['hola', true];
  mixed.push(1); // --> al indicar explicitamente que el array puede recibir numeros, puede recibirlo y no da error.
  mixed.push('as');
  mixed.push({});

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 212];
  numbers.map((item) => item * 2);
})();
