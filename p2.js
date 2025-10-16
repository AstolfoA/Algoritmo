// Emma Pava — 12:18
// 🧩 2. Convertir a mayúsculas
// Entrada: ["emma", "pava", "frontend"]
// 👉 Salida esperada: ["EMMA", "PAVA", "FRONTEND"]

const arrayString =  ["emma", "pava", "frontend"];


const uppercase = (array) => {
    return array.map((element) => element.toUpperCase() )
}
console.log(uppercase(arrayString));

const numbersMayus = ["astolfo", "gaby", "emma"];

console.log(uppercase(numbersMayus))