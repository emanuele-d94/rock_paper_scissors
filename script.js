
let humanScore = 0
let computerScore = 0


function getComputerChoice(){
    let computerChoice
    let n = Math.random() * 100

    if(n >= 0 && n < 33.3){
        computerChoice = "rock"
    } else if(n >= 33.3 && n < 66.6){
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }

    return computerChoice
}

function getHumanChoice(){
    let admissibleChoices = ['rock', 'paper', 'scissors']
    let humanChoice = null

    while (humanChoice === null){
        humanChoice = prompt("What do you want to play? Rock, paper or scissors?").toLowerCase();
        if(!admissibleChoices.includes(humanChoice)){
            console.log("Error, choose one between rock paper or scissors")
            humanChoice = null
        }
    }

    return humanChoice
}

function playRound(humanChoice,computerChoice){
    console.log("You play: " + humanChoice)
    console.log("Computer plays: " + computerChoice)

    if(humanChoice === "rock"){
        if (computerChoice === "rock"){
            console.log("Tie!")
        } else if(computerChoice === "paper"){
            computerScore +=1
            console.log("Computer wins!")
        } else if(computerChoice === "scissors"){
            humanScore +=1
            console.log("You win!")
        }
    } else if (humanChoice === "paper"){
        if (computerChoice === "rock"){
            humanScore +=1
            console.log("You win!")
        } else if(computerChoice === "paper"){
            console.log("Tie!")
        } else if(computerChoice === "scissors"){
            computerScore +=1
            console.log("Computer wins!")
        }
    } else if (humanChoice === "scissors"){
        if (computerChoice === "rock"){
            computerScore +=1
            console.log("Computer wins!")
        } else if(computerChoice === "paper"){
            humanScore +=1
            console.log("You win!")
        } else if(computerChoice === "scissors"){
            console.log("Tie!")
        }
    }

}

function playGame(){

    const total_rounds = 5
    let played_rounds = 0

    while(played_rounds < total_rounds){

        console.log("Round " + (played_rounds + 1) + " :")

        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()

        playRound(humanChoice,computerChoice)

        played_rounds +=1

        console.log("Player score: " + humanScore)
        console.log("Computer score: " + computerScore)

    }

    if(humanScore > computerScore){
        alert("You won the game!")
    } else if(humanScore < computerScore){
        alert("You lost the game!")
    } else {
        alert("No one won!")
    }

}


playGame()