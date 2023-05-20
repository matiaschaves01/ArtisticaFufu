const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll('#formulario input');

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

let contentErrorName = document.getElementById('errorNombre');
let contentErrorCantidad = document.getElementById('errorCantidad');
let contentErrorPrice = document.getElementById('errorPrice');
let contentErrorUsuario = document.getElementById('errorUsuario');
let contentErrorDescription = document.getElementById('errorDescription');
let contentErrorImage = document.getElementById('errorImage');
let contentErrorCategory = document.getElementById('errorCategory');
let contentError = document.getElementById('error');

function mostrarError(error, contentElement) {
    contentElement.innerHTML = `<p class='error'>${error}</p>`;
}


function validarFormulario(evt) {
    let input = evt.target;
    let atributte = input.id;
    let campo;

    if (input.tagName == 'INPUT') {
        if (!input.value.length) {
            input.style.borderBottomColor = 'red';
            input.style.color = 'red';

            if (atributte == "name") {
                campo = "nombre";
                mostrarError("Debe ingresar un valor en el campo " + campo + "!", contentErrorName);
            }
            if (atributte == "description") {
                campo = "description";
                mostrarError("Debe ingresar un valor en el campo " + campo + "!", contentErrorDescription);
            }
            if (atributte == "cantidad") {
                campo = "cantidad";
                mostrarError("Debe ingresar un valor en el campo " + campo + "!", contentErrorCantidad);
            }
            if (atributte == "price") {
                campo = "precio";
                mostrarError("Debe ingresar un valor en el campo " + campo + "!", contentErrorPrice);
            }
            if (atributte == "image") {
                campo = "imagen";
                mostrarError("Debe ingresar un valor en el campo " + campo + "!", contentErrorImage);
            }
            if (atributte == "product_categories_id") {
                campo = "categoria";
                mostrarError("Debe ingresar un valor en el campo " + campo + "!", contentErrorCategory);
            }
            mostrarError("Debe ingresar un valor en el campo " + campo + "!", contentError);
        } else {
            input.style.borderBottomColor = 'green';
            input.style.color = 'green';
        }
    }
}

formulario.addEventListener("submit", (e) => {
    if (formulario.name.value.length < 3) {
        e.preventDefault();
        mostrarError("Debes ingresar un nombre de más de 3 caracteres", contentErrorName);
    }
    if (formulario.description.value.length < 15) {
        e.preventDefault();
        mostrarError("Debes ingresar una descripción de más de 15 caracteres", contentErrorDescription);
    }
    if (formulario.cantidad.value.length == "") {
        e.preventDefault();
        mostrarError("Debes ingresar una cantidad", contentErrorCantidad);
    }
    if (formulario.price.value < 1) {
        e.preventDefault();
        mostrarError("Debes ingresar un precio mayor a 1", contentErrorPrice);
    }
    if (formulario.image.value.length == "") {
        e.preventDefault();
        mostrarError("Debes ingresar una imagen", contentErrorImage);
    }
    if (formulario.product_categories_id.value.length == "") {
        e.preventDefault();
        mostrarError("Debes ingresar una categoría del producto", contentErrorCategory);
    }
});

window.addEventListener('DOMContentLoaded', (e) => {
    const formulario = document.getElementById('form-create');
    const nameId = document.getElementById('name');

    