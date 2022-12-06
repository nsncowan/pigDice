//business

function Game() {
  this.players = [];
  this.activePlayer = 0;
  this.playerCount = 2;
}

function Player() {
  this.turnScore = 0;
  this.totalScore = 0;
  this.currentRoll = 0;
  this.rollsThisTurn = 0;
  this.rolledYet = false;
}

function diceRoll() {
  return Math.floor((Math.random() * 6) + 2);
}

Game.prototype.switchPlayer = function () {
  if (this.activePlayer===0) {
    this.activePlayer = 1;
  } else {
    this.activePlayer = 0;
  }
  // if (this.playerCount = 1) {
  //   Player.chooseAction();
  // }
};

Player.prototype.rollDice = function() {
  this.rolledYet = true;
  let roll = diceRoll();
  if (roll === 1) {
    this.turnScore = 0;
    this.rollsThisTurn = 0;
    newGame.switchPlayer();
    this.currentRoll = roll;
    this.rolledYet = false;
  } else {
    this.turnScore += roll;
    this.currentRoll = roll;
    this.rollsThisTurn += 1;
  }
};

Player.prototype.endTurn = function() {
  this.totalScore += this.turnScore;
  this.turnScore = 0;
  this.rolledYet = false;
  this.rollsThisTurn = 0;
  newGame.switchPlayer();
};

Player.prototype.chooseAction = function() {
  if (this.rollsThisTurn <2) {
    this.rollDice;
  } else {
    this.endTurn;
  }
}

let newGame = new Game();
let player1 = new Player();
let player2 = new Player();
newGame.players.push(player1, player2);

// Player.prototype.aiLogic = function() {
  
// }


//UI

function displayScores() {
  document.querySelector("span#player1TotalScore").innerText = player1.totalScore;
  document.querySelector("span#player2TotalScore").innerText = player2.totalScore;
  document.querySelector("span#player1CurrentRoll").innerText = player1.currentRoll;
  document.querySelector("span#player2CurrentRoll").innerText = player2.currentRoll;
  document.querySelector("span#player1TurnScore").innerText = player1.turnScore;
  document.querySelector("span#player2TurnScore").innerText = player2.turnScore;
}

function manageUI () {
  let p1Controls = document.getElementById("player1Controls")
  let p2Controls = document.getElementById("player2Controls")

  if (newGame.activePlayer === 0 ) {
    p1Controls.removeAttribute("class", "hidden");
    p2Controls.setAttribute("class", "hidden");
  } else {
    p1Controls.setAttribute("class", "hidden");
    p2Controls.removeAttribute("class", "hidden");
  }

  if (newGame.players[newGame.activePlayer].rolledYet === false) {
      document.getElementById(`passDicePlayer${(newGame.activePlayer)+1}`).setAttribute("class", "hidden");
  }
}

function amIWinner() {
  let p1Controls = document.getElementById("player1Controls")
  let p2Controls = document.getElementById("player2Controls")

  if ((player1.totalScore + player1.turnScore) >= 100) {
    player1.totalScore += player1.turnScore;
    p1Controls.setAttribute("class", "hidden");
    p2Controls.setAttribute("class", "hidden");
    document.getElementById("winner").removeAttribute("class");
    document.getElementById("winnerIndex").innerText = "1";
  } else if ((player2.totalScore + player2.turnScore) >= 100) {
    player2.totalScore += player2.turnScore;
    p1Controls.setAttribute("class", "hidden");
    p2Controls.setAttribute("class", "hidden");
    document.getElementById("winner").removeAttribute("class");
    document.getElementById("winnerIndex").innerText = "2";
  }
}

window.addEventListener("load", function() {
  let player1RollBtn = document.getElementById("rollDicePlayer1");
  let player1PassBtn = document.getElementById("passDicePlayer1");
  let player2RollBtn = document.getElementById("rollDicePlayer2");
  let player2PassBtn = document.getElementById("passDicePlayer2");
  let numberOfPlayers = document.getElementById("numberOfPlayers");

  numberOfPlayers.addEventListener('submit', function(event) {
    event.preventDefault();
    
    newGame.playerCount = parseInt(document.querySelector('input[name="userCount"]:checked').value);
  });

  // document.querySelector('input[name="genderS"]:checked').value;

  player1RollBtn.addEventListener('click', function() {
    newGame.players[newGame.activePlayer].rollDice();
    document.getElementById("passDicePlayer1").removeAttribute("class", "hidden");
    amIWinner();
    displayScores();
    manageUI();
  });

  player1PassBtn.addEventListener('click', function () {
    newGame.players[newGame.activePlayer].endTurn();
    document.getElementById("passDicePlayer1").setAttribute("class", "hidden");
    amIWinner();
    displayScores();
    manageUI();
  });


  player2RollBtn.addEventListener('click', function () {
    newGame.players[newGame.activePlayer].rollDice();
    document.getElementById("passDicePlayer2").removeAttribute("class", "hidden");
    amIWinner();
    displayScores();
    manageUI();
  });

  player2PassBtn.addEventListener('click', function () {
    newGame.players[newGame.activePlayer].endTurn();
    document.getElementById("passDicePlayer2").setAttribute("class", "hidden");
    amIWinner();
    displayScores();
    manageUI();
  });
});



/* DRAFTS
function pigDice () {
  let player1 = new Player(0, 0, true);
  let player2 = new Player(0, 0, false);
  //let actions = ["roll", "pass"]
  let rollBtn = document.getElementById("rollDice");
  let passBtn = document.getElementById("passDice");
  let playerChoice = rollBtn || passBtn
  if (player1.activePlayer === "true") {
    player1.turnLogic(playerChoice);
  }
  
}



function displayScores() {
  document.querySelector("p#player1TotalScore").innerText= 
  document.querySelector("p#player2TotalScore").innerText=
}
 
window.addEventListener("load", function (){
  document.querySelector("").addEventListener("roll", //function);
});




const player = {
  currentChoice: null
}
const computer = {
  currentChoice: null
}
const choices = ["Rock", "Paper", "Scissors"];

player.currentChoice = choices[2];
var rockBtn = document.getElementById('rock');
var paprBtn = document.getElementById('paper');
var scirBtn = document.getElementById('scissors');

if(rockBtn || paprBtn || scirBtn) {
    rockBtn.addEventListener('click', updateVar);
    paprBtn.addEventListener('click', updateVar);
    scirBtn.addEventListener('click', updateVar);
}
function updateVar(event){
    if(event.target.id == 'rock'){
        player.currentChoice = choices[0];
    } else if (event.target.id == 'paper'){
        player.currentChoice = choices[1];
    } else if (event.target.id == 'scissors'){
        player.currentChoice = choices[2];
    }
    console.log(player.currentChoice);
}
*/