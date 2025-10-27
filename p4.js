// Entrada:

// [
//   { nombre: "Emma", edad: 25 },
//   { nombre: "Carlos", edad: 30 },
//   { nombre: "Ana", edad: 28 }
// ]

// 💼 5. Obtener nombres de objetos
// Objetivo: crear un nuevo arreglo solo con los nombres.
// 👉 Salida esperada: ["Emma", "Carlos", "Ana"]

const objectString = [
    {nombre: "Emma", edad: 25},
    {nombre: "Carlos", edad: 30},
    {nombre: "Ana", edad: 28}
]

const getName = (array) => {
    return array.map((element) => element.nombre)
};
console.log(getName(objectString))