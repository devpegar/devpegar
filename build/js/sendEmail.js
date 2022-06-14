// Variables botones del formulario
const btnEnviar = document.querySelector("#submit");
const btnResetear = document.querySelector("#reset");
const formulario = document.querySelector(".form");
const er =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Variables campos del formulario
const nombre = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");

eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", startApp);

  // Validar campos del formulario
  nombre.addEventListener("blur", validarFormulario);
  email.addEventListener("blur", validarFormulario);
  subject.addEventListener("blur", validarFormulario);
  message.addEventListener("blur", validarFormulario);
}

// Funciones
function startApp() {
  btnEnviar.disabled = true;
  btnEnviar.classList.add("cursor-not-allowed", "opacity-50");
}

function validarFormulario(e) {
  if (e.target.value.length > 0) {
    e.target.classList.remove("error");
    e.target.classList.add("success");
  } else {
    e.target.classList.remove("success");
    e.target.classList.add("error");

    mostrarError("Todos los campos son obligatorios");
  }

  if (e.target.type === "email") {
    if (er.test(e.target.value)) {
      e.target.classList.remove("error");
      e.target.classList.add("success");
    } else {
      e.target.classList.remove("success");
      e.target.classList.add("error");

      mostrarError("Email no valido");
    }
  }

  if (
    nombre.value !== "" &&
    er.test(email.value) &&
    subject.value !== "" &&
    message.value !== ""
  ) {
    btnEnviar.disabled = false;
    btnEnviar.classList.remove("cursor-not-allowed", "opacity-50");
  }
}

function mostrarError(mensaje) {
  Swal.fire({
    title: "Error!",
    text: mensaje,
    icon: "error",
    timer: 3000,
    timerProgressBar: true,
    showConfirmButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
  });
}
