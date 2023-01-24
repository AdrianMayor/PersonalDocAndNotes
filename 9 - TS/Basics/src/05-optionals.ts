export const createProduct = (
  id: string | number,
  isNew?: boolean, // es opcional
  stock?: number // es opcional
) => {
  return { id, stock: stock || 10, isNew: isNew || true };
};

// 0 === false
// '' === false
// false === false

const p1 = createProduct(1, true, 12);
console.log(p1); // imprime: {id: 1, stock: 12, isNew: true}

const p2 = createProduct(1);
console.log(p2); // imprime: {id: 1, stock: 10, isNew: true}

const p3 = createProduct(1, false, 0);
console.log(p3); // imprime: {id: 1, stock: 10, isNew: true} --> es un problema del operador de JS '||'

export const createProduct2 = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return { id, stock: stock ?? 10, isNew: isNew ?? true }; // Ahora con '??' si puede interpretar correctamente los espacios, los ceros y el false
};

const p4 = createProduct2(1, false, 0);
console.log(p4); // imprime: {id: 1, stock: 0, isNew: false}
