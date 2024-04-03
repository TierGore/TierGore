let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let seleccionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    seleccionSeleccionarAtaque.style.display = ("none")
    let seleccionReiniciar = document.getElementById("reiniciar")
    seleccionReiniciar.style.display = ("none")
    let botonPersonajeJugador = document.getElementById("boton-personaje")
    botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador)
    let botonGolpe = document.getElementById("boton-golpe")
    botonGolpe.addEventListener("click", ataqueGolpe)
    let botonDisparo = document.getElementById("boton-disparo")
    botonDisparo.addEventListener("click", ataqueDisparo)
    let botonFlama = document.getElementById("boton-flama")
    botonFlama.addEventListener("click", ataqueFlama)
    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarPersonajeJugador() {
    let seleccionSeleccionarPersonaje = document.getElementById("seleccionar-personaje")
    seleccionSeleccionarPersonaje.style.display = ("none")
    let seleccionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    seleccionSeleccionarAtaque.style.display = ("flex")
    let inputEnano = document.getElementById("enano")
    let inputElfo = document.getElementById("elfo")
    let inputHumano = document.getElementById("humano")
    let spanPersonajeJugador = document.getElementById("personaje-jugador")
    if (inputEnano.checked) {
        spanPersonajeJugador.innerHTML = "Enano"
    } else if (inputElfo.checked) {
        spanPersonajeJugador.innerHTML = "Elfo"
    } else if (inputHumano.checked) {
        spanPersonajeJugador.innerHTML = "Humano"
    } else {
        alert("Selecciona un Personaje")
    }
    seleccionarPersonajeEnemigo()
}

function seleccionarPersonajeEnemigo() {
    let personajeAleatorio = aleatorio(1,3)
    let spanPersonajeEnemigo = document.getElementById("personaje-enemigo")
    if (personajeAleatorio == 1) {
        spanPersonajeEnemigo.innerHTML = "Enano"
    } else if (personajeAleatorio == 2) {
        spanPersonajeEnemigo.innerHTML = "Elfo"
    } else {
        spanPersonajeEnemigo.innerHTML = "Humano"
    }
}

function ataqueGolpe() {
    ataqueJugador = "GOLPE"
    ataqueAleatorioEnemigo()
}

function ataqueDisparo() {
    ataqueJugador = "DISPARO"
    ataqueAleatorioEnemigo()
}

function ataqueFlama() {
    ataqueJugador = "FLAMA"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio (1,3)
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "GOLPE"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "DISPARO"
    } else {
        ataqueEnemigo = "FLAMA"
    }
    combate()
}

function combate() {
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")
    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("empate")
    } else if (ataqueJugador == "GOLPE" && ataqueEnemigo == "DISPARO") {
        crearMensaje("ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "DISPARO" && ataqueEnemigo == "FLAMA") {
        crearMensaje ("ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "FLAMA" && ataqueEnemigo == "GOLPE") {
        crearMensaje ("ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("perdiste")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal ("FELICIDADES GANASTE")
    } else if (vidasJugador == 0) {
        crearMensajeFinal ("QUE LASTIMA PERDISTE")
    }
}   

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu personaje ataco con " + ataqueJugador + ", el personaje enemigo ataco con " + ataqueEnemigo + ", " + resultado 
    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)
    let botonGolpe = document.getElementById("boton-golpe")
    botonGolpe.disabled = true
    let botonDisparo = document.getElementById("boton-disparo")
    botonDisparo.disabled = true
    let botonFlama = document.getElementById("boton-flama")
    botonFlama.disabled = true
    let seleccionReiniciar = document.getElementById("reiniciar")
    seleccionReiniciar.style.display = ("block")
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener("load", iniciarJuego)