const data = [{
    text: "Orad sin cesar",
    result: "1 Tesalonicenses 5:17"
  },
  {
    text: "Porque de tal manera amo Dios al mundo que ha dado a su Hijo unigenito para que todo aquel que en el cree no se pierda mas tenga vida eterna",
    result: "Juan 3:16"
  },
  {
    text: "Jesus le dijo Amaras al Señor tu Dios con todo tu corazon y con toda tu alma y con toda tu mente",
    result: "Mateo 22:37"
  },
  {
    text: "Estas cosas os he hablado para que en mi tengais paz En el mundo tendreis afliccion pero confiad yo he vencido al mundo",
    result: "Juan 16:33"
  },
  {
    text: "Echa sobre Jehova tu carga y el te sustentara No dejara para siempre caido al justo",
    result: "Salmos 55:22"
  },
  {
    text: "pero los que esperan a Jehova tendran nuevas fuerzas levantaran alas como las aguilas correran y no se cansaran caminaran y no se fatigaran",
    result: "Isaias 40:31"
  },
  {
    text: "De modo que si alguno esta en Cristo nueva criatura es las cosas viejas pasaron he aqui todas son hechas nuevas",
    result: "2 Corintios 5:17"
  },
  {
    text: "Todo lo puedo en Cristo que me fortalece",
    result: "Filipenses 4:13"
  },
  {
    text: "Mas buscad primeramente el reino de Dios y su justicia y todas estas cosas os seran añadidas",
    result: "Mateo 6:33"
  },
  {
    text: "Con todo yo me alegrare en Jehova Y me gozare en el Dios de mi salvacion",
    result: "Habacuc 3:18"
  },
  {
    text: "Un mandamiento nuevo os doy Que os ameis unos a otros como yo os he amado que tambien os ameis unos a otros",
    result: "Juan 13:34"
  },
  {
    text: "Dios es nuestro amparo y fortaleza Nuestro pronto auxilio en las tribulaciones",
    result: "Salmos 46:1"
  },
];

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