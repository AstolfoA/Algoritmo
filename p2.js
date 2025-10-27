// Emma Pava — 12:18
// 🧩 2. Convertir a mayúsculas
// Entrada: ["emma", "pava", "frontend"]
// 👉 Salida esperada: ["EMMA", "PAVA", "FRONTEND"]

const arrayString =  ["emma", "pava", "frontend"];


const upperCase = (array) => {
    return array.map((element) => element.toUpperCase())
};
console.log(upperCase(arrayString));

const numbersMayus = ["astolfo", "gaby", "emma"];

console.log(upperCase(numbersMayus))