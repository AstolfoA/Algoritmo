// Proyecto 1: Lista de Tareas
// Métodos utilizados: push, filter, map, forEach

const listaTareas = [];

// Función para añadir tarea
const agregarTarea = (tarea) => {
    listaTareas.push({
        id: listaTareas.length + 1,
        tarea: tarea,
        completada: false,
        fecha: new Date()
    });
};

// Función para marcar tarea como completada
const completarTarea = (id) => {
    const tarea = listaTareas.find(tarea => tarea.id === id);
    if (tarea) {
        tarea.completada = true;
    }
};

// Función para listar tareas
const listarTareas = () => {
    console.log('Lista de Tareas:');
    listaTareas.forEach(tarea => {
        console.log(`[${tarea.completada ? 'X' : ' '}] ${tarea.id}. ${tarea.tarea}`);
    });
};

// Función para filtrar tareas completadas
const tareasCompletadas = () => {
    return listaTareas.filter(tarea => tarea.completada);
};

// Función para filtrar tareas pendientes
const tareasPendientes = () => {
    return listaTareas.filter(tarea => !tarea.completada);
};

// Ejemplo de uso
agregarTarea('Estudiar JavaScript');
agregarTarea('Practicar métodos de array');
agregarTarea('Hacer ejercicios');
completarTarea(1);
listarTareas();
console.log('\nTareas completadas:', tareasCompletadas().length);
console.log('Tareas pendientes:', tareasPendientes().length);