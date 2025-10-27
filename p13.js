// Eliminar duplicados de un array

// Enunciado:
// Dado un array de números, retorna un nuevo array sin duplicados.

// Entrada:

// [1, 2, 2, 3, 4, 4, 5]


// Salida:

// [1, 2, 3, 4, 5]

const numbers =  [1, 2, 2, 3, 4, 4, 5];
// const numbers =  ["a", "b", "b", "c", "c", "c", "d", "d"];
const removeDuplicate = (array) => {
    return [ ...new Set(array) ]
}
console.log(removeDuplicate(numbers))