const formulario = document.getElementById("formulario")

const inputs = document.querySelectorAll('#formulario input');

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})

// Ejecuta el evento BLUR x el que se muestran los errores

let contentError = document.getElementById('error');

function mostrarError(error) {
    contentError.innerHTML = `<p class='error'>${error}</p>`
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
            if (atributte == "emailRegistro") {
                campo = "email"             
            }
            if (atributte == "numeroTelefono") {
                campo = "numero de telefono"             
            }
            if (atributte == "nombreUsuario") {
                campo = "nombre usuario"             
            }
            if (atributte == "checkPassword") {
                campo = "confirme contraseña"             
            }
            if (atributte == "passwordRegistro") {
                campo = "contraseña"             
            }
            mostrarError("Debe ingresar un valor en el campo " + campo + "!")            
            
        } else {
            input.style.borderBottomColor = 'green';
            input.style.color = 'green';
        }
    }
}


// function validarFormulario(evt) {
//     const input = evt.target;

//     if (input.tagName === 'INPUT') {
//         const atributte = input.id;
//         const campo = obtenerCampo(atributte);

//         if (!input.value.length) {
//             aplicarEstilos(input, 'red');
//             mostrarError(`Debe ingresar un valor en el campo ${campo}!`);
//         } else {
//             aplicarEstilos(input, 'green');
//         }
//     }
// }

// function obtenerCampo(atributte) {
//     const campos = {
//         nombre: 'nombre',
//         apellido: 'apellido',
//         emailRegistro: 'email',
//         numeroTelefono: 'numero de telefono',
//         nombreUsuario: 'nombre usuario',
//         checkPassword: 'confirme contraseña',
//         passwordRegistro: 'contraseña'
//     };

//     return campos[atributte] || 'campo';
// }

// function aplicarEstilos(input, color) {
//     input.style.borderBottomColor = 'green';
//     input.style.color = 'green';
// }


//validacion de password

formulario.addEventListener("keyup", ()=>{
    let password = document.querySelector("#passwordRegistro")
    let checkPassword = document.querySelector("#checkPassword")
    if (password.value == checkPassword.value) {
    
    }
    else{
      
    }
    
})

formulario.addEventListener("submit", (e)=>{
     const inputArray = [formulario.nombre,formulario.apellido,formulario.numeroTelefono,formulario.nombreUsuario,formulario.passwordRegistro,formulario.emailRegistro]
    
    const inputEmpty = isEmpty(inputArray)

    if (inputEmpty.includes(true)) {
        e.preventDefault()
    }
})


