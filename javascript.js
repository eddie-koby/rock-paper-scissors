
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

function game() {
    let playerChoice;
    let compChoice;
    let result;
    //initialize scores
    let playerScore = 0;
    let compScore = 0;
    //play 5 rounds
    for(let i = 0; i < 5; i++) {
        compChoice = getComputerChoice();
        playerChoice = prompt("Enter your choice:");
        result = round(playerChoice, compChoice);

        switch(result) {
            case 0:
                console.log("You lost...");
                compScore += 1;
                break;
            case 1:
                console.log("You drew.");
                i--;
                break;
            case 2:
                console.log("You won!");
                playerScore += 1;
                break;
        }
    }
    //report winner
    if(playerScore > compScore) {
        console.log("Congrats! You won the best of 5");
    }
    else {
        console.log("Uh oh... You lost. Try again");
    }
}

game();