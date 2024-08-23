const body = document.getElementsByTagName("body")[0];
const score = document.getElementById("score");
score.style.display = "flex";
score.style.justifyContent = "center";
// const zurag = document.createElement("img");
const board = document.getElementById("board");
// body.innerHTML(zurag);
// body.appendChild(img);
for (let i = 0; i < 9; i++) {
  const img = document.createElement("p");
  img.id = i.toString();
  board.appendChild(img);
  img.style.height = "200px";
  img.style.width = "200px";
  img.style.display = "flex";
  img.style.justifyContent = "center";
  img.style.backgroundImage = "url(pipe.png)";
  img.style.backgroundSize = " cover";
}
const mole = document.createElement("img");
mole.style.height = "130px";
mole.style.width = "130px";
mole.src = "monty-mole.png";
mole.style.backgroundSize = "cover";
function random() {
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}
let rannum = 0;
function mole2() {
  let number = random();
  const selectedElement = document.getElementById(number);
  if (selectedElement.childElementCount > 0) {
    return mole2();
  }
  document.getElementById(number).appendChild(mole);
}

val1 = setInterval(mole2, 1000);
val2 = setInterval(piranha1, 1000);

const piranha = document.createElement("img");
piranha.style.height = "130px";
piranha.style.width = "130px";
piranha.src = "piranha-plant.png";
piranha.style.backgroundSize = "cover";

function piranha1() {
  let number = random();
  const selectedElement = document.getElementById(number);
  if (selectedElement.childElementCount > 0) {
    return piranha1();
  }
  document.getElementById(number).appendChild(piranha);
}

const point = document.getElementById("score");
let result = 0;

function addScore() {
  result += 10;
  point.innerHTML = result;
  if (result == 100) {
    point.innerHTML = `YOU WON`;
    clearInterval(val1);
    clearInterval(val2);
    mole.onclick = 0;
    piranha.onclick = 0;
  }
}

function gameover() {
  point.innerHTML = `GAME OVER: ${result}`;
  clearInterval(val1);
  clearInterval(val2);
}

piranha.onclick = gameover;
mole.onclick = addScore;
