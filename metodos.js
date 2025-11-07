// Creemos un archivo de práctica
let frutas = ['manzana', 'banana'];
console.log(frutas.length);  // 2
frutas.push('naranja');      // Añade al final
console.log(frutas);         // ['manzana', 'banana', 'naranja']
frutas.pop();               // Elimina el último
console.log(frutas);         // ['manzana', 'banana']

// Métodos de iteración simple

const numeros = [1, 2, 3, 4, 5];

// forEach - para iterar
numeros.forEach(numero => {
    console.log(numero * 2);
});

// map - para transformar
const duplicados = numeros.map(numero => numero * 2);
console.log(duplicados); // [2, 4, 6, 8, 10]

// filter - para filtrar
const pares = numeros.filter(numero => numero % 2 === 0);
console.log(pares); // [2, 4]

// find - para encontrar
const primeroMayorQueTres = numeros.find(numero => numero > 3);
console.log(primeroMayorQueTres); // 4

// imcludes - para verificar existencia
const tieneTres = numeros.includes(3);
console.log(tieneTres); // true

// metodos de tranformacion

const letras = ['a', 'b', 'c', 'd', 'e'];
console.log(letras.slice(1, 3));     // ['b', 'c']
console.log(letras.concat(['f', 'g', 'h'])); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
// splice modifica el array original
let letras2 = ['a', 'b', 'c', 'd', 'e'];
letras2.splice(2, 1, 'z');
console.log(letras2); // ['a', 'b', 'z', 'd', 'e']
// reverse modifica el array original
let letras3 = ['a', 'b', 'c', 'd', 'e'];
letras3.reverse();
console.log(letras3); // ['e', 'd', 'c', 'b', 'a']
// sort modifica el array original
let letras4 = ['d', 'a', 'c', 'b', 'e'];
letras4.sort();
console.log(letras4); // ['a', 'b', 'c', 'd', 'e']

// metodos de reduccion
const numeros1 = [1, 2, 3, 4, 5];

// reduce - suma todos los números
const suma = numeros.reduce((acumulador, actual) => acumulador + actual, 0);
console.log(suma); // 15

// some - verifica si hay números pares
const hayPares = numeros.some(numero => numero % 2 === 0);
console.log(hayPares); // true

// every - verifica si todos son mayores que 0
const todosMayoresQueCero = numeros.every(numero => numero > 0);
console.log(todosMayoresQueCero); // true

// findIndex - encuentra el índice del primer número mayor que 3
const indice = numeros.findIndex(numero => numero > 3);
console.log(indice); // 3