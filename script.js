function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "Rock";
        case 1:
            return "Scissors";
        case 2:
            return "Paper";
    }
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return `Tie. You both chose ${computerChoice}.`
    } else if (((playerChoice === "Rock") & computerChoice === "Paper") || ((playerChoice === "Paper") & computerChoice === "Scissors") || ((playerChoice === "Scissors") & computerChoice === "Rock")) {
        return `You lose! ${computerChoice} beats ${playerChoice.toLowerCase()}.`
    } else {
        return `You win! ${playerChoice} beats ${computerChoice.toLowerCase()}.`
    }
}

function playGame() {
    for (let i = 0; i < 5; i++){
        alert(i)
    }
}

playGame()
// let playerChoice = prompt("Enter something");
// playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1).toLowerCase()
// let computerChoice = getComputerChoice();
// alert(computerChoice)
// alert(playRound(playerChoice, computerChoice))
