

function playRound(playerSelection, computerSelection) {
    let round = game(playerSelection, computerSelection);
    
    return round;
    
}

function game(playerSelection, computerSelection) {
    let userInput = playerSelection;
    if (userInput.toLowerCase() == "rock") {
        if (computerSelection == 'paper') {
            return "You Lose! Paper beats Rock";
        } else if (computerSelection == 'scissors') {
            return "You Win! Scissors beats Rock";
        } else {
            return "Tie! Try again";
        }

    } else if (userInput.toLowerCase() == "paper") {
        if (computerSelection == 'scissors') {
            return "You Lose! Scissors beats Paper";
        } else if (computerSelection == 'rock') {
            return "You Win! Paper beats Rock";
        } else {
            return "Tie! Try again";
        }
    
    } else if (userInput.toLowerCase() == "scissors") {
        if (computerSelection == 'rock') {
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection == 'paper') {
            return "You Win! Scissors beats Paper";
        } else {
            return "Tie! Try again";
        }
    
    } else {
        return "please enter either rock, paper or scissors";
    }
}

let gameList = ['rock', 'paper', 'scissors']
function computerPlay() {
    // Returns a random number inclusive of 0 -> 2
    let random = Math.floor(Math.random() * 3);
    return gameList[random];
}

// console.log(computerPlay);
// const playerSelection = "rock";

for(let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, paper or scissors?");
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
}