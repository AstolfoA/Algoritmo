// Enunciado:
// Dado un arreglo de números, elimina los valores duplicados y devuelve un nuevo arreglo con los números únicos, manteniendo el orden original.

// Ejemplos de entrada y salida:

const entrada = [1, 2, 2, 3, 4, 4, 5]
Salida: [1, 2, 3, 4, 5]

Entrada: [7, 7, 7, 7]
Salida: [7]

// pasos: crear una funcion que reciva como parametor o argumento un array 
// implementa un metodo que nos traiga el valor unico del array
// retornar el resultado.

const getValue = (array) => {
    return [...new Set(array)]
}

const getValue2 = (array) => {
    return array.reduce()
}

console.log(getValue(entrada))

// palabra palindromo.

const palabraPalindromo = 'reconocer';

const getPalindromo = (array) => {
    return array.split('').reverse().join('') === palabraPalindromo ? 'si es palindromo' : ' no es palindromo'
}

console.log(getPalindromo(palabraPalindromo))