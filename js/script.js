let playerRoundScore = 0;
let computerRoundScore = 0;
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

function playRound(playerChoice, roundNumber = 0) {
    playerChoice = playerChoice[0].toUpperCase() +  playerChoice.slice(1).toLowerCase()
    let computerChoice = getComputerChoice();
    let roundResult = "";
    if (playerChoice === computerChoice) {
        roundResult = "Tie";
    } else if (((playerChoice === "Rock") & computerChoice === "Paper") || ((playerChoice === "Paper") & computerChoice === "Scissors") || ((playerChoice === "Scissors") & computerChoice === "Rock")) {
        roundResult = "Lose";
    } else if (playerChoice !== "Rock" && playerChoice !== "Scissors" && playerChoice !== "Paper") {
        alert("Please enter a valid input. Rock, paper or scissors. (Not case sensitive)")
    } else {
        roundResult = "Win";
    }
    switch (roundResult) {
        case "Win":
            alert(`You win round number ${roundNumber + 1}! ${playerChoice} beats ${computerChoice.toLowerCase()}`);
            playerRoundScore += 1;
            break;
        case "Lose":
            alert(`You lose round number ${roundNumber + 1}! ${computerChoice} beats ${playerChoice.toLowerCase()}`);
            computerRoundScore += 1;
            break;
        case "Tie":
            alert(`Round ${roundNumber + 1} ends in tie! You both chose ${computerChoice}`);
            break;
        default:
            i -= 1;
    }
}

function playGame() {
    playerRoundScore = 0;
    computerRoundScore = 0;
    for (let i = 0; i < 5; i++){
        playRound(i)
    }
    if (playerRoundScore === computerRoundScore) {
        return(`You tied with a score of ${playerRoundScore}.`);
    } else {
        return((`You ${computerRoundScore > playerRoundScore ? "lost" : "won"} with a score of ${playerRoundScore}-${computerRoundScore}.`));
    }
}

let buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.textContent)}
        )
})
