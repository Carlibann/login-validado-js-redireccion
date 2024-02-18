const input = document.getElementById("password");
const email = document.getElementById("email");
const eye_ver = document.querySelector(".fa-solid");
const mensajeCorreo = document.querySelector(".mensaje_Error_correo");
const mensajeClave= document.querySelector(".mensaje_Error_clave");
const loader=document.querySelector(".loader");
const modal=document.getElementById("myModal");
const send=document.getElementById("send");

eye_ver.addEventListener("click", () => {
   if (input.type === "password") {
      input.type = "text";
      eye_ver.classList.remove("fa-eye");
      eye_ver.classList.add("fa-eye-slash");
   } else {
      input.type = "password";
      eye_ver.classList.remove("fa-eye-slash");
      eye_ver.classList.add("fa-eye");
   }
});


function mensajeError(input,mensaje) {
    input.addEventListener("keyup", () => {
        validarInput(input,mensaje);
    });
    input.addEventListener("blur", () => {
        validarInput(input,mensaje);
    });
    
}
function validarInput(input,mensaje) {
    if (input.type === "email") {
        if (!isValidEmail(input.value)) {
            mostrarError(input,mensaje);
        } else {
            quitarError(input,mensaje);
        }
    } else if (input.type === "password") {
        if (!isValidPassword(input.value)) {
            mostrarError(input,mensaje);
        } else {
            quitarError(input,mensaje);
        }
    }
}

function isValidEmail(email) {
    // Utiliza una expresión regular para validar el formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    // Reglas para la contraseña: al menos una letra mayúscula, el resto en minúscula, al menos un número
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;
    return regex.test(password);
}

function mostrarError(input,mensaje) {
    input.style.border = "2px solid red";
    mensaje.style.display="block";
}

function quitarError(input,mensaje) {
    input.style.border = "2px solid green";
    mensaje.style.display="";
}
send.addEventListener("click", (e) => {
  
    if (input.value === "") {
        mostrarError(input, mensaje);
    } else {
       e.preventDefault();
        redireccionCarga(loader, modal);
    }
});

function redireccionCarga(loader, modal) {
    // loader.style.display = "none"; // Puedes ocultar el loader si es necesario
    modal.style.display = "block";

    // Espera 2 segundos antes de redirigir
    setTimeout(() => {
        modal.style.display = "none";
        window.location.href = "https://google.com";
    }, 2000);
}


mensajeError(email,mensajeCorreo);
mensajeError(input,mensajeClave);
