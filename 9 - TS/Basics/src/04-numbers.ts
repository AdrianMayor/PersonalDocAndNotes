(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice);

  let customerAge: number = 28;
  //  customerAge = customerAge + '1'; // 281
  customerAge = customerAge + 1;
  console.log('customerAge', customerAge);

  let productInStock: number; // al no inicializar la variable es necesario indicar explicitamente que tipo es
  console.log('productInStock', productInStock); // como no tiene valor inicializado, nos alerta
  if (productInStock > 10) {
    console.log('is greater');
  }

  let discount = parseInt('123');
  console.log('discount', discount);
  if (discount <= 200) {
    console.log('apply');
  } else {
    console.log('not apply');
  }

  let hex = 0xff;
  console.log('hex', hex);
  let bin = 0b1010;
  console.log('bin', bin);

  //  const myNumber: Number = 10; // No tipar con el objeto Number, sino con el tipo number
})();
