// 7. Concatenar valores de objetos
// Entrada: [{nombre: "Ana", apellido: "García"}, {nombre: "Juan", apellido: "Pérez"}]
// Salida: ["Ana García", "Juan Pérez"]

const nameList = [{nombre: "Ana", apellido: "García"}, {nombre: "Juan", apellido: "Pérez"}];

const nameFilter = (array) => {
    return array.map((persona) => `${persona.nombre} ${persona.apellido}`)
}
console.log(nameFilter(nameList))