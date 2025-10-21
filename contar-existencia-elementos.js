// 5. Contar ocurrencias de elementos
// Entrada: ["a", "b", "a", "c", "b", "a"]
// Salida: { a: 3, b: 2, c: 1 }

const letras = ["a", "b", "a", "c", "b", "a"]
const contarOcurrencias = (array) => {
    return array.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});
};
console.log(contarOcurrencias(letras))

// concatenar un array

let integrado = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const newArray = [].concat(...integrado);

// let newArray = integrado.reduce((a, b) => {
//     return a.concat(b);

// });

console.log(newArray);

