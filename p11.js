// Encontrar el número más grande

// Enunciado:
// Dado un array de números, retorna el número más grande.

// Entrada:

// [5, 12, 7, 3, 20]


// Salida:

// 20

const numbers =  [5, 12, 7, 3, 20];
const numGrande = (array) => {
    // return Math.max(...array);
    return array.sort((a, b) => b - a) [0] 

}
console.log(numGrande(numbers))
