let hands = ["rock", "paper", "scissors"]
let playerScore = 0
let computerScore = 0

// // function that makes the computer play 1 of 3 hands
function computerPlay() {
    let randomIndex = Math.floor(Math.random() * 3)
    return hands[randomIndex]
}
let playerSelection = ''
const buttons = document.querySelectorAll("#btn")

// // add click listener in each button, get the text inside the buttons, play 1 round of rps
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {

        playerSelection = e.target.innerText.toLowerCase()
        playRound()
    })
})

// // function that gets the user input
function userInput() {
    return playerSelection
}

// // function that plays a single round of Rock Paper Scissors. 
function playRound() {
    let computerSelection = computerPlay()
    console.log(playerSelection)
    playerSelection = userInput()
    console.log(computerSelection)
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "it's a tie(Rock)"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore = ++computerScore
        return "You lost! Paper beats Rock!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore = ++playerScore
        return "You win! Rock beats Scissors!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore = ++playerScore
        return "You win! Paper beats Rock!"
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "it's a tie(Paper)"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore = ++computerScore
        return "You lost! Scissors beats Paper!"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore = ++computerScore
        return "You lost! Rock beats Scissors!"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore = ++playerScore
        return "You win! Scissors beats Paper!"
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "it's a tie(Scissors)"
    }
}

// function that decides the winner of the round
function decideWinner() {
    if (playerScore > computerScore) {
        console.log("You won the round!")
    } else if (playerScore < computerScore) {
        console.log("You lost the round!")
    } else {
        console.log("This round is a tie!")
    }
}



// let scoreEl = document.getElementById("score-el");
// scoreEl.textContent = "Player Score: " + playerScore + " " + "Computer Score: " + computerScore

// function that creates 5 rounds of rps 
function game() {
    for (let i = 0; i < 5; i++) {
        // userInput()
        console.log(playRound())
        console.log("Player: " + playerScore + " " + "Computer: " + computerScore)
    }
    decideWinner()
    playerScore = 0
    computerScore = 0
}

