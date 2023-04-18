const bolillasSacadas = new Array(75);
const letrasBingo = ['B','I','N','G','O']
const cambios = [1,16,31,46,61]

const nuevaBolilla = document.querySelector('.agregar-bolilla')
const reiniciar = document.querySelector('.reiniciar')

const parrafoBolilla = document.querySelector('.text-bolilla')

showBolillas();
//Eventos
nuevaBolilla.addEventListener('click', iniciarJuego)
reiniciar.addEventListener('click', reiniciarBolillas)

function iniciarJuego() {
    if(bolillasSacadas.length == 75) {
        reiniciarBolillas()
        return
    }
    const random = numeroRandom();

    const div = document.querySelector('.content-bolillas .b-' + random)
    
    parrafoBolilla.textContent = random
    console.log(div)
    div.classList.add('select-bolilla')

    bolillasSacadas.push(random)
}

function reiniciarBolillas() {
    const bolillas = document.querySelectorAll('.content-bolillas div')
    console.log(bolillas)
    bolillas.forEach(bolilla => {
        bolilla.classList.remove('select-bolilla')
    })
    parrafoBolilla.textContent = ''
    //Borramos los elementos del arreglo
    bolillasSacadas.splice(0, bolillasSacadas.length)
}
function showBolillas() {
    const contentBolillas = document.querySelector('.content-bolillas')
    
    for(let i=0; i<5; i++) {
        for(let j=cambios[i]; j<cambios[i]+15; j++) {
            const div = document.createElement('DIV')
            const parrafo = document.createElement('p')
            if(j == cambios[i]) {
                const div = document.createElement('DIV')
                const parrafo = document.createElement('p')
                div.classList.add(letrasBingo[i])
                parrafo.textContent = letrasBingo[i]
                div.appendChild(parrafo)
                contentBolillas.appendChild(div)
            }
            div.classList.add('b-'+j)
            parrafo.textContent = j
    
            div.appendChild(parrafo)
            contentBolillas.appendChild(div)
        }
    }
}

function numeroRandom() {
    let numeroRandom = Math.floor((Math.random() * (75 - 1 + 1)) + 1)

    while(bolillasSacadas.includes(numeroRandom)) {
        numeroRandom = Math.floor((Math.random() * (75 - 1 + 1)) + 1)
    }

    return numeroRandom;
}