// Obtener los elementos del formulario
let btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", mostrarDatos);

function mostrarDatos(evt) {
    evt.preventDefault(); // <- Asegúrate de que esté al inicio

    let textNombre = document.getElementById("nombre").value;
    let textApellido = document.getElementById("apellido").value;
    let textEdad = parseInt(document.getElementById("edad").value);

    let mensaje = `¡Gracias por registrarte, ${textNombre} ${textApellido}! `;
    let mensajeEdad = `No puedes regitrarte, eres menor de edad. `;

    if (textEdad >= 18) {
        mensaje;
        document.getElementById("mensaje").innerText = mensaje;
    } else {
        mensajeEdad;
        document.getElementById("mensaje").innerText = mensajeEdad;
    }

}

