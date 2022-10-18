//'use strict';


let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
const choiceBtns = document.querySelectorAll(".choiceBtn");
const score = document.querySelector('#scores');
const computerChoice = document.querySelector('#compChoice');
const roundResult = document.querySelector('#results');

choiceBtns.forEach(button => button.addEventListener("click", () => {
    playerSelection = button.textContent;
    computerSelection = getComputerChoice();
    computerChoice.textContent = `computer: ${computerSelection}`;
    playRound(playerSelection, computerSelection);
}))


function getComputerChoice() {
    const myArray = ['Rock', 'Paper', 'Scissors'];
    const randomItem = myArray[Math.floor(Math.random()*myArray.length)];
    return randomItem.toLowerCase();
};


function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
      roundResult.textContent = "Draw";
      score.textContent =  `Player: ${playerScore} - Computer: ${computerScore}`;
    }
  
    else if (playerSelection == "rock" && computerSelection == "scissors") {
      roundResult.textContent = "You Win! Rock beats Scissors";
      playerScore++;
      score.textContent =  `Player: ${playerScore} - Computer: ${computerScore}`;
    }
  
    else if (playerSelection == "scissors" && computerSelection == "paper") {
      roundResult.textContent = "You Win! Scissors beats Paper ";
      playerScore++;
      score.textContent =  `Player: ${playerScore} - Computer: ${computerScore}`;
    }
  
    else if (playerSelection == "paper" && computerSelection == "rock") {
      roundResult.textContent = "You Win! Paper beats Rock ";
      playerScore++;
      score.textContent =  `Player: ${playerScore} - Computer: ${computerScore}`;
    }
  
    else if (playerSelection == "scissors" && computerSelection == "rock") {
      roundResult.textContent = "You Lose! Rock beats Scissors";
      computerScore++;
      score.textContent =  `Player: ${playerScore} - Computer: ${computerScore}`;
    }
  
    else if (playerSelection == "paper" && computerSelection == "scissors") {
      roundResult.textContent = "You Lose! Scissors beats Paper";
      computerScore++;
      score.textContent =  `Player: ${playerScore} - Computer: ${computerScore}`;
    }
  
    else if (playerSelection == "rock" && computerSelection == "paper") {
      roundResult.textContent = "You Lose! Paper beats Rock";
      computerScore++;
      score.textContent =  `Player: ${playerScore} - Computer: ${computerScore}`;
    }
};

