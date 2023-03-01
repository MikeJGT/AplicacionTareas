function filtrarTareas(nombreTarea, pDom) {
    console.log('evento selector', nombreTarea)
    let filtradas = tareas.filter(tarea => tarea.prioridad === nombreTarea);
    pintarTareas(filtradas, pDom);
    if (nombreTarea === "") {
        pintarTareas(tareas, pDom);
    }
}

function buscarTarea(introducido, listaTareas) {
    let resultado = listaTareas.filter(tarea => tarea.titulo.includes(introducido));
    return resultado;
}

function borrar(id) {
    tareas.splice(id - 1, 1);
}