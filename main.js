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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i=0; i<5; i++){
        function playRound(humanChoice, computerChoice) {
            if (humanSelection === 'rock' && computerSelection === 'scissors' || humanSelection === 'paper' && computerSelection === 'rock' || humanSelection === 'scissors' && computerSelection === 'paper') {
                humanScore++;
                console.log(`You win! ${humanChoice} beats computer choice ${computerChoice}`);
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
        console.log(`Score is: User= ${humanScore} | Comp= ${computerScore}`);    
    }
    
    if (humanScore > computerScore){
        console.log('You won best out of 5 rounds!');

    } else if (humanScore === computerScore) {
        console.log('It\'s a draw. Try again! ')
    }
    else {
        console.log('You lost best out of 5 rounds.');
    }
}

playGame();