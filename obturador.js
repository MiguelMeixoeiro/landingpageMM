// JavaScript para mostrar el formulario al hacer clic en el obturador
document.addEventListener('DOMContentLoaded', function () {
    const obturador = document.querySelector('.obturador');
    const formulario = document.querySelector('.formulario');

    obturador.addEventListener('click', function () {
        obturador.classList.add('red'); // Agregar la clase 'red' para cambiar el color a rojo
        formulario.style.display = 'block'; // Mostrar el formulario
    });
});
