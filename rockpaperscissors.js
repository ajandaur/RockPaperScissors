function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

// Write a fucntions that plays a single round of the game 
function playRound(playerSelection, computerSelection) {
    let result = ""
    // if: player beats computer
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) {


        result = ('You win! ' + playerSelection + ' beats ' + computerSelection)
    } 
    // else if: its a tie 
    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection)
    }
    // else: computer beats player
    else {
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection)
    }

    return result
}

function game() {
    for (let i = 0; i < 5; i++) {
        // Runs 5 times 
        var playerSelection = window.prompt("Enter rock, paper, or scissors").toLowerCase()
        const computerSelection = computerPlay();

        result = playRound(playerSelection, computerSelection)
        console.log(result)
        
    }

}