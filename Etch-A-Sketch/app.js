const container = document.querySelector(".container");
const restart = document.querySelector(".restart");

//Prompt user for squares
let rowCol = prompt("How many squares would you like?", 64);

function init() {
  if (rowCol < 1) {
    alert("You have to give a positive number of squares!");
    rowCol = prompt("How many squares would you like?", 64);
  }
  if (rowCol > 100) {
    alert("You cannot have more than 100 squares");
    rowCol = prompt("How many squares would you like?", 64);
  }
  grid();
}

function grid() {
  for (let i = 0; i <= rowCol * rowCol; i++) {
    let grid = document.createElement("div");
    grid.className = "canvas";
    container.append(grid);

    grid.addEventListener("mouseover", function (event) {
      this.style.background = "black";
      this.style.opacity = parseFloat(this.style.opacity || 0) + 0.1;
    });
  }
}

init();

container.style.cssText = `display: grid; grid-template-rows: repeat(${rowCol}, 1fr); grid-template-columns: repeat(${rowCol}, 1fr); width: 100%; height: 100vh;`;

restart.addEventListener("click", () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  rowCol = prompt("How many squares would you like?", 64);
  init();
  container.style.cssText = `display: grid; grid-template-rows: repeat(${rowCol}, 1fr); grid-template-columns: repeat(${rowCol}, 1fr); width: 100%; height: 100vh;`;
});
