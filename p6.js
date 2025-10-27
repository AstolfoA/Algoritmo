// Ejercicio 1: Suma de números en un array
// Crear una función que sume todos los números de un array
const numeros = [1, 2, 3, 4, 5];
// Resultado esperado: 15

const sumaNumeros = (array) => {
    return array.reduce((acc, current) => acc + current, 0)
}
// const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(sumaNumeros(numeros));

