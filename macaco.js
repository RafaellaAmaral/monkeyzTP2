const macaco = document.querySelector(".macaco");
const cacto = document.querySelector(".barril");
const score = document.querySelector(".ponto");
let alreadyJump = false;
let count = 0;

document.addEventListener("keydown", (e) => {
  if ((e.code === "ArrowUp") | (e.code === "Space")) {
    jump();
  }
});

function jump() {
  if (!macaco.classList.contains("jump")) {
    macaco.classList.add("jump");
    alreadyJump = true;

    setTimeout(() => {
      macaco.classList.remove("jump");
      alreadyJump = false;
    }, 1200);
  }
}

setInterval(() => {
  let macacoBottom = parseInt(
    window.getComputedStyle(macaco).getPropertyValue("bottom")
  );
  let macacoLeft = parseInt(
    window.getComputedStyle(barril).getPropertyValue("left")
  );

  if (barrilLeft > 40 && barrilLeft < 270 && barrilBottom <= 50 && !alreadyJump) {
    alert(`Game Over! Seu score foi: ${count}`);
    count = 0;
  }

  count++;
  score.innerHTML = `SCORE: ${count}`;
}, 10);
