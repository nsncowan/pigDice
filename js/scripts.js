function Player(turnScore, totalScore, activePlayer) {
  this.turnScore = turnScore;
  this.totalScore = totalScore;
  this.activePlayer = activePlayer;
}

function diceRoll() {
  return Math.floor((Math.random() * 6) + 1);
}

Player.prototype.turnLogic = function(action) {
  this.activePlayer=true;
  if (action === "roll") {
    let roll = diceRoll();
    if (roll === 1) {
      this.turnScore = 0 
      this.activePlayer = false;
      return roll;
    } else {
      this.turnScore += roll;
      return roll;
    }
  } else {
    this.totalScore += this.turnScore;
    this.turnScore = 0;
    this.activePlayer = false;
  }
};

Player.prototype.rollDice = function() {
  this.activePlayer = true;
  let roll = diceRoll();
  if (roll === 1) {
    this.turnScore = 0;
    this.activePlayer = false;
    return roll;
  } else {
    this.turnScore += roll;
    return roll;
  }
};

Player.prototype.endTurn = function() {
  this.totalScore += this.turnScore;
  this.activePlayer = false;
  return this.totalScore;
}


//UI

let player1 = new Player(0, 0, true);
let player2 = new Player(0, 0, false);

function getActiveUser() {
  let activeUser;
  if (player1.activePlayer = true) {
    activeUser = player1;
  }
  else {
    activeUser = player2;
  }
  return activeUser;
}

function pigDice () {
  let currentUser = getActiveUser();
  let rollBtn = document.getElementById("rollDice");
  let passBtn = document.getElementById("passDice");
  rollBtn.addEventListener('click', currentUser.prototype.rollDice);
  passBtn.addEventListener('click', currentUser.prototype.endTurn);
}


/*
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