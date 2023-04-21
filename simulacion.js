let combate = function () {
    const Heroe = {
        nombre: "Heroe",
        vidaMax: 100,
        vidaAct: 100,
        daño: Math.round(Math.random() * 10)
    }

    const Limo = {
        nombre: "Limo",
        vidaMax: 100,
        vidaAct: 100,
        daño: Math.round(Math.random() * 10)
    }

    while (Heroe.vidaAct > 0) {
        ataca(Heroe, Limo)
        mostrarStats(Limo, Heroe)
        if (Limo.vidaAct <= 0) {
            break;
        }
        ataca(Limo, Heroe);
        mostrarStats(Heroe, Limo)
    }
    console.log(`Combate finalizado`)
}

let ataca = function (ataque, recibe) {
    recibe.vidaAct = recibe.vidaAct - ataque.daño
    console.log(`¡${ataque.nombre} hace ${ataque.daño} puntos de daño a ${recibe.nombre}!`)
}

let mostrarStats = function (personaje1, personaje2) {
    console.log(`${personaje1.nombre} - ${personaje1.vidaAct}/${personaje1.vidaMax}`)
    console.log(`${personaje2.nombre} - ${personaje2.vidaAct}/${personaje2.vidaMax}`)
}

combate()







