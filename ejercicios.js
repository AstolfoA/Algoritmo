// 1. Filtrar números pares
// Entrada: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Salida: [2, 4, 6, 8, 10]
const filtrarPares = (array) => {
    return array.filter(num => num % 2 === 0);
};

// 2. Transformar array de nombres a mayúsculas
// Entrada: ["ana", "juan", "pedro"]
// Salida: ["ANA", "JUAN", "PEDRO"]
const convertirMayusculas = (nombres) => {
    return nombres.map(nombre => nombre.toUpperCase());
};

// 3. Calcular promedio de edades de objetos
// Entrada: [{nombre: "Ana", edad: 25}, {nombre: "Juan", edad: 30}, {nombre: "Pedro", edad: 20}]
// Salida: 25
const calcularPromedioEdades = (personas) => {
    const sumaEdades = personas.reduce((acc, persona) => acc + persona.edad, 0);
    return sumaEdades / personas.length;
};

// 4. Encontrar el número más grande
// Entrada: [5, 12, 8, 130, 44]
// Salida: 130
const encontrarMaximo = (numeros) => {
    return Math.max(...numeros);
};

// 5. Contar ocurrencias de elementos
// Entrada: ["a", "b", "a", "c", "b", "a"]
// Salida: { a: 3, b: 2, c: 1 }
const contarOcurrencias = (array) => {
    return array.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});
};

// 6. Filtrar objetos por propiedad
// Entrada: [{nombre: "Ana", edad: 25}, {nombre: "Juan", edad: 17}, {nombre: "Pedro", edad: 20}]
// Salida: [{nombre: "Ana", edad: 25}, {nombre: "Pedro", edad: 20}]
const filtrarMayoresDeEdad = (personas) => {
    return personas.filter(persona => persona.edad >= 18);
};

// 7. Concatenar valores de objetos
// Entrada: [{nombre: "Ana", apellido: "García"}, {nombre: "Juan", apellido: "Pérez"}]
// Salida: ["Ana García", "Juan Pérez"]
const concatenarNombres = (personas) => {
    return personas.map(persona => `${persona.nombre} ${persona.apellido}`);
};

// 8. Sumar propiedades específicas
// Entrada: [{producto: "manzana", precio: 1.5}, {producto: "pera", precio: 2.0}]
// Salida: 3.5
const sumarPrecios = (productos) => {
    return productos.reduce((total, producto) => total + producto.precio, 0);
};

// 9. Eliminar duplicados
// Entrada: [1, 2, 2, 3, 3, 4, 5, 5]
// Salida: [1, 2, 3, 4, 5]
const eliminarDuplicados = (array) => {
    return [...new Set(array)];
};

// 10. Ordenar objetos por propiedad
// Entrada: [{nombre: "Zinc", peso: 65}, {nombre: "Hierro", peso: 55}, {nombre: "Oro", peso: 195}]
// Salida: [{nombre: "Hierro", peso: 55}, {nombre: "Zinc", peso: 65}, {nombre: "Oro", peso: 195}]
const ordenarPorPeso = (elementos) => {
    return elementos.sort((a, b) => a.peso - b.peso);
};

// Ejemplos de uso:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("1. Números pares:", filtrarPares(numeros));

const nombres = ["ana", "juan", "pedro"];
console.log("2. Nombres en mayúsculas:", convertirMayusculas(nombres));

const personas = [
    {nombre: "Ana", edad: 25},
    {nombre: "Juan", edad: 30},
    {nombre: "Pedro", edad: 20}
];
console.log("3. Promedio de edades:", calcularPromedioEdades(personas));

const numerosMaximo = [5, 12, 8, 130, 44];
console.log("4. Número máximo:", encontrarMaximo(numerosMaximo));

const letras = ["a", "b", "a", "c", "b", "a"];
console.log("5. Conteo de ocurrencias:", contarOcurrencias(letras));

const personasEdad = [
    {nombre: "Ana", edad: 25},
    {nombre: "Juan", edad: 17},
    {nombre: "Pedro", edad: 20}
];
console.log("6. Mayores de edad:", filtrarMayoresDeEdad(personasEdad));

const personasCompletas = [
    {nombre: "Ana", apellido: "García"},
    {nombre: "Juan", apellido: "Pérez"}
];
console.log("7. Nombres completos:", concatenarNombres(personasCompletas));

const productos = [
    {producto: "manzana", precio: 1.5},
    {producto: "pera", precio: 2.0}
];
console.log("8. Suma de precios:", sumarPrecios(productos));

const numerosConDuplicados = [1, 2, 2, 3, 3, 4, 5, 5];
console.log("9. Sin duplicados:", eliminarDuplicados(numerosConDuplicados));

const elementos = [
    {nombre: "Zinc", peso: 65},
    {nombre: "Hierro", peso: 55},
    {nombre: "Oro", peso: 195}
];
console.log("10. Ordenados por peso:", ordenarPorPeso(elementos));

