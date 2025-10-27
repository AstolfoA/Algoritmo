// Ejercicio 2: Filtrar números pares de un array
// Crear una función que devuelva un nuevo array con solo los números pares
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Resultado esperado: [2, 4, 6, 8, 10]

const filterPairs = (array) => {
    return array.filter((number) => number % 2 === 0)
}

console.log(filterPairs(numeros));

