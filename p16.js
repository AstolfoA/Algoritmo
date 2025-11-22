// Encontrar el Número Máximo en un Array Enunciado: Escribe una función que reciba un array de números y devuelva el valor máximo que hay en ese array. Ejemplo de entrada: [3, 7, 2, 9, 4] Ejemplo de salida: 9

let numbers =  [3, 7, 2, 9, 4];

const getMayor = (array,...rest) => {
    return Math.max(...array)
}

console.log(getMayor(numbers))

// Contar la Cantidad de Caracteres en un Objeto Enunciado: Crea una función que recibe un objeto donde las claves son nombres y los valores son cadenas de caracteres, y devuelve la suma total de todos los caracteres en los valores. Ejemplo de

let object = {food: 'arepa'
};
let object2 = {name: 'astolfo'};


const stringValue = (obj, prop) => {
    return obj[prop].length
}

console.log(stringValue(object, 'food'))
console.log(stringValue(object2, 'name'))

// Filtrar Objetos por Propiedad Enunciado: Diseña una función que reciba un array de objetos y un valor de propiedad, y devuelva un array con los objetos que tengan esa propiedad igual al valor dado. Ejemplo de entrada: [{id: 1, nombre: "Ana"}, {id: 2, nombre: "Luis"}, {id: 3, nombre: "Ana"}], valor: "Ana"
//  Ejemplo de salida: [{id: 1, nombre: "Ana"}, {id: 3, nombre: "Ana"}]

let listName =  [{id: 1, nombre: "Ana"}, {id: 2, nombre: "Luis"}, {id: 3, nombre: "Ana"}];

const filterName = (array, value) => {
    let result = array.filter(element => element.nombre === value )
    return result.length == 0 ? 'no existe' : result

} 

console.log(filterName(listName, 'Ana'))
