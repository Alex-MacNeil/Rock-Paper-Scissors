


//my global variables

const items = ["rock", "scissors", "paper"];
let playerInput;

//this code here makes the computer choose a random answer for rock paper scissors
function computerPlay() {
  return items[Math.floor(Math.random() * items.length)];
}



// //this code here is supposed to allow the auto selection to be called in the rounds w/ the player
// let computerSelection = computerPlay();




//this code here tells the computer what a win is vs a loss and a draw for the player

function playRound() {
  let playerSelection = "rock" || "scissors" || "paper"
  let computerSelection = computerPlay();
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase()

  if (playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "paper" && computerSelection == "rock" ||
    playerSelection == "scissors" && computerSelection == "paper") {
    return "You WIN!";
  } else if (playerSelection = "rock" && computerSelection == "paper" ||
    playerSelection == "paper" && computerSelection == "scissors" ||
    playerSelection == "scissors" && computerSelection == "rock") {
    return "You Lose!";
  } else {
    return "Draw!";
  }
}

//this code here outlines the game proper, the rounds (5), scores, and who is declared winner
function game() {

  let numOfRounds = 5;
  let playerScore = 0;
  let computerScore = 0;



  //prompt needs to trigger 5x 
  //scores need to be visible to player
  //scores need to change each round 

  //Prompt user for input
  //take input and compare to computer selection 
  //select "winner"
  //update score 

  for (let i = 0; i < numOfRounds; i++) {

    playerInput = prompt("Select rock, scissors, or paper");
    let result = playRound();
    alert(result);
    if (result == "You WIN!") {

      playerScore++;

    } else if (result == "You Lose!") {

      computerScore++;

    }

  }





  if (playerScore < computerScore) {
    return "Computer Wins!";
  } else if (playerScore > computerScore) {
    return "Player Wins!";
  } else {
    return "Draw";
  }


}
  //prompt in playRound to get things going when game() called
  //if player win, increase player score  attempted in playRound Func
  //If computer win, increase computer score ""
  //check scores  in playRound, which is in the scope of game-- so should work?
  //report player winner or loser  failing because "playerSelection is undefined"???
