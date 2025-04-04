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

function playRound(humanChoice, computerChoice) {
    if (humanSelection === 'rock' && computerSelection === 'scissors' || humanSelection === 'paper' && computerSelection === 'rock' || humanSelection === 'scissors' && computerSelection === 'paper') {
        humanScore++;
        choices.textContent = `You win, ${humanChoice} beats computer choice ${computerChoice}`
        results.textContent = `Score is: User= ${humanScore} | Comp= ${computerScore}`
    } else if (humanSelection === computerSelection) {
        choices.textContent = 'Draw.';
        results.textContent = `Score is: User= ${humanScore} | Comp= ${computerScore}`
    } else {
        computerScore++;
        choices.textContent = `You lost, Computer chose ${computerChoice} which beats ${humanChoice}`;
        results.textContent = `Score is: User= ${humanScore} | Comp= ${computerScore}`
    }
}

function firstTo5(){
    if (humanScore === 5 ){
        winner.textContent = 'You won first to 5!';
        rockChoice.disabled = true;
        paperChoice.disabled = true;
        scissorsChoice.disabled = true;
    }else if (computerScore === 5){
        winner.textContent = 'You lost first to 5.';
        rockChoice.disabled = true;
        paperChoice.disabled = true;
        scissorsChoice.disabled = true;
    }
}

let humanScore = 0;
let computerScore = 0;

const rockChoice = document.querySelector('.rock');
const paperChoice = document.querySelector('.paper');
const scissorsChoice = document.querySelector('.scissors');
const choices = document.querySelector('.choices');
const results = document.querySelector('.results');
const winner = document.querySelector('.winner');

rockChoice.addEventListener('click', () => {
    humanSelection = 'rock';
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    firstTo5();

})

paperChoice.addEventListener('click', () => {
    humanSelection = 'paper';
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    firstTo5();
})

scissorsChoice.addEventListener('click', () => {
    humanSelection = 'scissors';
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    firstTo5();
})