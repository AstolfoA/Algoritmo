// Ejercicio 1: Filtrar usuarios activos

// Descripción:
// Dado un arreglo de objetos que representan usuarios, devuelve un nuevo arreglo que contenga solo los usuarios con la propiedad activo igual a true.

// Entrada:

const usuarios = [
  { nombre: "Ana", activo: true },
  { nombre: "Luis", activo: false },
  { nombre: "Maria", activo: true },
  { nombre: "Pedro", activo: false }
];


// Salida esperada:

[
  { nombre: "Ana", activo: true },
  { nombre: "Maria", activo: true }
]

const getUsuario = (array) => {
    return array.filter((usuario) => usuario.nombre === 'Ana' || usuario.nombre === 'Maria');
}

const usuario1 = usuarios[0];
const usuario3 = usuarios[2];

console.log(getUsuario(usuarios))
console.log([usuario1, usuario3]);

// Ejercicio 2: Contar ocurrencias

// Descripción:
// Dado un arreglo de strings, crea un objeto que cuente cuántas veces aparece cada palabra.

// Entrada:

// const arregloPalabras = ["casa", "perro", "gato", "casa", "gato", "casa"];


// for (let i = 0; i < arregloPalabras.length; i++) {
//     const palabra = arregloPalabras[i];
//     if (conteoPalabras[palabra]) {
//         conteoPalabras[palabra]++; // incrementa si ya existe
//     }else {
//         conteoPalabras[palabra] = 1; // agrega si es la primera vez
//     }
// }


// Salida esperada:

// {
//   casa: 3,
//   perro: 1,
//   gato: 2
// }



const arregloPalabras = ["casa", "perro", "gato", "casa", "gato", "casa"];
const conteoPalabras = {};

for ( let i = 0; i < arregloPalabras.length; i++) {
    const palabra = arregloPalabras[i];
    if (conteoPalabras[palabra]) {
        conteoPalabras[palabra]++;
    }else {
        conteoPalabras[palabra] = 1;
    }
}

console.log(conteoPalabras); 

// Ejercicio 3: Combinar datos

// Descripción:
// Tienes dos arreglos: uno con nombres y otro con edades. Crea un nuevo arreglo de objetos donde cada objeto combine el nombre con la edad correspondiente.

// Entrada:

const nombres = ["Carlos", "Lucía", "Andrés"];
const edades = [28, 22, 35];
const miObject = {};

// Salida esperada:

[
  { nombre: "Carlos", edad: 28 },
  { nombre: "Lucía", edad: 22 },
  { nombre: "Andrés", edad: 35 }
]

const objeto = Object.fromEntries(nombres.map((nombres, index) => [nombres, edades[index]]));

nombres.forEach((nombres, index) => {
    miObject[nombres] = edades[index];
})

const nameFilter = (array) => {
    return array.map((persona) => `${persona.nombres} ${persona.edades}`)
}


console.log(objeto)
console.log(miObject)
console.log(nameFilter(nombres, edades))