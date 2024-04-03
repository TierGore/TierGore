const sectionElegirAtaque = document.getElementById("elegir-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota")
sectionReiniciar.style.display = "none"
const botonFire = document.getElementById("boton-fire")
const botonWater = document.getElementById("boton-water")
const botonRock = document.getElementById("boton-rock")
const botonReiniciar = document.getElementById("boton-reiniciar")

const sectionElegirMascota = document.getElementById("elegir-mascota")
const inputfire = document.getElementById("fire")
const inputwater = document.getElementById("water")
const inputrock = document.getElementById("rock")
const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const selectionMensajes = document.getElementById("resultado")
const ataqueDelJugador = document.getElementById("ataque-jugador")
const ataqueDelEnemigo = document.getElementById("ataque-enemigo")


let personajes = []
let ataqueJugador
let ataqueEnemigo
let opcionDePersonajes
let vidasJugador = 3
let vidasEnemigo = 3

class Personaje {
    constructor (nombre, foto, vida) {
        this .nombre = nombre 
        this.foto = foto
        this.vida = vida
        this.ataques = []
        
    }
}

let fire = new Personaje("Fire", "./img/turtle.png", 5)
let water = new Personaje("Water", "./img/gg.png", 5)
let rock = new Personaje("Rock", "./img/Tree.png", 5)

fire.ataques.push(
    {nombre: "🔥", id : "boton-fire"},
    {nombre: "🔥", id : "boton-fire"},
    {nombre: "🔥", id : "boton-fire"},
    {nombre: "💧", id : "boton-water"},
    {nombre: "🗻", id : "boton-rock"},
)
water.ataques.push(
    {nombre: "💧", id : "boton-water"},
    {nombre: "💧", id : "boton-water"},
    {nombre: "💧", id : "boton-water"},
    {nombre: "🔥", id : "boton-fire"},
    {nombre: "🗻", id : "boton-rock"},
)
rock.ataques.push(
    {nombre: "🗻", id : "boton-rock"},
    {nombre: "🗻", id : "boton-rock"},
    {nombre: "🗻", id : "boton-rock"},
    {nombre: "💧", id : "boton-water"},
    {nombre: "🔥", id : "boton-fire"},
)

personajes.push(fire, water, rock)

function iniciarJuego() {
    
    sectionElegirAtaque.style.display = "none"
    personajes.forEach((personaje) => {
        opcionDePersonajes =`
        <input type="radio" name="mascota" id=${personaje.nombre}/>
        <label class="tarjeta-de-war" for=${personaje.nombre}>
            <p>${personaje.nombre}</p>
            <img src=${personaje.foto} alt="${personaje.nombre}">
        </label>
        `
    })
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    botonFire.addEventListener("click", ataqueFire)
    botonWater.addEventListener("click", ataqueWater)
    botonRock.addEventListener("click", ataqueRock)
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador() {
    
    sectionElegirAtaque.style.display = "flex"
    sectionElegirMascota.style.display = "none"
    if(inputfire.checked) {
        spanMascotaJugador.innerHTML = "Fire"
    } else if(inputwater.checked) {
        spanMascotaJugador.innerHTML = "Water"
    } else if(inputrock.checked) {
        spanMascotaJugador.innerHTML = "Rock"
    } else{
        alert("Por favor Elige una mascota")
    }
    seleccionarMascotaEnemigo()
}   

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)


    if(mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = "Fire"
    } else if(mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = "Water"
    } else {
        spanMascotaEnemigo.innerHTML = "Rock"
    }
}

function ataqueFire() {
    ataqueJugador = "FIRE"
    ataqueAleatorioEnemigo()
}

function ataqueWater() {
    ataqueJugador = "WATER"
    ataqueAleatorioEnemigo()
}

function ataqueRock() {
    ataqueJugador = "ROCK"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FIRE"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "WATER"
    } else {
        ataqueEnemigo = "ROCK"
    }
    combate()
}

function combate() {
    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje ("EMPATE")
    } else if (ataqueJugador == "FIRE" && ataqueEnemigo == "ROCK") {
        crearMensaje ("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "WATER" && ataqueEnemigo == "FIRE") {
        crearMensaje ("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "ROCK" && ataqueEnemigo == "WATER") {
        crearMensaje ("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje ("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    revisarVidas()
    reiniciar()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal ("FELICIDADES GANASTE ")
    } else if (vidasJugador == 0) {
        crearMensajeFinal ("QUE LASTIMA PERDISTE ")
    }
}

function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")
    selectionMensajes.innerHTML = resultado
    ataqueDelJugador.innerHTML = ataqueJugador
    ataqueDelEnemigo.innerHTML = ataqueEnemigo
    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    selectionMensajes.innerHTML = resultadoFinal
    botonFire.disabled = true
    botonWater.disabled = true
    botonRock.disabled = true
sectionReiniciar.style.display = "block"
}

function reiniciarJuego() {
    location.reload()
}   

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)