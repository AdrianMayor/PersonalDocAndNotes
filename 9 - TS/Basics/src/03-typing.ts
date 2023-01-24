(() => {
  let myProductName = 'Product 1';
  let myProductPrice = 123;

  myProductName = 'change';

  // al ts reconocer y saber de que tipo es una variable , puede sugerir de mejor manera metodos de dichos tipos

  myProductName.toLowerCase();
  myProductPrice.toFixed();

  // Al ser constante y no poder cambiar, simplemente dice que dicha variable vale lo que vale
  const myProductStock = 1000;
  const myProductName2 = 'Product 2e';
})();
