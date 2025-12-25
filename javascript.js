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

