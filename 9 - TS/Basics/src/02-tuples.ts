// array cotidiano
const prices: (number | string)[] = [1, 2, 3, 4, 'as'];
prices.push(1);
prices.push('1');

// tupla o array fuertemente tipado, mientras que en el anterior daba igual el orden y el limite, en este caso se tipa tanto el orden como el limite.
let user: [string, number];
user = ['username', 15];
user = [12, 15]; // da error dado que el primer elemento debe ser un string
user = ['12', 12, 12]; // da error dado que se ha tipado con solo dos elementos
