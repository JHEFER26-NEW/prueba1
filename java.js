const boton = document.getElementById("botonMensaje");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
    mensaje.textContent = "Redirigiendo...";
    setTimeout(function () {
        window.location.href = "https://jhefer26-new.github.io/mi-web/";
    }, 500);
});
