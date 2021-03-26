const data = [{
    text: "Porque de tal manera amo Dios al mundo que ha dado a su Hijo unigenito para que todo aquel que en el cree no se pierda mas tenga vida eterna",
    result: "Juan 3:16"
  },
  {
    text: "Cuales son los colores primarios",
    result: "Rojo, amarillo, azul"
  },
  {
    text: "Cual es el oceano mas extenso y profundo del mundo",
    result: "Océano Pacífico"
  },
  {
    text: "La montaña mas alta del mundo",
    result: "Monte Everest"
  },
  {
    text: "Las fronteras terrestres de Panama",
    result: "Colombia y Costa Rica"
  },
  {
    text: "Nombre los colores del arcoiris",
    result: "Rojo, naranja, amarillo, verde, azul, indigo y violeta"
  },
  {
    text: "En que animal se convirtio el Emperador Kuzco en la pelicula",
    result: "Llama"
  },
  {
    text: "Mas buscad primeramente el reino de Dios y su justicia y todas estas cosas os seran añadidas",
    result: "Mateo 6:33"
  },
  {
    text: "Cuantos metros hay en una milla",
    result: "1609 metros"
  },
  {
    text: "Nombre de los planetas en el sistema solar que comienzan con la letra m",
    result: "Marte y Mercurio"
  },
  {
    text: "Comida favorita de Naruto",
    result: "Ramen"
  },
  {
    text: "Nombre del vecino de Andy en Toy Story",
    result: "Sid"
  },
  {
    text: "Quinto planeta del sistema solar",
    result: "Jupiter"
  },
  {
    text: "Quien pinto la Mona Lisa",
    result: "Leonardo DaVinci"
  },
  {
    text: "Nombre de la diseñadora de moda en la pelicula Los Increibles",
    result: "Edna Moda"
  },
];
console.log(data.length)
let selectedPhraseIndex = 0;

function newGame() {
  createLayout();
  createKeyboardEvent();
}

function createLayout() {
  const phraseLayout = document.querySelector("#app > .phrase");
  const words = data[selectedPhraseIndex].text.toLowerCase().split(" ");

  phraseLayout.innerHTML = "";
  words.forEach(word => {
    const wordElement = document.createElement("div");
    wordElement.classList.add("word");

    word.split("").forEach(character => {
      const characterElement = document.createElement("div");
      characterElement.classList.add("character");
      characterElement.setAttribute("data-char", character);
      wordElement.appendChild(characterElement);
    });

    phraseLayout.appendChild(wordElement);

    document.querySelector(".result").setAttribute("data-index", selectedPhraseIndex + 1);
  });
}

function createKeyboardEvent() {
  const keys = document.querySelectorAll("#app > .keyboard .key");

  keys.forEach(key => {
    key.classList.remove("selected");
    key.addEventListener("click", function () {
      const char = this.dataset.key;

      document.querySelector(`.key[data-key=${char}]`).classList.add("selected");
      document.querySelectorAll(`.character[data-char=${char}]`).forEach(el => {
        el.classList.add("display");
      });
    });
  })
}

function next() {
  const resultElement = document.querySelector(".result");

  if (resultElement.dataset.result) {
    selectedPhraseIndex = selectedPhraseIndex + 1 < data.length ? selectedPhraseIndex + 1 : 0;
    newGame(selectedPhraseIndex);
    resultElement.setAttribute("data-result", "");
    resultElement.classList.remove("display");
  }
}

document.onkeydown = (ev) => {
  if (ev.code == "Enter") {
    const resultElement = document.querySelector(".result");

    document.querySelectorAll(".character[data-char]").forEach(el => el.classList.add("display"));
    resultElement.classList.add("display");
    resultElement.setAttribute("data-result", data[selectedPhraseIndex].result);
  }
}