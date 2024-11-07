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

function playGame(callback, humanChoice) {
    /*userInput = prompt("Rock, Paper, Scissors?");*/
    computerSelection = getComputerChoice(3);
    humanSelection = getHumanChoice(humanChoice);
    callback(humanSelection, computerSelection);
    round++;            
}

function playRound(humanChoice, computerChoice) {

    const div = document.createElement("div");	
	
    if (humanChoice == 0 && computerChoice == 1 || humanChoice == 1 && computerChoice == 2 || humanChoice == 2 && 
        computerChoice == 0) {
            computerScore++;
            const score = document.getElementById("computerScore");
            score.textContent = computerScore;
            
            if (humanChoice == 0) {
                div.textContent = "You lose! Paper beats Rock";
            }
            else if (humanChoice == 1) {
                div.textContent = "You lose! Scissors beat Paper";
            }
            else {
                div.textContent = "You lose! Rock beats Scissors";
            }
    }
    else if (computerChoice == 0 && humanChoice == 1 || computerChoice == 1 && humanChoice == 2 || computerChoice == 2
        && humanChoice == 0) {
            humanScore++;
            const score = document.getElementById("humanScore");
            score.textContent = humanScore;
            
            if (humanChoice == 1) {
            	div.textContent = "You win! Paper beats Rock";
            }
            else if (humanChoice == 2) {
                div.textContent = "You win! Scissors beat Paper";
            }
            else {
                div.textContent = "You win! Rock beats Scissors";
            }
    }
    else {
        div.textContent = "It's a Tie!";
        document.body.appendChild(div);
    }
    
    document.body.appendChild(div);
    
    if (humanScore == 5 || computerScore == 5) {
    	const win = document.createElement("div");
    	
    	if (humanScore == 5) {
    	win.textContent = "You win Rock Paper Scissors!";
    	}
    	else {
    	win.textContent = "Computer wins Rock Paper Scissors!";
    	}
    	
    	document.body.appendChild(win);
    	
    	humanScore = 0;
    	computerScore = 0;
    	document.getElementById("humanScore").textContent = humanScore;
        document.getElementById("computerScore").textContent = computerScore;
    }
}

["rock", "paper", "scissors"].forEach(id => {
    document.getElementById(id).addEventListener("click", function() {
        playGame(playRound, id);
    });
});

/* while (true) {
    if (round < 5) {
        playGame(playRound);
    }
    else if (round === 5) {
        console.log(`Human: ${humanScore}`);
        console.log(`Computer: ${computerScore}`);
        break;
    }
}
*/

