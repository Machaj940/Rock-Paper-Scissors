//'use strict';

function getComputerChoice() {
    const myArray = ['Rock', 'Paper', 'Scissors'];
    const randomItem = myArray[Math.floor(Math.random()*myArray.length)];
    return randomItem.toLowerCase();
};


function playRound(playerSelection, computerSelection) {

  if (playerSelection == computerSelection) {
    result = "Draw";
    return result;
  }

  else if (playerSelection == "rock" && computerSelection == "scissors") {
    result = "You Win! Rock beats Scissors";
    return result;
  }

  else if (playerSelection == "scissors" && computerSelection == "paper") {
    result = "You Win! Scissors beats Paper ";
    return result;
  }

  else if (playerSelection == "paper" && computerSelection == "rock") {
    result = "You Win! Paper beats Rock ";
    return result;
  }

  else if (playerSelection == "scissors" && computerSelection == "rock") {
    result = "You Lose! Rock beats Scissors";
    return result;
  }

  else if (playerSelection == "paper" && computerSelection == "scissors") {
    result = "You Lose! Scissors beats Paper";
    return result;
  }

  else if (playerSelection == "rock" && computerSelection == "paper") {
    result = "You Lose! Paper beats Rock";
    return result;
  }
};

const playerSelection = "scissors";
console.log(`player: ${playerSelection}`);
const computerSelection = getComputerChoice();
console.log(`computer: ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));