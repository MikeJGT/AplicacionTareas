const plus = document.querySelector('#plus1');
const crear = document.querySelector('.crearTarea');
const wrapper = document.querySelector('.wrapperCrear');
const form = document.querySelector('#creaTarea');
const tareaSection = document.querySelector('#toDo2');


const salir = document.querySelector('.crearTarea .salir');

function crearElemento() {
    //console.log('Evento', wrapper);
    wrapper.style.display = 'block';
    //guardar.addEventListener('click', guardarDatos);
    salir.addEventListener('click', () => {
        //console.log(event.target)
        wrapper.style.display = 'none';
    });
}



const guardar = document.querySelector('#guardar');
guardar.addEventListener('click', (event) => {

    event.preventDefault();

    let sel = form.regPrioridad.value;
    let inp = form.nombreTarea.value;
    let data = {
        id: idGlobal,
        titulo: inp,
        prioridad: sel
    }
    tareas.push(data);
    idGlobal++;
    wrapper.style.display = 'none';
    //console.log('Input Text', sel, inp);

    pintarUnaTarea(data, tareaSection);
})

// <article class="tarea">
// <h3>Nombre de la tarea</h3>
// <a href="">
//     <i class="fa-regular fa-trash-can"></i>
// </a>
// </article>
// let borrarId = 1;
function pintarUnaTarea(tarea, pDom) {
    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    const a = document.createElement('a');

    article.className = "tarea";
    h3.textContent = tarea.titulo;
    a.dataset.id = tarea.id;
    a.href = '#';
    a.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
    // borrarId++;
    a.addEventListener('click', (event) => {
        console.log('Evento borrar', event.target.parentNode.dataset.id);
        event.currentTarget.parentNode.style.display = 'none';
        borrar(event.target.parentNode.dataset.id);
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
    filtrarTareas(event.target.value, tareaSection);
}
const filtrar = document.querySelector('#buscPrioridad');
filtrar.addEventListener('change', filtrando);

plus.addEventListener('click', crearElemento);



const inputBuscar = document.querySelector('#buscar');
inputBuscar.addEventListener('keyup', (event) => {
    console.log(event.target.value)
    let resul = buscarTarea(event.target.value, tareas);

    pintarTareas(resul, tareaSection)
})
