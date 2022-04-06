let hands = ["rock", "paper", "scissors"]
let playerScore = 0
let computerScore = 0
let scoreEl = document.getElementById("score-el");
scoreEl.textContent = "Player Score: " + playerScore + " " + "Computer Score: " + computerScore
let rndChoices = document.getElementById("rndChoices");
let playerSelection = ''
let choicesEl = document.getElementById("choices-el")
const buttons = document.querySelectorAll("#btn")


// // function that makes the computer play 1 of 3 hands
function computerPlay() {
    let randomIndex = Math.floor(Math.random() * 3)
    return hands[randomIndex]
}

// // add click listener in each button, get the text inside the buttons, play 1 round of rps + update scores
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {

        playerSelection = e.target.innerText.toLowerCase()
        playRound()
        scoreEl.textContent = "Player Score: " + playerScore + " " + "Computer Score: " + computerScore
        decideWinner()
    })
})

// // function that plays a single round of Rock Paper Scissors. 
function playRound() {
    let computerSelection = computerPlay()
    choicesEl.textContent = "Player choice: " + playerSelection + " " + "Computer choice: " + computerSelection
    // console.log(playerSelection)
    // console.log(computerSelection)
    if (playerSelection === "rock" && computerSelection === "rock") {
        return rndChoices.textContent = "it's a tie(Rock)"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore = ++computerScore
        return rndChoices.textContent = "You lost! Paper beats Rock!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore = ++playerScore
        return rndChoices.textContent = "You win! Rock beats Scissors!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore = ++playerScore
        return rndChoices.textContent = "You win! Paper beats Rock!"
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return rndChoices.textContent = "it's a tie(Paper)"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore = ++computerScore
        return rndChoices.textContent = "You lost! Scissors beats Paper!"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore = ++computerScore
        return rndChoices.textContent = "You lost! Rock beats Scissors!"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore = ++playerScore
        return rndChoices.textContent = "You win! Scissors beats Paper!"
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return rndChoices.textContent = "it's a tie(Scissors)"
    }


}

// function that decides the winner of the round and resets the scores
function decideWinner() {
    if (playerScore === 5) {
        rndChoices.textContent = ("You won the round!")
        playerScore = 0
        computerScore = 0
    } else if (computerScore === 5) {
        rndChoices.textContent = ("You lost the round!")
        computerScore = 0
        playerScore = 0
    }
}
