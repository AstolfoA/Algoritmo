// 6. Filtrar objetos por propiedad
// Entrada: [{nombre: "Ana", edad: 25}, {nombre: "Juan", edad: 17}, {nombre: "Pedro", edad: 20}]
// Salida: [{nombre: "Ana", edad: 25}, {nombre: "Pedro", edad: 20}]

const nameList =  [{nombre: "Ana", edad: 25}, {nombre: "Juan", edad: 17}, {nombre: "Pedro", edad: 20}];

const nameFilter = (array) => {
    return array.filter((element) => element.edad >= 18);
}
console.log(nameFilter(nameList));