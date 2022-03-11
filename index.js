let hands = ["rock", "paper", "scissors"]
let playerScore = 0
let computerScore = 0

// // function that makes the computer play 1 of 3 hands
function computerPlay() {
    let randomIndex = Math.floor(Math.random() * 3)
    return hands[randomIndex]
}

// // function that gets the user input
function userInput() {
    input = prompt("Type 'Rock', 'Paper' or 'Scissors'")
    input = input.toLowerCase()
    console.log(input)
}

// // function that plays a single round of Rock Paper Scissors. 
function playRound() {
    let computerSelection = computerPlay()
    console.log(computerSelection)
    let playerSelection = input
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "it's a tie(rock)"
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
        return "it's a tie(paper)"
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

function game() {
    // for(let i = 0; i < 5; i++) {
    //     return playRound(i)
//     }
// }
playRound()
}
// console.log(playRound(playerSelection, computerSelection))
game();

