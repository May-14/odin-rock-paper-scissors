let playerRoundScore = 0;
let computerRoundScore = 0;
let playerScoreUI = document.querySelector(".player-score")
let cpuScoreUI = document.querySelector(".cpu-score")
let playerChoice = "Undefined";
let playerMove = document.querySelector(".player-choice")
let computerMove = document.querySelector(".computer-choice")
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

function playRound(roundNumber = 1) {
    playerChoice = playerChoice[0].toUpperCase() +  playerChoice.slice(1).toLowerCase()
    let computerChoice = getComputerChoice();
    let roundResult = "";
    if (playerChoice === computerChoice) {
        roundResult = "Tie";
    } else if (((playerChoice === "Rock") & computerChoice === "Paper") || ((playerChoice === "Paper") & computerChoice === "Scissors") || ((playerChoice === "Scissors") & computerChoice === "Rock")) {
        roundResult = "Lose";
        computerRoundScore += 1;
        cpuScoreUI.textContent = computerRoundScore
    } else if (playerChoice !== "Rock" && playerChoice !== "Scissors" && playerChoice !== "Paper") {
        alert("Please enter a valid input. Rock, paper or scissors. (Not case sensitive)")
    } else {
        roundResult = "Win";
        playerRoundScore += 1;
        playerScoreUI.textContent = playerRoundScore
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

let buttons = document.querySelectorAll(".choices button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        playerChoice = button.textContent;
        if (button.textContent === "Scissors") {
            playerMove.textContent = "✂️";
        } else if (button.textContent === "Paper") {
            playerMove.textContent = "📜";
        }
        else {
            playerMove.textContent = "🗿";
        }
    })
})

let confirmButton = document.querySelector("button.confirm");
confirmButton.addEventListener("click", playRound)