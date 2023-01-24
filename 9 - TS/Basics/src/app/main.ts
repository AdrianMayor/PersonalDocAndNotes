import { faker } from '@faker-js/faker';
import {
  addProduct,
  findProducts,
  products,
  updateProduct,
} from './products/product.service';

for (let index = 0; index < 50; index++) {
  addProduct({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    size: faker.helpers.arrayElement(['M', 'S', 'L', 'XL']),
    color: faker.color.cmyk({ format: 'css' }),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElement(),
    price: parseInt(faker.commerce.price()),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    categoryId: faker.datatype.uuid(),
  });
}

console.log(products);

const product = products[0];
updateProduct(product.id, { title: 'new title', stock: 80 });

findProducts({
  title: 'p1',
  color: 'red',
});
