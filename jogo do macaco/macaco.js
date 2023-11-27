const macacoEl = document.querySelector("#macaco");
const barrilEl= document.querySelector("#barril");
const score = document.querySelector("#ponto");
let alreadyJump = false;
let count = 0;

function jump() {
  if (!macacoEl.classList.contains("jump")) {
    macacoEl.classList.add("jump");
    alreadyJump = true;

    setTimeout(() => {
      macacoEl.classList.remove("jump");
      alreadyJump = false;
    }, 1100);
  }
}

document.addEventListener("keydown", (e) => {
    if ((e.code === "ArrowUp") | (e.code === "Space")) {
      jump();
    }
  });
setInterval(() => {
  let macacoBottom = parseInt(
    window.getComputedStyle(macacoEl).getPropertyValue("bottom")
  );
  let barrilLeft = parseInt(
    window.getComputedStyle(barrilEl).getPropertyValue("left")
  );

  if (barrilLeft > 40 && barrilLeft < 270 && macacoBottom <= 50 && !alreadyJump) {
    alert(`Game Over! Seu score foi: ${count}`);
    count = 0;
  }

  count++;
  score.innerHTML = `SCORE: ${count}`;
}, 10);
