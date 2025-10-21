// Gabriela Sanchez — 13:53
// Sumar todos los elementos de un array

// Enunciado:
// Dado un array de números, retorna la suma de todos sus elementos.

// Entrada:

// [1, 2, 3, 4, 5]


// Salida:

// 15

const sumNumbers = [1, 2, 3, 4, 5];
const returnNum = (array) => {
    return array.reduce((acc, current) => acc + current, 0)

}
console.log(returnNum(sumNumbers))