// 10. Ordenar objetos por propiedad
// Entrada: [{nombre: "Zinc", peso: 65}, {nombre: "Hierro", peso: 55}, {nombre: "Oro", peso: 195}]
// Salida: [{nombre: "Hierro", peso: 55}, {nombre: "Zinc", peso: 65}, {nombre: "Oro", peso: 195}]

const element =  [{nombre: "Zinc", peso: 65}, {nombre: "Hierro", peso: 55}, {nombre: "Oro", peso: 195}];

const orderElement = (array) => {
    array.sort((a, b) => a.peso - b.peso);
};

console.log(orderElement(element));