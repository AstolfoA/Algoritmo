// exercices 2 gusanito 
// Un gusano está en el fondo de un pozo de 10 metros de profundidad.
// Cada día sube 3 metros, pero durante la noche resbala 2 metros.
// ¿Cuántos días necesita para salir del pozo?
// 💡 Datos

// Profundidad del pozo H = 10

// Subida diaria A = 3

// Resbalón nocturno B = 2

// dia 1 => sube 3 metros - baja 2 metros = 1 metro recorrido
// dia 2 => metro recorrido 1 - sube 3 metros - baja 2 metros = 2 metros recorridos
// dia 3 => 2 metroas recorridos - sube 3 metros - baja 2 metros = 3 metos recorridos
// dia 4 => 3 metros recorridos - sube 3 metros - 

// necesito un bucle que me identifique si ya llego a los 8 metros
// si no llego a los 8 metros cuenta un dia
// teniendo en cuenta que durante el dia sube y acumula lo el recorrido que ya trae
// pregunta si ya llegaste
// si no llegaste baja 2 metros y continua el bulce hasta llegar.

const gusanitoPozo = (height, up, down) => {
    let days = 0
    let position = 0 
    while (position < height) {
        days++
        position += up  
        if (position >= height) {
            break
        }
        position -= down
    }
    return days
}

console.log(gusanitoPozo(10, 3, 2))

// resultado esperado 8 dias