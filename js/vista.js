const plus = document.querySelector('#plus1');
const crear = document.querySelector('.crearTarea');
const wrapper = document.querySelector('.wrapperCrear');
const form = document.querySelector('#creaTarea');
const tareaSection = document.querySelector('#toDo2');


const salir = document.querySelector('.crearTarea .salir');

function crearElemento() {

    wrapper.style.display = 'flex';
    wrapper.style.justifyContent = 'center';
    wrapper.style.alignItems = 'center';

    salir.addEventListener('click', () => {

        wrapper.style.display = 'none';
        
    });
}

function guardando(event) {

    event.preventDefault();

    let sel = form.regPrioridad.value;
    let inp = form.nombreTarea.value;
    let data = {
        id: idGlobal,
        titulo: inp,
        prioridad: sel
    }
    //tareas.push(data);
    if (sel === "" || inp === "") {
        guardando(event);
    }
    addToLocalStorage(data);
    idGlobal++;
    wrapper.style.display = 'none';
    //console.log('Input Text', sel, inp);

    pintarUnaTarea(data, tareaSection);
}

const guardar = document.querySelector('#guardar');
guardar.addEventListener('click', guardando);


function pintarUnaTarea(tarea, pDom) {
    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    const a = document.createElement('a');

    article.className = "tarea";
    h3.textContent = tarea.titulo;
    a.dataset.id = tarea.id;
    a.href = '#';
    a.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;

    a.addEventListener('click', (event) => {
        console.log('Evento borrar', event.target.parentNode.dataset.id);
        event.currentTarget.parentNode.style.display = 'none';
        let lista = getLoclaStorage();
        //console.log('Lista antes de borrar', lista);
        //console.log('Id a borrar', event.target.parentNode.dataset.id)
        borrar(event.target.parentNode.dataset.id, lista);
        setListaLocalStorage(lista);
    })
    article.appendChild(h3);
    article.appendChild(a);
    pDom.appendChild(article);
}

function pintarTareas(listaTareas, pDom) {
    tareaSection.innerHTML = "";

    listaTareas.forEach(tarea => {
        pintarUnaTarea(tarea, pDom);
    });
    if (listaTareas.length === 0) {
        tareaSection.innerHTML = `<h2 dataset-alert="1">No hay tareas</h2>`;
    }
}


function filtrando(event) {
    let listaTareas = getLoclaStorage();
    filtrarTareas(event.target.value, listaTareas, tareaSection);
}
const filtrar = document.querySelector('#buscPrioridad');
filtrar.addEventListener('change', filtrando);

plus.addEventListener('click', crearElemento);



const inputBuscar = document.querySelector('#buscar');
inputBuscar.addEventListener('keyup', (event) => {
    //console.log(event.target.value)
    let lista = getLoclaStorage();
    let resul = buscarTarea(event.target.value, lista);

    pintarTareas(resul, tareaSection)
})

init();
