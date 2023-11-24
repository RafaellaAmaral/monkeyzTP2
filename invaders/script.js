const clock = 1;
const macaco = $("#macaco");
const jogo = {};
jogo.robos = [];

$("body").on("mousemove", (e) => {
  macaco.css("left", e.pageX);
});

function criaRobo(posX, posY) {}

function atualizar() {}

setInterval(atualizar(), clock);
