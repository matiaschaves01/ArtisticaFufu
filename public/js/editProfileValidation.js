const formulario = document.getElementById("formulario")
const inputs = document.querySelectorAll('#formulario input');

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})

let contentError = document.getElementById('error');
let contentErrorName = document.getElementById('errorNombre');
let contentErrorApellido = document.getElementById('errorApellido');
let contentErrorTelefono = document.getElementById('errorTelefono');
let contentErrorMail = document.getElementById('errorMail');
let contentErrorImagen = document.getElementById('errorImagen');

function mostrarError(error) {
    contentError.innerHTML = `<p class='error'>${error}</p>`
}
function mostrarErrorNombre(error) {
    contentErrorName.innerHTML = `<p class='errorNombre'>${error}</p>`
}
function mostrarErrorApellido(error) {
    contentErrorApellido.innerHTML = `<p class='errorApellido'>${error}</p>`
}
function mostrarErrorMail(error) {
    contentErrorMail.innerHTML = `<p class='errorMail'>${error}</p>`
}
function mostrarErrorUsuario(error) {
    contentErrorUsuario.innerHTML = `<p class='errorUsuario'>${error}</p>`
}
function mostrarErrorTelefono(error) {
    contentErrorTelefono.innerHTML = `<p class='errorTelefono'>${error}</p>`
}
function mostrarErrorImagen(error) {
    contentErrorImagen.innerHTML = `<p class='errorImagen'>${error}</p>`
}

// Validar el CADA ERROR EN EL EVENTO BLUR
function validarFormulario(evt) {
    let input = evt.target    
    let atributte =  input.id   
    let campo 
    if (input.tagName == 'INPUT') {
        
        if (!input.value.length) {
            input.style.borderBottomColor = 'red';
            input.style.color = 'red'; 

            if (atributte == "nombre") {
                campo = "nombre"             
            }
            if (atributte == "apellido") {
                campo = "apellido"             
            }
            if (atributte == "nombreUsuario") {
                campo = "nombre usuario"             
            }
            if (atributte == "numeroTelefono") {
                campo = "numero de telefono"             
            }
            if (atributte == "emailRegistro"){
                campo = "email"             
            }

            mostrarError("Debe ingresar un valor en el campo " + campo + "!")            
            
        } else {
            input.style.borderBottomColor = 'green';
            input.style.color = 'green';
        }
    }
}

formulario.addEventListener("submit", (e)=>{
    if (formulario.nombre.value.length < 3) {
        e.preventDefault();
        mostrarErrorNombre("Debes ingresar un nombre de más de tres caracteres")
    }
    if (formulario.apellido.value.length < 3) {
        e.preventDefault();
        mostrarErrorApellido("Debes ingresar un apellido de más de tres caracteres")
    }
    if (formulario.numeroTelefono.value.length < 10) {
        e.preventDefault();
        mostrarErrorTelefono("Debes ingresar un número de teléfono válido")
    }
    if (formulario.emailRegistro.value.length < 5) {
        e.preventDefault();
        mostrarErrorMail("Debes ingresar un email válido")
    }
    if (formulario.imagen == "") {
        e.preventDefault();
        mostrarErrorImagen("Debes ingresar una imagen")
    }
})

    if (inputEmpty.includes(true)) {
        e.preventDefault()
    }
