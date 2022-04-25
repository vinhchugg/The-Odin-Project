const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const outcome = document.querySelector(".outcome");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const winner = document.querySelector(".winner");
const background = document.querySelector("body");
// const play-again = document.querySelector(".play-again");

// playagain.addEventListener("click", init);

//Array of options
const rockPaperScissor = ["Rock", "Paper", "Scissors"];
let score, cScore, playing;

function init() {
  score = 0;
  cScore = 0;
  playing = true;
  winner.textContent = "";
  winner.style.visibility = "hidden";
  playerScore.textContent = "";
  computerScore.textContent = "";
  outcome.textContent = "";
  background.style.background = "";
}

init();

//Function for computers choice
function computerPlay() {
  //Returns random option from array
  return rockPaperScissor[Math.floor(Math.random() * rockPaperScissor.length)];
}

function playGame(playerSelection) {
  //Sets options to uppercase
  const computerSelection = computerPlay().toUpperCase();
  let option = playerSelection.toUpperCase();
  //Return if it is a draw
  if (option === computerSelection) {
    // console.log("It is a Draw");
    outcome.textContent = "It is a Draw!";
  }
  //Player loses
  if (
    (option === "ROCK" && computerSelection === "PAPER") ||
    (option === "PAPER" && computerSelection === "SCISSORS") ||
    (option === "SCISSORS" && computerSelection === "ROCK")
  ) {
    computerScore.textContent = cScore += 1;
    // console.log(`You Lose! ${computerSelection} beats ${option}.`);
    outcome.textContent = `You Lose! ${computerSelection} beats ${option}.`;
  }
  //Player wins
  if (
    (option === "ROCK" && computerSelection === "SCISSORS") ||
    (option === "PAPER" && computerSelection === "ROCK") ||
    (option === "SCISSORS" && computerSelection === "PAPER")
  ) {
    playerScore.textContent = score += 1;
    // console.log(`You Win! ${option} beats ${computerSelection}.`);
    outcome.textContent = `You Win! ${option} beats ${computerSelection}.`;
  }
  //Winner display
  if (score === 5) {
    playing = false;
    winner.style.cssText = "visibility: visible;";
    winner.textContent = "Player has Won!";
    background.style.background = "green";
  }
  if (cScore === 5) {
    playing = false;
    winner.style.cssText = "visibility: visible;";
    winner.textContent = "Player has Lost!";
    background.style.background = "red";
  }
  if (!playing) {
    let playAgain = document.createElement("button");
    playAgain.addEventListener("click", init);
    playAgain.innerText = "Play Again";
    outcome.textContent = "";
    outcome.append(playAgain);
  }
}

rock.addEventListener("click", function () {
  if (playing) {
    playGame("rock");
  }
});
paper.addEventListener("click", function () {
  if (playing) {
    playGame("paper");
  }
});
scissors.addEventListener("click", function () {
  if (playing) {
    playGame("scissors");
  }
});
