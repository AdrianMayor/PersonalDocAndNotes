(() => {
  // se puede especificar cual es el retorno de la funcion poniendo el tipo despues de los parentesis de los argumentos de la funcion
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total.toString();
  };

  // Para especificar que la funcion no devuelve nada se indicaria el tipo void
  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
  };

  printTotal([1, 2, 1, 1, 1, 2]);
})();
