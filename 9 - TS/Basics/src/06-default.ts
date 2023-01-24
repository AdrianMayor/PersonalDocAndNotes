// Si no llega nada se asigna un valor por defecto, si llega algo se asigna sin realizar ninguna comprobacion.

export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10
) => {
  return { id, stock, isNew };
};

const p1 = createProduct(1, true, 12);
console.log(p1); // imprime: {id: 1, stock: 12, isNew: true}

const p2 = createProduct(1);
console.log(p2); // imprime: {id: 1, stock: 10, isNew: true}

const p3 = createProduct(1, false, 0);
console.log(p3); // imprime: {id: 1, stock: 0, isNew: false}

const p4 = createProduct(1, true, 100);
console.log(p4); // imprime: {id: 1, stock: 100, isNew: true}
