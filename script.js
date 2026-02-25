let userScore = 0
let computerScore = 0
let round = 1
const totalRounds = 5

let userRockButton = document.querySelector('.user-rock')
let userPaperButton = document.querySelector('.user-paper')
let userScissorButton = document.querySelector('.user-scissor')

let computerRockButton = document.querySelector('.computer-rock');
let computerPaperButton = document.querySelector('.computer-paper');
let computerScissorButton = document.querySelector('.computer-scissor');

function getUserChoice() {

    return new Promise((resolve, reject) => {
        userRockButton.addEventListener('click', function () {
            userRockButton.style.backgroundColor = 'green'
            userRockButton.style.border = 'solid 2px green'

            userPaperButton.disabled = true
            userScissorButton.disabled = true

            console.log('User choice: rock');
            resolve('rock')

        })

        userPaperButton.addEventListener('click', function () {
            userPaperButton.style.backgroundColor = 'green'
            userPaperButton.style.border = 'solid 2px green'

            userRockButton.disabled = true
            userScissorButton.disabled = true

            console.log('User choice: paper');
            resolve('paper')

        })

        userScissorButton.addEventListener('click', function () {
            userScissorButton.style.backgroundColor = 'green'
            userScissorButton.style.border = 'solid 2px green'

            userRockButton.disabled = true
            userPaperButton.disabled = true

            console.log('User choice: scissor');
            resolve('scissor')

        })
    })

}


function getComputerChoice() {

    let computerChoice
    let n = Math.random() * 100

    if (n >= 0 && n < 33.3) {
        computerChoice = 'rock'

        computerRockButton.style.border = 'solid 2px red'
        computerRockButton.style.backgroundColor = 'red'

        computerPaperButton.disabled = true
        computerScissorButton.disabled = true
        console.log('Computer choice: ' + computerChoice);
        return computerChoice
    } else if (n >= 33.3 && n < 66.6) {
        computerChoice = 'paper'

        computerPaperButton.style.border = 'solid 2px red'
        computerPaperButton.style.backgroundColor = 'red'

        computerRockButton.disabled = true
        computerScissorButton.disabled = true
        console.log('Computer choice: ' + computerChoice);
        return computerChoice
    } else {
        computerChoice = 'scissor'

        computerScissorButton.style.border = 'solid 2px red'
        computerScissorButton.style.backgroundColor = 'red'

        computerRockButton.disabled = true
        computerPaperButton.disabled = true
        console.log('Computer choice: ' + computerChoice);
        return computerChoice
    }


}


function playRound(userChoice, computerChoice) {

    if(userChoice === "rock"){
        if (computerChoice === "rock"){
            console.log("Tie!")
        } else if(computerChoice === "paper"){
            computerScore +=1
            console.log("Computer wins!")
        } else if(computerChoice === "scissors"){
            userScore +=1
            console.log("You win!")
        }
    } else if (userChoice === "paper"){
        if (computerChoice === "rock"){
            userScore +=1
            console.log("You win!")
        } else if(computerChoice === "paper"){
            console.log("Tie!")
        } else if(computerChoice === "scissors"){
            computerScore +=1
            console.log("Computer wins!")
        }
    } else if (userChoice === "scissors"){
        if (computerChoice === "rock"){
            computerScore +=1
            console.log("Computer wins!")
        } else if(computerChoice === "paper"){
            userScore +=1
            console.log("You win!")
        } else if(computerChoice === "scissors"){
            console.log("Tie!")
        }
    }

}

function aspetta(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function resetButtons() {

    userRockButton.removeAttribute('style');
    userRockButton.disabled = false;
    userPaperButton.removeAttribute('style');
    userPaperButton.disabled = false;
    userScissorButton.removeAttribute('style');
    userScissorButton.disabled = false;

    computerRockButton.removeAttribute('style');
    computerRockButton.disabled = false;
    computerPaperButton.removeAttribute('style');
    computerPaperButton.disabled = false;
    computerScissorButton.removeAttribute('style');
    computerScissorButton.disabled = false;
}

async function playGame() {

    while (round <= totalRounds) {
        console.log('Round: ' + round)

        let userChoice = await getUserChoice()

        let computerChoice = getComputerChoice()

        playRound(userChoice, computerChoice)

        console.log('User score: '+ userScore);
        console.log('Computer score: '+ computerScore);
        console.log('End Round ' + round);
        round +=1;
        console.log('---')

        await aspetta(2000) // aspetta che l'utente prema qualcosa
        resetButtons()
    }


}


playGame()