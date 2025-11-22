// exercices 1
// Un teatro tiene filas de asientos. La primera fila tiene 20 asientos, la segunda 23, la tercera 26, y así sucesivamente. ¿Cuántos asientos tiene la fila 15?
// analisis
// tomar fila inicial
// Progresión: 20, 23, 26, 29... (diferencia comun = 3)
// buscar por n cantidad filas  = 20 + (15-1) × 3
// --------------------> FilaInicial  - (filas - 1) * subidaPorFila

// datos:
// fila inicial : 20
// diferencia : 3
// posicion fila: 15
// entrada : fila 15
// salida : 62

const seatQantity = (row) => {
    return 20 + ( row - 1 ) * 3

}

console.log(seatQantity(15))