// Entrada: ["manzana", "pera", "uva"]
// Objetivo: devolver un arreglo con el texto "fruta: " al inicio de cada palabra.
// 👉 Salida esperada: ["fruta: manzana", "fruta: pera", "fruta: uva"]

const fruits = ["manzana", "pera", "uva", "limon", "banana"];

const addText = (array) => {
    return array.map((element) => `fruta: ${element}`)
}
console.log(addText(fruits))