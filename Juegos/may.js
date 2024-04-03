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
    let botonCorte = document.getElementById("boton-corte")
    botonCorte.addEventListener("click", ataqueCorte)
    let botonFlechazo = document.getElementById("boton-flechazo")
    botonFlechazo.addEventListener("click", ataqueFlechazo)
    let botonQuemar = document.getElementById("boton-quemar")
    botonQuemar.addEventListener("click", ataqueQuemar)
    let botonAturdir = document.getElementById("boton-aturdir")
    botonAturdir.addEventListener("click", ataqueAturdir)
    let botonDesangro = document.getElementById("boton-desangro")
    botonDesangro.addEventListener("click", ataqueDesangro)
    let botonPurificar = document.getElementById("boton-purificar")
    botonPurificar.addEventListener("click", ataquePurificar)
    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarPersonajeJugador() {
    let seleccionSeleccionarPersonaje = document.getElementById("seleccionar-personaje")
    seleccionSeleccionarPersonaje.style.display = ("none")
    let seleccionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    seleccionSeleccionarAtaque.style.display = ("flex")
    let inputAsesino = document.getElementById("asesino")
    let inputAventurero = document.getElementById("aventurero")
    let inputMago = document.getElementById("mago")
    let inputMercenario = document.getElementById("mercenario")
    let inputPaladín = document.getElementById("paladín")
    let inputSanto = document.getElementById("santo")
    let spanPersonajeJugador = document.getElementById("personaje-jugador")
    if (inputAsesino.checked) {
        spanPersonajeJugador.innerHTML = "Asesino"
    } else if (inputAventurero.checked) {
        spanPersonajeJugador.innerHTML = "Aventurero"
    } else if (inputMago.checked) {
        spanPersonajeJugador.innerHTML = "Mago"
    } else if (inputMercenario.checked) {
        spanPersonajeJugador.innerHTML = "Mercenario"
    } else if (inputPaladín.checked) {
        spanPersonajeJugador.innerHTML = "Paladín"
    } else if (inputSanto.checked) {
        spanPersonajeJugador.innerHTML = "Santo"
    } else {
        alert ("Debes elegir un Personaje")
    } 
    seleccionarPersonajeEnemigo()
}

function seleccionarPersonajeEnemigo() {
    let personajeAleatorio = aleatorio(1,6)
    let spanPersonajeEnemigo = document.getElementById("personaje-enemigo")

    if(personajeAleatorio == 1) {
        spanPersonajeEnemigo.innerHTML = "Asesino"
    } else if (personajeAleatorio == 2) {
        spanPersonajeEnemigo.innerHTML = "Aventurero"
    } else if (personajeAleatorio == 3) {
        spanPersonajeEnemigo.innerHTML = "Mago"
    } else if (personajeAleatorio == 4) {
        spanPersonajeEnemigo.innerHTML = "Mercenario"
    } else if (personajeAleatorio == 5) {
        spanPersonajeEnemigo.innerHTML = "Paladín"
    } else {
        spanPersonajeEnemigo.innerHTML = "Santo"
    }
}

function ataqueCorte() {
    ataqueJugador = "Corte"
    ataqueAleatorioEnemigo()
}

function ataqueFlechazo() {
    ataqueJugador = "Flechazo"
    ataqueAleatorioEnemigo ()
}

function ataqueQuemar() {
    ataqueJugador = "Quemar"
    ataqueAleatorioEnemigo()
}

function ataqueAturdir() {
    ataqueJugador = "Aturdir"
    ataqueAleatorioEnemigo()
}

function ataqueDesangro() {
    ataqueJugador = "Desangro"
    ataqueAleatorioEnemigo()
}

function ataquePurificar() {
    ataqueJugador = "Purificar"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,6)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "Corte"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "Flechazo"
    } else if (ataqueAleatorio == 3) {
        ataqueEnemigo = "Quemar"
    } else if (ataqueAleatorio == 4) {
        ataqueAleatorio = "Aturdir"
    } else if (ataqueAleatorio == 5) {
        ataqueAleatorio = "Desangro"
    }else {
        ataqueEnemigo = "Purificar"
    }
    combate()
}

function combate() {
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")
    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje ("EMPATE")
    } else if (ataqueJugador == "Corte" && ataqueEnemigo == "Flechazo") {
        crearMensaje ("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "Flechazo" && ataqueEnemigo == "Quemar") {
        crearMensaje ("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "Quemar" && ataqueEnemigo == "Aturdir") {
        crearMensaje ("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "Aturdir" && ataqueEnemigo == "Desangro") {
        crearMensaje ("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "Desangro" && ataqueEnemigo == "Purificar") {
        crearMensaje ("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "Purificar" && ataqueEnemigo == "Corte") {
        crearMensaje ("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje ("Perdiste")
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
    let botonCorte = document.getElementById("boton-corte")
    botonCorte.disabled = true
    let botonFlechazo = document.getElementById("boton-flechazo")
    botonFlechazo.disabled = true
    let botonQuemar = document.getElementById("boton-quemar")
    botonQuemar.disabled = true
    let botonAturdir = document.getElementById("boton-aturdir")
    botonAturdir.disabled = true
    let botonDesangro = document.getElementById("boton-desangro")
    botonDesangro.disabled = true
    let botonPurificar = document.getElementById("boton-purificar")
    botonPurificar.disabled = true
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