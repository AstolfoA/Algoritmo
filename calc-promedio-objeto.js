// 3. Calcular promedio de edades de objetos
// Entrada: [{nombre: "Ana", edad: 25}, {nombre: "Juan", edad: 30}, {nombre: "Pedro", edad: 20}]
// Salida: 25

const personas =  [{nombre: "Ana", edad: 25}, {nombre: "Juan", edad: 30}, {nombre: "Pedro", edad: 20}];

const calcularPromedioEdades = (array) => {
    return array.reduce((acc, current) => acc + current.edad, 0) /array.length
}

console.log(calcularPromedioEdades(personas))