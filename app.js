//Variables
const bolillas = [];
const letrasBingo = ["B", "I", "N", "G", "O"];
const cambios = [1, 16, 31, 46, 61];
let variante = 74;

const parrafoBolilla = document.querySelector(".text-bolilla");
const nuevaBolilla = document.querySelector(".agregar-bolilla");
const reiniciar = document.querySelector(".reiniciar");

//Renderiza los elementos al DOM
showBolillas();
//Llena el arreglo de bolillas
fillArrayRandomsNums();

//Eventos
nuevaBolilla.addEventListener("click", initGame);
reiniciar.addEventListener("click", resetBolillas);

function initGame() {
  if (bolillas.length == 0) {
    resetBolillas();
    return;
  }

  const bolilla = outBolilla();
  const div = document.querySelector(".content-bolillas .b-" + bolilla);
  parrafoBolilla.textContent = bolilla;
  div.classList.add("select-bolilla");
}

function resetBolillas() {
  const bolillas = document.querySelectorAll(".content-bolillas div");

  bolillas.forEach((bolilla) => {
    bolilla.classList.remove("select-bolilla");
  });
  parrafoBolilla.textContent = "";

  fillArrayRandomsNums();
}
function showBolillas() {
  const contentBolillas = document.querySelector(".content-bolillas");

  for (let i = 0; i < 5; i++) {
    for (let j = cambios[i]; j < cambios[i] + 15; j++) {
      if (j == cambios[i]) {
        const div = document.createElement("DIV");
        const parrafo = document.createElement("p");
        div.classList.add(letrasBingo[i]);
        parrafo.textContent = letrasBingo[i];
        div.appendChild(parrafo);
        contentBolillas.appendChild(div);
      }
      const div = document.createElement("DIV");
      const parrafo = document.createElement("p");
      div.classList.add("b-" + j);
      parrafo.textContent = j;

      div.appendChild(parrafo);
      contentBolillas.appendChild(div);
    }
  }
}

function outBolilla() {
  const posicion = Math.floor(Math.random() * variante);

  const bolilla = bolillas[posicion];
  bolillas.splice(posicion, 1);
  variante--;

  return bolilla;
}

function fillArrayRandomsNums() {
  for (let i = 0; i < 75; i++) {
    bolillas[i] = i + 1;
  }
}
