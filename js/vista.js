const plus = document.querySelectorAll('#plus');

const crear = document.querySelector('.crearTarea');
const wrapper = document.querySelector('.wrapperCrear');
const formCrear = document.querySelector('.wrapperCrear #creaTarea');

const guardar = document.querySelector('#guardar');
const salir = document.querySelector('.crearTarea .salir');

function crearElemento(event) {
    //console.log('Evento', wrapper);
    wrapper.style.display = 'block';
    //guardar.addEventListener('click', guardarDatos);
    salir.addEventListener('click', (event) => {
        //console.log(event.target)
        wrapper.style.display = 'none';
    });
}

plus.forEach(item => item.addEventListener('click', crearElemento))
