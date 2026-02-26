let userScore = 0
let computerScore = 0
let round = 1
const totalRounds = 5
let roundsLeft = totalRounds

let roundNumber = document.querySelector('.round p')
roundNumber.textContent = ''.concat(round,'/',totalRounds)

let userScoreNumber = document.querySelector('.score-user p')
userScoreNumber.textContent = userScore

let computerScoreNumber = document.querySelector('.score-computer p')
computerScoreNumber.textContent = computerScore

let resultArea = document.querySelector('.result')
resultArea.classList.add('hidden')
let resultText = document.querySelector('.result h2')


let userRockButton = document.querySelector('.user-rock')
let userPaperButton = document.querySelector('.user-paper')
let userScissorButton = document.querySelector('.user-scissor')

let computerRockButton = document.querySelector('.computer-rock');
let computerPaperButton = document.querySelector('.computer-paper');
let computerScissorButton = document.querySelector('.computer-scissor');

let playAgainButton = document.querySelector('.play-again button')
playAgainButton.addEventListener('click', function () {
    resetGame()
})

let playAgainArea = document.querySelector('.play-again')
playAgainArea.classList.add('hidden')

function getUserChoice() {

    return new Promise((resolve, reject) => {
        userRockButton.addEventListener('click', function () {
            userRockButton.style.border = 'solid 2px green'

            userPaperButton.disabled = true
            userScissorButton.disabled = true

            console.log('User choice: rock');
            resolve('rock')

        }, { once: true })

        userPaperButton.addEventListener('click', function () {
            userPaperButton.style.border = 'solid 2px green'

            userRockButton.disabled = true
            userScissorButton.disabled = true

            console.log('User choice: paper');
            resolve('paper')

        }, { once: true })

        userScissorButton.addEventListener('click', function () {
            userScissorButton.style.border = 'solid 2px green'

            userRockButton.disabled = true
            userPaperButton.disabled = true

            console.log('User choice: scissor');
            resolve('scissor')

        }, { once: true })
    })

}


function getComputerChoice() {

    let computerChoice
    let n = Math.random() * 100

    if (n >= 0 && n < 33.3) {
        computerChoice = 'rock'

        computerRockButton.style.border = 'solid 2px red'

        computerPaperButton.disabled = true
        computerScissorButton.disabled = true
        console.log('Computer choice: ' + computerChoice);
        return computerChoice
    } else if (n >= 33.3 && n < 66.6) {
        computerChoice = 'paper'

        computerPaperButton.style.border = 'solid 2px red'

        computerRockButton.disabled = true
        computerScissorButton.disabled = true
        console.log('Computer choice: ' + computerChoice);
        return computerChoice
    } else {
        computerChoice = 'scissor'

        computerScissorButton.style.border = 'solid 2px red'

        computerRockButton.disabled = true
        computerPaperButton.disabled = true
        console.log('Computer choice: ' + computerChoice);
        return computerChoice
    }

}


function playRound(userChoice, computerChoice) {

    let resultTextStyle = ''
    let resultTextContent = ''

    if(userChoice === 'rock'){
        if (computerChoice === 'rock'){
            console.log('Tie!')
            resultTextStyle = 'color:blue'
            resultTextContent = 'Tie!'
        } else if(computerChoice === 'paper'){
            computerScore +=1
            console.log('Computer wins!')
            resultTextStyle = 'color:red'
            resultTextContent = 'Computer wins!'
        } else if(computerChoice === 'scissor'){
            userScore +=1
            console.log('You win!')
            resultTextStyle = 'color:green'
            resultTextContent = 'You win!'
        }
    } else if (userChoice === 'paper'){
        if (computerChoice === 'rock'){
            userScore +=1
            console.log('You win!')
            resultTextStyle = 'color:green'
            resultTextContent = 'You win!'
        } else if(computerChoice === 'paper'){
            console.log('Tie!')
            resultTextStyle = 'color:blue'
            resultTextContent = 'Tie!'
        } else if(computerChoice === 'scissor'){
            computerScore +=1
            console.log('Computer wins!')
            resultTextStyle = 'color:red'
            resultTextContent = 'Computer wins!'
        }
    } else if (userChoice === 'scissor'){
        if (computerChoice === 'rock'){
            computerScore +=1
            console.log('Computer wins!')
            resultTextStyle = 'color:red'
            resultTextContent = 'Computer wins!'
        } else if(computerChoice === 'paper'){
            userScore +=1
            console.log('You win!')
            resultTextStyle = 'color:green'
            resultTextContent = 'You win!'
        } else if(computerChoice === 'scissor'){
            console.log('Tie!')
            resultTextStyle = 'color:blue'
            resultTextContent = 'Tie!'
        }
    }

    resultArea.classList.remove('hidden')
    resultText.style = resultTextStyle
    resultText.textContent = resultTextContent

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

    resultArea.classList.add('hidden')
}

function updateScore() {

    if(round <= totalRounds){
        roundNumber.textContent = ''.concat(round,'/',totalRounds)
    }
    userScoreNumber.textContent = userScore
    computerScoreNumber.textContent = computerScore
    resultText.textContent = ''
}

function resetGame(){

    userScore = 0
    computerScore = 0
    round = 1
    roundsLeft = totalRounds
    resetButtons()
    roundNumber.textContent = ''.concat(round,'/',totalRounds)
    userScoreNumber.textContent = userScore
    computerScoreNumber.textContent = computerScore
    resultText.textContent = ''
    playAgainArea.classList.add('hidden');

    playGame()
}

function finalResult() {

    if(userScore > computerScore){
        resultText.style = 'color:green'
        resultText.textContent = 'You won the game!'
    } else if (computerScore > userScore){
        resultText.style = 'color:red'
        resultText.textContent = 'Computer won the game!'
    } else {

        resultText.style = 'color:blue'
        resultText.textContent = 'No one won!'
    }

    resultArea.classList.remove('hidden')

    userRockButton.disabled = true;
    userPaperButton.removeAttribute('style');
    userPaperButton.disabled = true;
    userScissorButton.removeAttribute('style');
    userScissorButton.disabled = true;

    computerRockButton.removeAttribute('style');
    computerRockButton.disabled = true;
    computerPaperButton.removeAttribute('style');
    computerPaperButton.disabled = true;
    computerScissorButton.removeAttribute('style');
    computerScissorButton.disabled = true;

    playAgainArea.classList.remove('hidden');

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

        await aspetta(2000) // aspetta 2s

        round +=1;

        // Verifico se un giocatore ha vinto prima della fine di tutti i round
        roundsLeft -= 1;
        console.log('Rounds left: ' + roundsLeft)
        let vantaggio = Math.abs(userScore - computerScore)
        if( vantaggio > roundsLeft ){
            resetButtons()
            updateScore()
            finalResult()
            return;
        }

        console.log('---')
        resetButtons()
        updateScore()

    }

    finalResult()
}


playGame()