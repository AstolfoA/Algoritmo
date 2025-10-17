// Ejercicio 3: Acceder y modificar propiedades de un objeto anidado
const persona = {
    nombre: "Luis",
    edad: 35,   
    direccion: {
        calle: "Main St",
        numero: 123
    }
};

// Acceder a la propiedad "nombre"
console.log(persona.nombre);

// Modificar la propiedad "edad"
persona.edad = 36;

// Acceder a la propiedad "calle" dentro de "direccion"
console.log(persona.direccion.calle);

// Modificar la propiedad "numero" dentro de "direccion"
persona.direccion.numero = 456;

console.log(persona);


