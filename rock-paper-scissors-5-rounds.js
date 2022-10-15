//'use strict';


function getComputerChoice() {
    const myArray = ['Rock', 'Paper', 'Scissors'];
    const randomItem = myArray[Math.floor(Math.random()*myArray.length)];
    return randomItem.toLowerCase();
};

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    result = "Draw";
    console.log(`player: ${playerScore} - computer: ${computerScore}`);
    return result;
  }

  else if (playerSelection == "rock" && computerSelection == "scissors") {
    result = "You Win! Rock beats Scissors";
    playerScore++;
    console.log(`player: ${playerScore} - computer: ${computerScore}`);
    return result;
  }

  else if (playerSelection == "scissors" && computerSelection == "paper") {
    result = "You Win! Scissors beats Paper ";
    playerScore++;
    console.log(`player: ${playerScore} - computer: ${computerScore}`);
    return result;
  }

  else if (playerSelection == "paper" && computerSelection == "rock") {
    result = "You Win! Paper beats Rock ";
    playerScore++;
    console.log(`player: ${playerScore} - computer: ${computerScore}`);
    return result;
  }

  else if (playerSelection == "scissors" && computerSelection == "rock") {
    result = "You Lose! Rock beats Scissors";
    computerScore++;
    console.log(`player: ${playerScore} - computer: ${computerScore}`);
    return result;
  }

  else if (playerSelection == "paper" && computerSelection == "scissors") {
    result = "You Lose! Scissors beats Paper";
    computerScore++;
    console.log(`player: ${playerScore} - computer: ${computerScore}`);
    return result;
  }

  else if (playerSelection == "rock" && computerSelection == "paper") {
    result = "You Lose! Paper beats Rock";
    computerScore++;
    console.log(`player: ${playerScore} - computer: ${computerScore}`);
    return result;
  }
}


//const playerSelection = "scissors";
//console.log(`player: ${playerSelection}`);
//const computerSelection = getComputerChoice();
//console.log(`computer: ${computerSelection}`);
//console.log(playRound(playerSelection, computerSelection));


// Function game() plays 'Rock Paper Scissors for five rounds

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose and enter either 'rock', 'paper' or 'scissors' 5 times");
    console.log(`player: ${playerSelection}`);
    const computerSelection = getComputerChoice();
    console.log(`computer: ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));

  }
  if (playerScore > computerScore) {
    return "FINAL SCORE: Player Wins";
  } else if (computerScore == playerScore) {
    return "FINAL SCORE: Draw";
  } else {
    return "FINAL SCORE: Computer Wins"
  }
}

console.log(game());