let hands = ["rock", "paper", "scissors"]
let playerSelection = windowPrompt()
let computerSelection = computerPlay()

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


// console.log(computerPlay())

// const playerSelection = "Rock" //.toLowerCase


function playRound(playerSelection, computerSelection) {
    // console.log(playerSelection)
    // console.log(computerSelection)
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("You Win! Rock beats Scissors")
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("You Win! Paper beats Rock")
    } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        console.log("You Win! Scissors beats Paper")
    } else if (playerSelection == computerSelection) {
        console.log("It's a tie!")
    } else {
        console.log("You lose!")
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

