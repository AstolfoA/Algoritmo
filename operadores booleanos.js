const encendido = false;
console.log(encendido);
console.log(!encendido);
console.log(!!encendido);

// operadores de identidad o igualdad

console.log(encendido === true);
console.log(5 === 5); 
console.log(5 == "5");
console.log(5 === "5"); //coercion prioriza el tipo de dato y no el valor

// operadores de comparacion
console.log( 5 > 3);
console.log( 5 < 3 );
console.log( 3 >= 3 );
console.log( 2 <= 1);

//  opercadores logicos
// porperador and que se identifica con los dos (&)
console.log( true && true);
console.log( true && false);
console.log( false && false);
console.log( false && true);

// operador OR
console.log( true || true);
console.log( true || false);
console.log( false || false);
console.log( false || true);

// Vamos a crear una función que verifique si una persona puede entrar a un juego, necesita ser mayor de 18 y tener boleto:


const puedeEntrar = (edad, tieneboleto) => {
    if( edad >= 18 && tieneboleto ){
        return "puede entrar al juego"
    } else {
        return "no puede entrar al juego"
    }
}
console.log(puedeEntrar(20, true));  // ✅ Puedes entrar al juego
console.log(puedeEntrar(16, true));  // ⚠️ No puedes entrar al juego
console.log(puedeEntrar(22, false)); // ⚠️ No puedes entrar al juego
console.log(puedeEntrar(18, false));  // ⚠️ No puedes entrar al juego


// Condición: Puede entrar si es usuario registrado AND tiene contraseña correcta.
// salida 


const accesoApp = (usuario, contraseña) => {
    if ( usuario && contraseña) {
        return "acceso consedido"
    } else {
        return "acceso denegado"
    }
}
console.log(accesoApp(true, true));
console.log(accesoApp(true, false));
console.log(accesoApp(false, true));

// Descuento en tienda

// Condición: Puede obtener descuento si es cliente VIP OR tiene cupon válido.
  // ✅ Tienes descuento
  // ✅ Tienes descuento
; // ⚠️ No tienes descuento

const descuento = ( vip, tieneCupon) => {
    // if ( vip || tieneCupon ){
    //     return "tiene descuento"
    // } else {
    //     return "no tiene descuento"
    // }
    return vip || tieneCupon ? "tiene decuento" : "no tiene descuento"

}
console.log(descuento(true, false));
console.log(descuento(false, true));
console.log(descuento(false, false));

// Condición: Puede conducir si tiene licencia válida AND es mayor de 18 años.
// // ✅ Puedes conducir

const licenciaConducir = (licencia, edad) => {
    return licencia && edad >= 18 ? "puedes conducir" : "nopuedes conducir"
}
console.log(licenciaConducir(true, 18));
console.log(licenciaConducir(true, 16));
console.log(licenciaConducir(false, 25));




