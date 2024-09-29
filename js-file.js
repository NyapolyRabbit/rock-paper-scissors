function getComputerChoice(random) {
    return Math.floor(Math.random() * random);
}

const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let userInput;

function getHumanChoice(input) {
    if (input.toLowerCase() === rock.toLowerCase()) {
        return 0;
    }
    else if (input.toLowerCase() === paper.toLowerCase()) {
        return 1;
    }
    else if (input.toLowerCase() === scissors.toLowerCase()) {
        return 2;
    }
}

let humanScore = 0;
let computerScore = 0;
let round = 0;
let computerSelection = 0;
let humanSelection = 0;

function playGame(callback) {
    userInput = prompt("Rock, Paper, Scissors?");
    computerSelection = getComputerChoice(3);
    humanSelection = getHumanChoice(userInput);
    callback(humanSelection, computerSelection);
    round++;            
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == 0 && computerChoice == 1 || humanChoice == 1 && computerChoice == 2 || humanChoice == 2 && 
        computerChoice == 0) {
            computerScore++;
            if (humanChoice == 0) {
                console.log("You lose! Paper beats Rock");
            }
            else if (humanChoice == 1) {
                console.log("You lose! Scissors beat Paper");
            }
            else {
                console.log("You lose! Rock beats Scissors");
            }
    }
    else if (computerChoice == 0 && humanChoice == 1 || computerChoice == 1 && humanChoice == 2 || computerChoice == 2
        && humanChoice == 0) {
            humanScore++;
            if (humanChoice == 1) {
                console.log("You win! Paper beats Rock");
            }
            else if (humanChoice == 2) {
                console.log("You win! Scissors beat Paper");
            }
            else {
                console.log("You win! Rock beats Scissors");
            }
    }
    else {
        console.log("It's a Tie!");
    }
}

while (true) {
    if (round < 5) {
        playGame(playRound);
    }
    else if (round === 5) {
        console.log(`Human: ${humanScore}`);
        console.log(`Computer: ${computerScore}`);
        break;
    }
}
