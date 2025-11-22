//  🔹 Ejercicio 5: Convertidor de Monedas con Billetes
// Algoritmo Greedy
// Crear una función que dado un monto, devuelva la cantidad mínima de billetes
// Billetes disponibles: 100, 50, 20, 10, 5, 1
// Ejemplo: 287 → {100: 2, 50: 1, 20: 1, 10: 1, 5: 1, 1: 2}

// ?(Algoritmo Greedy)
// La idea es usar un enfoque codicioso (greedy): siempre tomar el billete de mayor valor posible primero.
// Pasos lógicos:
// 1. Crear un arreglo con las denominaciones ordenadas de mayor a menor: [100, 50, 20, 10, 5, 1]
// 2. Crear un objeto vacío para almacenar los resultados (cantidad de cada billete)
// 3. Iterar sobre cada denominación:

// preguntas
// Calcular cuántos billetes de esa denominación caben en el monto restante
// Si caben al menos 1, guardar esa cantidad en el objeto resultado
// Restar del monto el valor que ya "gastaste" en esos billetes

// 4. Repetir hasta procesar todas las denominaciones
// Operaciones clave:

// División entera (Math.floor() o operador ~~): para saber cuántos billetes caben

// Ejemplo: 287 / 100 = 2.87 → 2 billetes de 100


// Módulo (%): para obtener el resto después de usar los billetes

// Ejemplo: 287 % 100 = 87 (lo que queda por descomponer)


// Flujo mental con el ejemplo 287:

// 287 ÷ 100 = 2 billetes → quedan 87
// 87 ÷ 50 = 1 billete → quedan 37
// 37 ÷ 20 = 1 billete → quedan 17
// 17 ÷ 10 = 1 billete → quedan 7
// 7 ÷ 5 = 1 billete → quedan 2
// 2 ÷ 1 = 2 billetes → quedan 0 ✓