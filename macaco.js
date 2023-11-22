const macaco = document.getElementById("macaco");
const planta = document.getElementById("planta");

function jump() {
    if (macaco.classList != "jump") {
        macaco.classList.add("jump");

        setTimeout(function () {
            macaco.classList.remove("jump");
        }, 300);
    }
}

let isAlive = setInterval(() => {
    let randomTime = Math.random() * 6000; //criar planta de maneira aleatória

    let macacoTop = parseInt(window.getComputedStyle(macaco).getPropertyValue("top"));

    let plantaLeft = parseInt(window.getComputedStyle(planta).getPropertyValue("left"));

    if (plantaLeft < 50 && plantaLeft > 0 && macacoTop >= 140){
        alert("Vixe, game over :(");
        document.body.innerHTML = '<h1 class="game-over""> Atualize a página e jogue novamente </h1>'; // criando título ao final do jogo
    }

    setTimeout(isAlive, randomTime);
}, 10);

document.addEventListener("keydown", function (event) {
    jump();
});
