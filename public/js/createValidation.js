
window.addEventListener('DOMContentLoaded',(e) =>{
    
    const formulario = document.getElementById('form-create');
    const nameId = document.getElementById ('name');
    const descriptionId = document.getElementById('description');
    const priceId = document.getElementById('price');
    const botonCreate = document.getElementById('botonCreate')
    

formulario.addEventListener("submit", (e)=>{
    const inputArray = [formulario.name,formulario.description,formulario.price]
    const inputEmpty = isEmpty(inputArray)
    
    if (inputEmpty.includes(true)) {
       e.preventDefault()
    }
    })
});


    