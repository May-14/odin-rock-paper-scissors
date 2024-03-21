let playerRoundScore = 0;
let computerRoundScore = 0;
let finalMessage = document.querySelector(".choices span")
let buttons = document.querySelectorAll(".choices button");
let startNewGameButton = document.querySelector(".start-new-game");
let playerScoreUI = document.querySelector(".player-score")
let cpuScoreUI = document.querySelector(".cpu-score")
let playerChoice = "Undefined";
let playerMove = document.querySelector(".player-choice")
let computerMove = document.querySelector(".computer-choice")
let playerWonOrLost = document.querySelector(".round-winner-player");
let cpuWonOrLost = document.querySelector(".round-winner-cpu");
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
    confirmButton.style.visibility = "hidden";
    cpuWonOrLost.style.visibility = "visible";
    playerWonOrLost.style.visibility = "visible";
    playerChoice = playerChoice[0].toUpperCase() +  playerChoice.slice(1).toLowerCase()
    let computerChoice = getComputerChoice();
    if (computerChoice === "Scissors") {
        computerMove.textContent = "✂️";
    } else if (computerChoice === "Paper") {
        computerMove.textContent = "📜";
    }
    else {
        computerMove.textContent = "🗿";
    }
    let roundResult = "";
    if (playerChoice === computerChoice) {
        roundResult = "Tie";
        cpuWonOrLost.textContent = "Tie";
        playerWonOrLost.textContent = "Tie";
        cpuWonOrLost.style.color = "gray";
        playerWonOrLost.style.color = "gray";
    } else if (((playerChoice === "Rock") & computerChoice === "Paper") || ((playerChoice === "Paper") & computerChoice === "Scissors") || ((playerChoice === "Scissors") & computerChoice === "Rock")) {
        roundResult = "Lose";
        computerRoundScore += 1;
        cpuWonOrLost.textContent = "Win";
        cpuWonOrLost.style.color = "green";
        playerWonOrLost.style.color = "red";
        playerWonOrLost.textContent = "Lose";
        cpuScoreUI.textContent = computerRoundScore
    } else {
        roundResult = "Win";
        cpuWonOrLost.textContent = "Lose";
        playerWonOrLost.textContent = "Win";
        cpuWonOrLost.style.color = "red";
        playerWonOrLost.style.color = "green";
        playerRoundScore += 1;
        playerScoreUI.textContent = playerRoundScore
    }
    if (playerRoundScore === 5 || computerRoundScore === 5) {
        startNewGameButton.style.display = "block";
        buttons.forEach(button => {
            button.style.display = "none";
        })
        confirmButton.style.display = "none";
        finalMessage.style.display = "block"
        finalMessage.textContent = playerRoundScore === 5 ? `You win with a score of ${playerRoundScore} against ${computerRoundScore}.` : `The computer wins with a score of ${computerRoundScore} against ${playerRoundScore}.`; 
    }
}


buttons.forEach(button => {
    button.addEventListener("click", () => {
        computerMove.textContent = "?"
        cpuWonOrLost.style.visibility = "hidden";
        playerWonOrLost.style.visibility = "hidden";
        confirmButton.style.visibility = "visible";
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
confirmButton.addEventListener("click", playRound);
startNewGameButton.addEventListener("click", () => {
    computerRoundScore = 0;
    playerRoundScore = 0;
    playerScoreUI.textContent = 0;
    cpuScoreUI.textContent = 0;
    computerMove.textContent = "?"
    playerMove.textContent = "?"
    cpuWonOrLost.style.visibility = "hidden";
    playerWonOrLost.style.visibility = "hidden";
    startNewGameButton.style.display = "none"
    buttons.forEach(button => {
        button.style.display = "inline";
    })
    confirmButton.style.display = "block";
    finalMessage.style.display = "none";
    confirmButton.style.visibility = "hidden";
})
