const plus = document.querySelectorAll('main section a');

const crear = document.querySelector('crear');
const wrapper = document.querySelector('.wrapper');

function crearElemento(event) {
    console.log('Evento', event.currentTarget);
}

plus.forEach(item => item.addEventListener('click', crearElemento))
