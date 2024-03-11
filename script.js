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
        return "Tie";
    } else if (((playerChoice === "Rock") & computerChoice === "Paper") || ((playerChoice === "Paper") & computerChoice === "Scissors") || ((playerChoice === "Scissors") & computerChoice === "Rock")) {
        return "Lose";
    } else {
        return "Win";
    }
}

function playGame() {
    for (let i = 0; i < 5; i++){
        let playerChoice = prompt("Enter something");
playerChoice = playerChoice[0].toUpperCase() +  playerChoice.slice(1).toLowerCase()
        let computerChoice = getComputerChoice();
        let roundResult = playRound(playerChoice, computerChoice)
        switch (roundResult) {
            case "Win":
                alert(`You win round number ${i + 1}! ${playerChoice} beats ${computerChoice.toLowerCase()}`);
                break;
            case "Lose":
                alert(`You lose round number ${i + 1}! ${computerChoice} beats ${playerChoice.toLowerCase()}`);
                break;
            case "Tie":
                alert(`Round ${i + 1} ends in tie! You both chose ${computerChoice}`);
                break;
        }
    }
}

// 
playGame()
