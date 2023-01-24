(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  };

  const products: Product[] = []; // especificamos que products recibe un array de Product (con las especificaciones que hemos indicado anteriomente)

  const addProduct = (data: Product) => {
    // Se puede reutilizar esa especificacion tantas veces como se necesite
    products.push(data);
  };

  addProduct({
    title: 'Pro1',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
  });

  console.log(products);
})();
