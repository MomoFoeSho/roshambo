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

    

    function humanChoice(str) {

        const firstLetter = str.charAt(0).toUpperCase();
        const restOfStr = str.slice(1).toLowerCase();
    }
    
    return firstLetter + restOfStr;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);