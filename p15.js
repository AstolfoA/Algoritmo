// Encontrar el promedio de un array

// Enunciado:
// Dado un array de números, calcula el promedio (suma de todos los elementos dividido por la cantidad).

// Entrada:

// [10, 20, 30, 40, 50]


// Salida:

// 30

const numbers = [10, 20, 30, 40, 50];
const calculateTheAverage = (array) => {
    return array.reduce((acc, current) => acc + current, 0) / array.length
}
console.log(calculateTheAverage(numbers))