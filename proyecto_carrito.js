// Proyecto 2: Carrito de Compras
// Métodos utilizados: reduce, map, filter, find

const carrito = [];

// Función para añadir producto al carrito
const agregarProducto = (nombre, precio, cantidad = 1) => {
    const productoExistente = carrito.find(p => p.nombre === nombre);
    
    if (productoExistente) {
        productoExistente.cantidad += cantidad;
    } else {
        carrito.push({
            nombre,
            precio,
            cantidad
        });
    }
};

// Función para calcular total del carrito
const calcularTotal = () => {
    return carrito.reduce((total, producto) => {
        return total + (producto.precio * producto.cantidad);
    }, 0);
};

// Función para mostrar el carrito
const mostrarCarrito = () => {
    console.log('Contenido del carrito:');
    carrito.forEach(producto => {
        console.log(`${producto.nombre} - Cantidad: ${producto.cantidad} - Subtotal: $${producto.precio * producto.cantidad}`);
    });
    console.log(`Total: $${calcularTotal()}`);
};

// Función para eliminar producto
const eliminarProducto = (nombre) => {
    const index = carrito.findIndex(p => p.nombre === nombre);
    if (index !== -1) {
        carrito.splice(index, 1);
    }
};

// Ejemplo de uso
agregarProducto('Laptop', 1000);
agregarProducto('Mouse', 20, 2);
agregarProducto('Laptop', 1000); // Aumentará la cantidad del producto existente
mostrarCarrito();
eliminarProducto('Mouse');
console.log('\nDespués de eliminar el mouse:');
mostrarCarrito();