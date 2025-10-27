// Contar elementos mayores a 10

// Enunciado:
// Dado un array de números, cuenta cuántos elementos son mayores a 10.

// Entrada:

// [4, 15, 8, 23, 7]


// Salida:

// 2

const numbers = [4, 15, 8, 23, 7]
const countNumber = (array) => {
    return array.filter((i) => i >= 10).length
}
console.log(countNumber(numbers))