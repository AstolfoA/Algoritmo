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

// 11. Agrupar objetos por propiedad
// Entrada: [{tipo: "fruta", nombre: "manzana"}, {tipo: "verdura", nombre: "zanahoria"}, {tipo: "fruta", nombre: "plátano"}]
// Salida: { fruta: [{tipo: "fruta", nombre: "manzana"}, {tipo: "fruta", nombre: "plátano"}], verdura: [{tipo: "verdura", nombre: "zanahoria"}] }
const agruparPorTipo = (items) => {
    return items.reduce((grupos, item) => {
        const tipo = item.tipo;
        if (!grupos[tipo]) grupos[tipo] = [];
        grupos[tipo].push(item);
        return grupos;
    }, {});
};

// 12. Encontrar intersección de arrays
// Entrada: [1, 2, 3, 4], [3, 4, 5, 6]
// Salida: [3, 4]
const encontrarInterseccion = (arr1, arr2) => {
    return arr1.filter(item => arr2.includes(item));
};

// 13. Transformar array de objetos
// Entrada: [{id: 1, info: {nombre: "Juan"}}, {id: 2, info: {nombre: "Ana"}}]
// Salida: [{id: 1, nombre: "Juan"}, {id: 2, nombre: "Ana"}]
const simplificarObjetos = (objetos) => {
    return objetos.map(obj => ({
        id: obj.id,
        nombre: obj.info.nombre
    }));
};

// 14. Encontrar el segundo valor más grande
// Entrada: [10, 5, 8, 12, 3]
// Salida: 10
const segundoMayor = (numeros) => {
    const ordenados = [...new Set(numeros)].sort((a, b) => b - a);
    return ordenados[1];
};

// 15. Rotar array
// Entrada: [1, 2, 3, 4, 5], posiciones: 2
// Salida: [4, 5, 1, 2, 3]
const rotarArray = (arr, posiciones) => {
    const pos = posiciones % arr.length;
    return [...arr.slice(-pos), ...arr.slice(0, -pos)];
};

// 16. Contar anidaciones de objetos
// Entrada: {a: {b: {c: 1}}}
// Salida: 3
const contarNiveles = (obj) => {
    if (typeof obj !== 'object' || obj === null) return 0;
    return 1 + Math.max(0, ...Object.values(obj).map(contarNiveles));
};

// 17. Fusionar arrays de objetos sin duplicados por ID
// Entrada: [{id: 1, nombre: "Juan"}, {id: 2, nombre: "Ana"}], [{id: 2, nombre: "Ana"}, {id: 3, nombre: "Pedro"}]
// Salida: [{id: 1, nombre: "Juan"}, {id: 2, nombre: "Ana"}, {id: 3, nombre: "Pedro"}]
const fusionarSinDuplicados = (arr1, arr2) => {
    return [...new Map([...arr1, ...arr2].map(item => [item.id, item])).values()];
};

// 18. Crear matriz de diferencias consecutivas
// Entrada: [1, 2, 4, 7, 11]
// Salida: [[1, 2, 3, 4], [1, 2, 3], [1, 2], [1]]
const matrizDiferencias = (arr) => {
    let resultado = [arr];
    while (resultado[0].length > 1) {
        const nuevaFila = [];
        for (let i = 1; i < resultado[0].length; i++) {
            nuevaFila.push(resultado[0][i] - resultado[0][i-1]);
        }
        resultado.unshift(nuevaFila);
    }
    return resultado;
};

// 19. Aplanar array multidimensional
// Entrada: [1, [2, 3], [4, [5, 6]]]
// Salida: [1, 2, 3, 4, 5, 6]
const aplanarArray = (arr) => {
    return arr.reduce((flat, item) => 
        flat.concat(Array.isArray(item) ? aplanarArray(item) : item), []);
};

// 20. Crear histograma de valores
// Entrada: [1, 2, 1, 3, 2, 1], bins: 3
// Salida: { "1": "***", "2": "**", "3": "*" }
const crearHistograma = (arr) => {
    const conteo = arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
    return Object.fromEntries(
        Object.entries(conteo).map(([num, count]) => [num, "*".repeat(count)])
    );
};

// Ejemplos de uso de los nuevos ejercicios:
const alimentos = [
    {tipo: "fruta", nombre: "manzana"},
    {tipo: "verdura", nombre: "zanahoria"},
    {tipo: "fruta", nombre: "plátano"}
];
console.log("11. Agrupados por tipo:", agruparPorTipo(alimentos));

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
console.log("12. Intersección:", encontrarInterseccion(array1, array2));

const objetosComplejos = [
    {id: 1, info: {nombre: "Juan"}},
    {id: 2, info: {nombre: "Ana"}}
];
console.log("13. Objetos simplificados:", simplificarObjetos(objetosComplejos));

const numerosParaSegundo = [10, 5, 8, 12, 3];
console.log("14. Segundo mayor:", segundoMayor(numerosParaSegundo));

const arrayParaRotar = [1, 2, 3, 4, 5];
console.log("15. Array rotado:", rotarArray(arrayParaRotar, 2));

const objetoAnidado = {a: {b: {c: 1}}};
console.log("16. Niveles de anidación:", contarNiveles(objetoAnidado));

const arr1Fusion = [{id: 1, nombre: "Juan"}, {id: 2, nombre: "Ana"}];
const arr2Fusion = [{id: 2, nombre: "Ana"}, {id: 3, nombre: "Pedro"}];
console.log("17. Arrays fusionados:", fusionarSinDuplicados(arr1Fusion, arr2Fusion));

const arraySecuencia = [1, 2, 4, 7, 11];
console.log("18. Matriz de diferencias:", matrizDiferencias(arraySecuencia));

const arrayMultidimensional = [1, [2, 3], [4, [5, 6]]];
console.log("19. Array aplanado:", aplanarArray(arrayMultidimensional));

const datosHistograma = [1, 2, 1, 3, 2, 1];
console.log("20. Histograma:", crearHistograma(datosHistograma));

