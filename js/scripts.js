function Player(turnScore, totalScore, activePlayer) = {
  this.turnScore = turnScore;
  this.totalScore = totalScore;
  this.activePlayer = activePlayer;
}

Player.prototype.turnLogic = function(Player, action) {
  Player.activePlayer=true;
  if (action === roll) {
    let roll = diceRoll();
    if (roll === 1) {
      Player.turnScore = 0 
      Player.activePlayer = false;
    } else {
      Player.turnScore += roll;
    }
  } else {
    Player.totalScore += Player.turnScore;
    Player.activePlayer = false;
  }
  
  //update total score
  Player.activePlayer=false;
}

let player1 = new Player(0, 0, true);
let player2 = new Player(0, 0, false);

// let Player1 = {
//   turnScore: 0,
//   totalScore: 0,
//   activePlayer: true
// };

// let Player2 = {
//   turnScore: 0,
//   totalScore: 0,
//   activePlayer: false
// };
 

function diceRoll() {
  return Math.floor((Math.random() * 6) + 1);
}

function turnLogic (player, ) {

}

function pigDice () {
  
}


/* function pigDice() {
  create player 1 object
  create player 2 object

  create totalscore variable
  diceroll to start turn
  create turnscore variable with results of diceroll
  branching tree
  if player chooses roll 
  run diceroll
  update turnscore

  if player chooses pass
  update total score variable

  figure out how to pass to other player?
  -->if diceroll === 1 or player chooses hold
}
*/