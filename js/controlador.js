function filtrarTareas(nombreTarea, listaTareas, pDom) {
    console.log('evento selector', nombreTarea)
    let filtradas = listaTareas.filter(tarea => tarea.prioridad === nombreTarea);
    pintarTareas(filtradas, pDom);
    if (nombreTarea === "") {
        pintarTareas(listaTareas, pDom);
    }
}

function buscarTarea(introducido, listaTareas) {
    let resultado = listaTareas.filter(tarea => tarea.titulo.toLowerCase().includes(introducido.toLowerCase()));
    return resultado;
}

function borrar(id, array) {
    array.splice(id - 1, 1);
}

function initLocalStorage(listaTareas) {
    if (localStorage.getItem('Tareas') === null) {
        localStorage.setItem('Tareas', JSON.stringify(listaTareas));
    }
}

function addToLocalStorage(unaTarea) {
    let lista = localStorage.getItem('Tareas');
    lista = JSON.parse(lista);
    lista.push(unaTarea);
    localStorage.setItem('Tareas', JSON.stringify(lista));
}

function deleteOneLocalStorage(idTarea) {
    let lista = localStorage.getItem('Tareas');
    lista = JSON.parse(lista);
    borrar(idTarea, lista);
    localStorage.setItem('Tareas', JSON.stringify(lista));
}

function getLoclaStorage() {
    return JSON.parse(localStorage.getItem('Tareas'));
}

function setListaLocalStorage(listaTareas) {
    localStorage.clear();
    localStorage.setItem('Tareas', JSON.stringify(listaTareas));
}

function init() {
    let lista = getLoclaStorage();
    initLocalStorage(lista);
    pintarTareas(lista, tareaSection)
}