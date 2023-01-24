const numbers: ReadonlyArray<number> = [1, 2, 3, 4];
numbers.push(9);
numbers.pop();
numbers.unshift(1);
numbers.filter(() => {});
numbers.reduce(() => 0);
numbers.map(() => 0);

// no permite la modificacion directa pero si la manipulacion que devuelve nuevo array
