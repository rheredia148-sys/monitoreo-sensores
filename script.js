function iniciarSesion() {
    let usuarioCorrecto = "ricardo";
    let contrasenaCorrecta = "1234";

    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;

    if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
        document.getElementById("login").style.display = "none";
        document.getElementById("interfaz").style.display = "block";
    } else {
        document.getElementById("mensajeError").textContent = "Usuario o contraseña incorrectos";
    }
}

function actualizarSensores() {
    let humedad = parseInt(document.getElementById("humedad").value);
    let temperatura = parseInt(document.getElementById("temperatura").value);

    document.getElementById("valorHumedad").textContent = humedad;
    document.getElementById("valorTemperatura").textContent = temperatura;

    let ledHumedad = document.getElementById("ledHumedad");
    let ledTemperatura = document.getElementById("ledTemperatura");

    if (humedad <= 8) {
        ledHumedad.style.backgroundColor = "red";
    } else if (humedad <= 12) {
        ledHumedad.style.backgroundColor = "yellow";
    } else {
        ledHumedad.style.backgroundColor = "green";
    }

    if (temperatura < 15) {
        ledTemperatura.style.backgroundColor = "blue";
    } else if (temperatura <= 30) {
        ledTemperatura.style.backgroundColor = "green";
    } else {
        ledTemperatura.style.backgroundColor = "red";
    }
}
