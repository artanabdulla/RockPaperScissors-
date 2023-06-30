const rockBtn = document.getElementById("rock-btn");
const PaperBtn = document.getElementById("paper-btn");
const ScissorsBtn =document.getElementById("scissord-btn");
const computerWonn = document.getElementById("computer");
const playerr = document.getElementById("player");
const DrawP = document.getElementById("draw");
const Reset = document.getElementById("reset-btn");
const paragraphP = document.getElementById("picked");
const Result = document.getElementById("Result-final");
const game = ["rock", "paper", "scissors"];

let score = JSON.parse(localStorage.getItem("score"));

 score = {
    wins: 0,
    loses:0,
    draw:0
};


JSON.parse(localStorage.getItem("score"));

let output ="";
let ComputerWon = false;
let PlayerWon = false;
let Draw = false;


function updateScore() { 
    playerr.textContent = `Player won: ${score.wins} times`;
    computerWonn.textContent = `Computer won: ${score.loses} times`;
    DrawP.textContent = `Draw: ${score.draw} times`;
}

updateScore();

rockBtn.addEventListener("click", function() {
    playGame("rock");

})

PaperBtn.addEventListener("click", function() {
    playGame("paper");

})

ScissorsBtn.addEventListener("click", function() {
    playGame("scissors");
   
})

Reset.addEventListener("click", function(){
    ResetScore();

})

function get_random(gameF) {
    const randomIndex = Math.floor(Math.random()* gameF.length);
    const rez = gameF[randomIndex];
    return rez;
  }


function playGame(playerMove) {
    const result = get_random(game);

    if (playerMove === "rock") {
    if (result === "paper") {
        output = "You lose";
        ComputerWon = true;
        PlayerWon = false;
        Draw = false;
    }
    else if (result === "scissors") {
        output ="you Win";
        PlayerWon = true;
        ComputerWon = false;
        Draw = false;
        }
    else {
        output = "Draw";
        Draw = true;
        ComputerWon = false;
        PlayerWon = false;
    }
}

 else if (playerMove === "paper") {
    if (result === "rock") {
        output = "You win";
        PlayerWon = true;
        Draw = false;
        ComputerWon = false;
    }
    else if (result === "paper") {
       output = "Draw"; 
       Draw = true;
       ComputerWon = false;
       PlayerWon = false;
    }
    else { 
        output = "You lose"; 
        ComputerWon = true;
        PlayerWon = false;
        Draw = false;
    }
}

else if (playerMove === "scissors") {
    if (result === "rock") {
        output ="You lose";
        ComputerWon = true;
        PlayerWon = false;
        Draw = false;
    }
    else if (result === "paper") {
      output ="You win";
      PlayerWon = true;
      ComputerWon = false;
      Draw = false;
    }
    else { 
      output ="Draw";
      Draw = true; 
      ComputerWon = false;
      PlayerWon = false;
    }

}
if (PlayerWon) {
    score.wins += 1;
    playerr.textContent = `Player won: ${score.wins} times`;
}
else if (ComputerWon) {
    score.loses +=1;
    computerWonn.textContent = `Computer won: ${score.loses} times`;
}
else {
    score.draw += 1;
    DrawP.textContent = `Draw: ${score.draw} times`;

}
    paragraphP.innerHTML = `You: <img src="./images/${playerMove}-emoji.png" class="picked">
   -<img src="./images/${result}-emoji.png" class="picked">  Computer`;
    Result.innerHTML = `The game: ${output}`; 
   
   
}
localStorage.setItem("score", JSON.stringify(score));

function ResetScore() {
    score.wins = 0;
    score.loses = 0;
    score.draw = 0;
    playerr.textContent = `Player won: ${score.wins} times`;
    computerWonn.textContent = `Computer won: ${score.loses} times`;
    DrawP.textContent = `Draw: ${score.draw} times`;
    paragraphP.textContent = "";
    
}






