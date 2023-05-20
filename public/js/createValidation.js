const formulario = document.getElementById('form-create');

const inputs = document.querySelectorAll('#formulario input');

inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});

let contentErrorName = document.getElementById('errorNombre');
let contentErrorDescription = document.getElementById('errorDescription');
let contentErrorCantidad = document.getElementById('errorCantidad');
let contentErrorPrice = document.getElementById('errorPrice');
let contentErrorImage = document.getElementById('errorImage');
let contentErrorCategory = document.getElementById('errorCategory');

function mostrarErrorNombre(error) {
  if (contentErrorName !== null) {
    contentErrorName.innerHTML = `<p class='errorNombre'>${error}</p>`;
  }
}

function mostrarErrorDescription(error) {
  if (contentErrorDescription !== null) {
    contentErrorDescription.innerHTML = `<p class='errorDescription'>${error}</p>`;
  }
}

function mostrarErrorCantidad(error) {
  if (contentErrorCantidad !== null) {
    contentErrorCantidad.innerHTML = `<p class='errorCantidad'>${error}</p>`;
  }
}

function mostrarErrorPrice(error) {
  if (contentErrorPrice !== null) {
    contentErrorPrice.innerHTML = `<p class='errorPrice'>${error}</p>`;
  }
}

function mostrarErrorImage(error) {
  if (contentErrorImage !== null) {
    contentErrorImage.innerHTML = `<p class='errorImage'>${error}</p>`;
  }
}

function mostrarErrorCategory(error) {
  if (contentErrorCategory !== null) {
    contentErrorCategory.innerHTML = `<p class='errorCategory'>${error}</p>`;
  }
}

function validarFormulario(evt) {
  let input = evt.target;
  let attribute = input.id;
  let campo;

  if (input.tagName === 'INPUT') {
    if (!input.value.length) {
      input.classList.add('error-input');
      if (attribute === "name") {
        campo = "nombre";
        mostrarErrorNombre("Debe ingresar un valor en el campo " + campo + "!");
      }
      if (attribute === "description") {
        campo = "description";
        mostrarErrorDescription("Debe ingresar un valor en el campo " + campo + "!");
      }
      // Add conditions for other attributes if needed
    } else {
      input.classList.remove('error-input');
    }
  }
}

formulario.addEventListener("submit", (e) => {
  if (formulario.name && formulario.name.value && formulario.name.value.length < 3) {
    e.preventDefault();
    if (formulario.name.classList) {
      formulario.name.classList.add('error-input');
    }
    mostrarErrorNombre("Debes ingresar un nombre de más de 3 caracteres");
  } else if (formulario.name && formulario.name.classList) {
    formulario.name.classList.remove('error-input');
  }
  if (formulario.description && formulario.description.value && formulario.description.value.length < 15) {
    e.preventDefault();
    if (formulario.description.classList) {
      formulario.description.classList.add('error-input');
    }
    mostrarErrorDescription("Debes ingresar una descripción de más de 15 caracteres");
  } else if (formulario.description && formulario.description.classList) {
    formulario.description.classList.remove('error-input');
  }
  if (formulario.cantidad && formulario.cantidad.value === "") {
    e.preventDefault();
    if (formulario.cantidad.classList) {
      formulario.cantidad.classList.add('error-input');
    }
    mostrarErrorCantidad("Debes ingresar una cantidad");
  } else if (formulario.cantidad && formulario.cantidad.classList) {
    formulario.cantidad.classList.remove('error-input');
  }
  if (formulario.price && formulario.price.value && formulario.price.value < 1) {
    e.preventDefault();
    if (formulario.price.classList) {
      formulario.price.classList.add('error-input');
    }
    mostrarErrorPrice("Debes ingresar un precio mayor a 1");
  } else if (formulario.price && formulario.price.classList) {
    formulario.price.classList.remove('error-input');
  }
  if (formulario.image && formulario.image.value === "") {
    e.preventDefault();
    if (formulario.image.classList) {
      formulario.image.classList.add('error-input');
    }
    mostrarErrorImage("Debes ingresar una imagen");
  } else if (formulario.image && formulario.image.classList) {
    formulario.image.classList.remove('error-input');
  }
  if (formulario.product_categories_id && formulario.product_categories_id.value === "") {
    e.preventDefault();
    if (formulario.product_categories_id.classList) {
      formulario.product_categories_id.classList.add('error-input');
    }
    mostrarErrorCategory("Debes ingresar una categoría del producto");
  } else if (formulario.product_categories_id && formulario.product_categories_id.classList) {
    formulario.product_categories_id.classList.remove('error-input');
  }
});
