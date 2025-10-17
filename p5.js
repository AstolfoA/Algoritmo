const products = { 
    
    producto:{ 
        precio: 200,
        categoria: "electronica",
        detalle: {
            marcas:["hp", "lenovo", "asus"],
            otra: [
                {
                    color:["gris", "negro", "blanco"],
                    memoria:{
                        ram:5,
                        almacenamiento: 12
                    }
                }
            ]
        }
        
     }

 };

//  acceder a propiedades de un objeto
// para acceder a un objeto de utiliza (.) el punto y para acceder a un arreglo se utilizan los corchetes ([])
 console.log(products.producto.detalle)
 console.log(products.producto.detalle.marcas[1])
 console.log(products.producto.detalle.otra[0].color[2])

//  cambiar un valor

products.producto.categoria = "zapatos"
console.log(products)

products.producto.precio = 300
console.log(products)

// crear una nueva propiedad
products.name = "astolfo"
console.log(products)



products.producto.detalle.otra.otros = "herramientas"
console.log(products)