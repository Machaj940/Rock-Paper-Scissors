//'use strict';


let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
const choiceBtns = document.querySelectorAll(".choiceBtn")

choiceBtns.forEach(button => button.addEventListener("click", () => {
    playerSelection = button.textContent;
    computerSelection = getComputerChoice();
    console.log(`player : ${playerSelection}`);
    console.log(`computer: ${computerSelection}`);
    playRound(playerSelection, computerSelection);
}))


function getComputerChoice() {
    const myArray = ['Rock', 'Paper', 'Scissors'];
    const randomItem = myArray[Math.floor(Math.random()*myArray.length)];
    return randomItem.toLowerCase();
};


function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
      result = "Draw";
      console.log(result);
      console.log(`player: ${playerScore} - computer: ${computerScore}`);
      return result;
    }
  
    else if (playerSelection == "rock" && computerSelection == "scissors") {
      result = "You Win! Rock beats Scissors";
      playerScore++;
      console.log(`player: ${playerScore} - computer: ${computerScore}`);
      console.log(result);
      return result;
    }
  
    else if (playerSelection == "scissors" && computerSelection == "paper") {
      result = "You Win! Scissors beats Paper ";
      playerScore++;
      console.log(`player: ${playerScore} - computer: ${computerScore}`);
      console.log(result);
      return result;
    }
  
    else if (playerSelection == "paper" && computerSelection == "rock") {
      result = "You Win! Paper beats Rock ";
      playerScore++;
      console.log(result);
      console.log(`player: ${playerScore} - computer: ${computerScore}`);
      return result;
    }
  
    else if (playerSelection == "scissors" && computerSelection == "rock") {
      result = "You Lose! Rock beats Scissors";
      computerScore++;
      console.log(result);
      console.log(`player: ${playerScore} - computer: ${computerScore}`);
      return result;
    }
  
    else if (playerSelection == "paper" && computerSelection == "scissors") {
      result = "You Lose! Scissors beats Paper";
      computerScore++;
      console.log(result);
      console.log(`player: ${playerScore} - computer: ${computerScore}`);
      return result;
    }
  
    else if (playerSelection == "rock" && computerSelection == "paper") {
      result = "You Lose! Paper beats Rock";
      computerScore++;
      console.log(`player: ${playerScore} - computer: ${computerScore}`);
      console.log(result);
      return result;
    }
};

