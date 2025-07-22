let your_score = 0;
let computer_score = 0;
let draw_score = 0;

function computer_choice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function makeMove(playerChoice) {
  let computerChoice = computer_choice();

  document.querySelector('.moves-chosen').innerHTML = `
    You 
    <img src="images/${playerChoice}-emoji.png" alt="Your Move">
    <img src="images/${computerChoice}-emoji.png" alt="Computer Move">
    Computer
  `;

  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a Draw!";
    draw_score++;
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "You Win!";
    your_score++;
  } else {
    result = "Computer Wins!";
    computer_score++;
  }

  document.querySelector('.overall-result').innerHTML = `
    Wins: ${your_score}, 
    Losses: ${computer_score}, 
    Draws: ${draw_score}
  `;
}

function resetScore() {
  your_score = 0;
  computer_score = 0;
  draw_score = 0;
  document.querySelector('.overall-result').innerHTML = `
    Wins: 0, Losses: 0, Draws: 0
  `;
  document.querySelector('.moves-chosen').innerHTML = '';
}

let autoPlaying =false;
let IntervalId;

function autoPlay(){
  if (autoPlaying===false){
  IntervalId=setInterval(function(){
  const your_choice=computer_choice();
  makeMove(your_choice);
  },1000);
  autoPlaying=! autoPlaying;
}
else{
  clearInterval(IntervalId);
  autoPlaying=! autoPlaying;
}
}
