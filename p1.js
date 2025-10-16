//Duplicar números
//Entrada: [1, 2, 3, 4]
//👉 Salida esperada: [2, 4, 6, 8]
const numbers =  [1, 2, 3, 4]
const duplicateNumbers = (array) => {
    return array.map((number) => number * 3) ;
} 
// console.log(duplicateNumbers([1, 2, 3, 4])) 
console.log(duplicateNumbers(numbers))
console.log(numbers)




