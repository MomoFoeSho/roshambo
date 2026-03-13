function getComputerChoice() {

    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}
console.log(getComputerChoice());

function getHumanChoice(userInput) {

    const firstLetter = userInput.charAt(0).toUpperCase();
    const restOfStr = userInput.slice(1).toLowerCase();

    return firstLetter + restOfStr;



}

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;


function playRound(computerChoice, humanChoice) {


    if (humanChoice === computerChoice) {
        console.log("It's a tie!")

    } else if ((humanChoice === 'Rock' && computerChoice === 'Scissors') || (humanChoice === 'Paper' && computerChoice === 'Rock') ||
        (humanChoice === 'Scissors' && computerChoice === 'Paper')) {
        humanScore++;
        console.log("You win!")
    } else {
        computerScore++;
        console.log("You lose!")

    }

    roundsPlayed++;


}

for (let i = 0; i < 5; i++) {

    let userInput = prompt("Choose Rock, Paper, or Scissors");
    console.log(userInput);
    const humanSelection = getHumanChoice(userInput);
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

}


console.log("Final score: Player:" + humanScore + " " + "|" + " " + "Computer:" + computerScore)






