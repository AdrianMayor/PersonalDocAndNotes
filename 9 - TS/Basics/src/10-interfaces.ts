type Sizes = 'S' | 'M' | 'L' | 'XL';
type userId = string | number; // Con los tipos se pueden tipar tipos primitivos. Con interfaces algo tan especifico en una linea no se podria hacer ya que requiere de un cuerpo.

// Ademas es mejor trabajar con interfaces para tipar grandes objetos porque es mas escalable

/* type Product = {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}; */

interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];

products.push({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  stock: 90,
});

const addProduct = (data: Product) => {
  products.push(data);
};
