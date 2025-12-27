function getComputerChoice() {

    const randomNumber = Math.random()

    if (randomNumber <= .3333) {
        return "Rock";
    } else if (randomNumber <= .6667) {
        return "Paper";
    } else {
        return "Scissors";
    }   

}

console.log(getComputerChoice());

let userInput = prompt("Choose rock, paper, or scissors");

function getHumanChoice() {

    return userInput;

}

console.log(userInput);

humanScore = 0
computerScore = 0

function playRound(computerChoice, humanChoice) {

    
    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerCHoice();

playRound(humanSelection, computerSelection);