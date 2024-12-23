
/*animador texto section about*/
const div = document.querySelector(".script__Texto"),
    about__script__Texto = "{ Ingeniero de Software }";

function efectoTextTyping(elemento, texto, i = 0) {
    elemento.textContent += texto[i];

    if (i === about__script__Texto.length - 1) return;

    setTimeout(() => efectoTextTyping(div, about__script__Texto, i + 1), 120);

}
efectoTextTyping(div, about__script__Texto);


/*Alert_Formulario
document.getElementById('enviarFormulario').onclick = function () {
    Swal.fire({
        position: "bottom-start",
        icon: "success",
        title: "Mensaje enviado",
        text: "¡Guardado exitosamente!",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        backdrop: true,
        toast: true
    })
}
*/

// Escuchar el evento 'submit' del formulario
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado (recargar la página)

    // Mostrar la alerta de SweetAlert
    Swal.fire({
        position: "bottom",
        icon: "success",
        title: "Mensaje enviado",
        text: "¡Tu mensaje ha sido enviado con éxito!",
        showConfirmButton: false,
        timer: 2800,
        timerProgressBar: true,
        backdrop: true,
        toast: true
    });

    // Enviar el formulario después de mostrar la alerta
    setTimeout(() => {
        this.submit(); // Reanuda el envío del formulario después de la alerta
    }, 2600); // Ajustar el tiempo para que coincida con el temporizador de la alerta
});
