const plus = document.querySelectorAll('main section a');

const crear = document.querySelector('.crearTarea');
const wrapper = document.querySelector('.wrapperCrear');
const formCrear = document.querySelector('.wrapperCrear #creaTarea');

function crearElemento(event) {
    console.log('Evento', wrapper);

    // wrapper.style.display = 'block';

}

plus.forEach(item => item.addEventListener('click', crearElemento))
