let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
    const randNb = (Math.floor(Math.random() * 3));
    const choice = ["ROCK", "PAPER", "SCISSORS"];
    return choice[randNb];
}

function getHumanChoice() {
    const choice = prompt("Rock, Paper or Scissors?").toUpperCase();
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`It's a draw, both player picked ${humanChoice} - no winner!`);
    }
    else if (humanChoice == "ROCK") {
        if (computerChoice == "PAPER") {
            console.log("The computer won!");
            computerScore++;
        } else {
            console.log("The player won!");
            humanScore++;
        }
    }
    else if (humanChoice == "PAPER") {
        if (computerChoice == "ROCK") {
            console.log("The player won!");
            humanScore++;
        } else {
            console.log("The computer won!");
            computerScore++;
        }
    }
    else if (computerChoice == "ROCK") {
        console.log("The player won!")
        humanScore++;
    } else {
        console.log("The computer won!");
        computerScore++;
    }
}
function playGame() {
    while (humanScore < 5 && computerScore < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(`Game finished ! ${humanScore} vs ${computerScore}`)
    if (humanScore == 5)
        console.log("The player is the final winner!!!!");
    else
        console.log("You have been defeated !!!!!");
}