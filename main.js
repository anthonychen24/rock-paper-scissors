let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return 'rock';
    }else if (random === 1){
        return 'paper';
    }else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let humanChoice = prompt('Enter rock paper or scissors','')
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanSelection === 'rock' && computerSelection === 'scissors' || humanSelection === 'paper' && computerSelection === 'rock' || humanSelection === 'scissors' && computerSelection === 'paper') {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else if (humanSelection === computerSelection) {
            console.log('Draw.');
        } else {
            computerScore++;
            console.log(`You lose. Computer chose ${computerChoice} which beats ${humanChoice}`);
        }
}

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice().toLowerCase();

playRound(humanSelection, computerSelection);