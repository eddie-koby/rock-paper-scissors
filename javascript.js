let playerScore = 0;
let compScore = 0;
let playerGamesWon = 0;
let compGamesWon = 0;


//return a random computer choice
function getComputerChoice() {
    //get a random number between 0 and 2
    let num = Math.floor(Math.random() * 3);
    //use a switch to return a choice
    switch(num) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
        default:
            return "Something went wrong";
            break;
    }
}

//play one round of the game
function round(player, comp) {
    player = player.toUpperCase();

    switch(player) {
        case "ROCK":
            switch(comp) {
                case "Rock":
                    return 1;
                    break;
                case "Paper":
                    return 0;
                    break;
                case "Scissors":
                    return 2;
                    break;
            }
            break;
        case "PAPER":
            switch(comp) {
                case "Rock":
                    return 2;
                    break;
                case "Paper":
                    return 1;
                    break;
                case "Scissors":
                    return 0;
                    break;
            }
            break;
        case "SCISSORS":
            switch(comp) {
                case "Rock":
                    return 0;
                    break;
                case "Paper":
                    return 2;
                    break;
                case "Scissors":
                    return 1;
                    break;
            }
            break;
    }
}

function game(playerChoice) {
    let compChoice;
    let result;
    //initialize scores
    compChoice = getComputerChoice();
    result = round(playerChoice, compChoice);

    switch(result) {
        case 0:
            compScore += 1;
            computerScore.textContent = "Computer: " + compScore;
            resultText.textContent = "You lost...";
            break;
        case 1:
            resultText.textContent = "You drew.";
            break;
        case 2:
            playerScore += 1;
            yourScore.textContent = "You: " + playerScore;
            resultText.textContent = "You won!";
            break;
    }
    //report winner and reset game after best of 5
    if (playerScore === 3 || compScore === 3) {
        if(playerScore > compScore) {
            resultText.textContent = "Congrats! You won the best of 5";
            playerGamesWon += 1;
        }
        else {
            resultText.textContent = "Uh oh... You lost. Try again";
            compGamesWon += 1;
        }
        playerScore = 0;
        compScore = 0;
        yourScore.textContent = "You: " + playerScore;
        computerScore.textContent = "Computer: " + compScore;
    }
    
}



const rock = document.querySelector(".rock");
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const yourScore = document.querySelector(".youScore");
const computerScore = document.querySelector(".compScore");
const resultText = document.querySelector(".result");

rock.addEventListener("click", () => game("ROCK"));
paper.addEventListener("click", () => game("PAPER"));
scissors.addEventListener("click", () => game("SCISSORS"));
