// 8. Sumar propiedades específicas
// Entrada: [{producto: "manzana", precio: 1.5}, {producto: "pera", precio: 2.0}]
// Salida: 3.5

const products = [{producto: "manzana", precio: 1.5}, {producto: "pera", precio: 2.0}];

const sumaProducts = (array) => {
    return array.reduce((acc, current) => acc + current.precio, 0)
}

console.log(sumaProducts(products))