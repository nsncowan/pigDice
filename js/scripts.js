function Player(turnScore, totalScore, activePlayer) {
  this.turnScore = turnScore;
  this.totalScore = totalScore;
  this.activePlayer = activePlayer;
}

function diceRoll() {
  return Math.floor((Math.random() * 6) + 1);
}

Player.prototype.turnLogic = function(action) {
  Player.activePlayer=true;
  if (action === "roll") {
    let roll = diceRoll();
    if (roll === 1) {
      Player.turnScore = 0 
      Player.activePlayer = false;
    } else {
      Player.turnScore += roll;
    }
  } else {
    Player.totalScore += Player.turnScore;
    Player.turnScore = 0;
    Player.activePlayer = false;
  }
};

let player1 = new Player(0, 0, true);
let player2 = new Player(0, 0, false);




function pigDice () {
  
}

//UI 

/*

show/hide which players turn based on activeplayer status

function pigDice(){
  create variables for roll
  create variable for pass
  create variable for player 1 score display
  create variable for player 2 score display
  identify active player
  run turnLogic for active player
}


*/
