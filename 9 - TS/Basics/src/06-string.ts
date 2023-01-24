(() => {
  let productTitle = 'My amazing product';
  //  productTitle = null;  --> TS una vez mas no permite cambiar una variable que se encuentra inicializada con un tipo concreto a otro tipo
  //  productTitle = () => {};
  //  productTitle = 123;
  productTitle = 'My amazing product changed';
  console.log('productTitle', productTitle);

  const productDescription = 'Product description';
  console.log('productDescription', productDescription);

  let productPrice = 100;
  let isNew: boolean = false;

  const summary = `
  title:${productTitle}
  description:${productDescription}
  price:${productPrice}
  isNew: ${isNew}
  `;

  console.log(summary);

  const myString: string = ''; // --> string != String
})();
