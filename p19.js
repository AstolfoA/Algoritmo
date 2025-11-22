// crear una funcion que reciba un numero y que determine si tal numero es primo y devuelva true o false

// crear la funcion qeu reciba un numero como parametro
// utilizar bucle for para poder iterar
// con la sentencia if voy a validar que si el numero es igual a cero retorne false si no retorne true
// voy a inicializar el bucle for en dos por que cero y uno no son valores primos
//  

// const numberIsPrime = (num) => {
//     if(num <= 1){
//         return false
//     }
//     for(let i = 2; i < num; i++){
//         if (num % i === 0){
//             return false
//         }
//     }
//     return true
// }

let string = 'hola'
if(nombre === 'boby' && animal === 'canino'){
    return 'es un perro'
}

const isPalindrome = (word) => {
    let flag =''
    for(let i = word.length -1; i >= 0; i--) {
        console.log(i)
        flag += word[i]
    }
    return flag === word && 'es palindromo'
}

console.log(isPalindrome(string))

// ejercicio n°2
// Dado un arreglo de strings, devuelve un objeto que indique cuántas veces aparece cada palabra.

// Ejemplos de entrada y salida:

// Entrada: ["manzana", "pera", "manzana", "uva", "pera", "pera"]
// Salida: { manzana: 2, pera: 3, uva: 1 }

// Entrada: ["a", "b", "a", "c", "a"]
// Salida: { a: 3, b: 1, c: 1 }

// crear

const fruits = ["manzana", "pera", "manzana", "uva", "pera", "pera"]
const conteoFrutas = {}





