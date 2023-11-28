let contador = 0;
const clock = 75;
const faseClock = 300;
const macaco = $("#macaco");
let bananaVel = 20;
const container = $("#containerJogo");

$("body").on("mousemove", (e) => {
  macaco.css("left", e.pageX);
});

$("body").on("click", (e) => {
  atira();
});

function criaRobo(posX, posY) {
  let robo = $(document.createElement("img"));
  robo.attr("src", "imagens/robo.png");
  robo.addClass("robo");
  robo.css("position", "absolute");
  robo.css("left", posX);
  robo.css("top", posY);
  container.append(robo[0]);
}

function atira() {
  let banana = $(document.createElement("img"));
  banana.attr("src", "imagens/banana.png");
  banana.addClass("banana");
  banana.css("position", "absolute");
  banana.css("left", macaco.css("left"));
  banana.css("top", macaco.css("top"));
  container.append(banana[0]);
}

function atualizarBananas() {
  let bananas = $(".banana");
  bananas.each((index, value) => {
    let banana = $(value);
    let top = parseInt(banana.css("top"));
    banana.css("top", top - bananaVel);
  });
}

function criaRoboDeHorda() {
  if (Math.floor(Math.random() * 25) == 2)
    criaRobo(`${Math.floor(Math.random() * 80) + 10}%`, "50px");
}

function atualizarRobos() {
  let robos = $(".robo");
  robos.each((index, value) => {
    let robo = $(value);
    let top = parseInt(robo.css("top"));
    robo.css("top", top + 1);
  });
  if (contador % faseClock == 0) setInterval(atualizarRobos, clock);
}

function isCollide(a, b) {
  a = $(a);
  b = $(b);
  return !(
    parseInt(a.css("top")) + parseInt(a.css("height")) <
      parseInt(b.css("top")) ||
    parseInt(a.css("top")) >
      parseInt(b.css("top")) + parseInt(b.css("height")) ||
    parseInt(a.css("left")) + parseInt(a.css("width")) <
      parseInt(b.css("left")) ||
    parseInt(a.css("left")) > parseInt(b.css("left")) + parseInt(b.css("width"))
  );
}

function deleta(ele) {
  ele.remove();
}

function explode(img) {
  img.attr(
    "src",
    "https://preview.redd.it/explosion-at-three-different-scales-v0-s7vglz9woomb1.gif?width=256&auto=webp&s=2e1ad8c8205698b74a9771e141366aaad798bce2"
  );
  img.removeClass("robo");
  img.addClass("explosao");
  setTimeout(() => {
    deleta(img);
  }, 1000);
}

function checaColisao() {
  let robos = $(".robo");
  let bananas = $(".banana");
  robos.each((index, Robo) => {
    let robo = $(Robo);
    if (robo.hasClass("explosao")) return;
    bananas.each((index, Banana) => {
      let banana = $(Banana);
      if (isCollide(robo, banana)) {
        explode(robo);
        deleta(banana);
      }
    });
  });
}

function derrota(ele) {
  deleta(ele);
  alert("perdestes");
  window.location.reload();
}

function checarDerrota() {
  let robos = $(".robo");
  robos.each((index, value) => {
    if (parseInt($(value).css("top")) > parseInt(macaco.css("top")))
      derrota(value);
  });
}

function atualizar() {
  atualizarRobos();
  criaRoboDeHorda();
  atualizarBananas();
  checaColisao();
  checarDerrota();
  contador++;
}

setInterval(atualizar, clock);
