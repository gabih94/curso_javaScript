let a = 'A';
let b = 'B';
let c = 'C';

const number = [b, c, a];
[a, b, c] = number;

console.log(a,b,c,)


// Atribuição via destruturação (array)
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, , tres, ...resto] = numeros;
console.log(um, tres, resto)


const lista = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
const [lista1, lista2, lista3] = lista
const [,[,,seis]] = lista;
console.log(seis, lista2[2]);