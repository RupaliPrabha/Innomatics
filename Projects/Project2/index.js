const categories = {
  fruits: ["🍎", "🍌", "🍉", "🍓", "🍍", "🥝", "🍇", "🍒"],
  animals: ["🐶", "🐱", "🦊", "🐼", "🐻", "🐰", "🦁", "🐸"],
  emojis: ["😀", "😂", "😍", "😎", "🤩", "😡", "🥶", "😴"],
  planets: ["🪐", "🌍", "🌕", "🌞", "🌑", "🌟", "☄️", "🌙"],
  flowers:["🪻","🌷","🌼","🌻","🌺","🌹","🪷","🌸"],
  flags:["🏁","🏳️","🏴󠁧󠁢󠁥󠁮󠁧󠁿","🏳️‍🌈","🎌","🏳️‍⚧️","🚩","⛳"]
  
};

let timerElemt = document.getElementById("timer");
let scoreElemnt = document.getElementById("score");
let gameBoard = document.getElementById("game-board");
let resultConatiner = document.getElementById("result-container");

let selectedCategory = [];
let flippedCards = [];
let timeLeft = 30;
let score = 0;
let matchedPairs = 0;
let gameInterval;
let currentCategory = "";

function startGame(category) {
  currentCategory = category;

  document.getElementById("landing-page").classList.add("hidden");
  document.getElementById("game-container").classList.remove("hidden");

  selectedCategory = [...categories[category], ...categories[category]];
  selectedCategory.sort(() => Math.random() - 0.5);

  gameBoard.innerHTML = "";

  selectedCategory.forEach((emoji, index) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.dataset.emoji = emoji;
    card.dataset.index = index;
    card.innerHTML = "❓";
    card.addEventListener("click", flipCard);
    gameBoard.appendChild(card);
  });

  timeLeft = 30;
  score = 0;
  matchedPairs = 0;
  timerElemt.textContent = timeLeft;
  scoreElemnt.textContent = score;

  clearInterval(gameInterval);
  gameInterval = setInterval(countDown, 1000);
}

function flipCard() {
  if (flippedCards.length === 2) return;

  let card = this;
  if (card.classList.contains("flipped")) return;

  card.classList.add("flipped");
  card.innerHTML = card.dataset.emoji;
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    setTimeout(checkMatch, 800);
  }

 
}

const matchSound = new Audio("assets/sounds/match.mp3");
function checkMatch() {
  let [card1, card2] = flippedCards;
  if (card1.dataset.emoji === card2.dataset.emoji) {
    card1.style.backgroundColor = "#4ef0f0";
    card2.style.backgroundColor = "#4ef0f0";
    
    
    matchedPairs++;
    score += 10;
    matchSound.play();
  } else {
    card1.classList.remove("flipped");
    card2.classList.remove("flipped");
    card1.innerHTML = "❓";
    card2.innerHTML = "❓";
  }
  flippedCards = [];
  scoreElemnt.textContent = score;
  timerElemt.textContent = timeLeft;

  const winSound = new Audio("assets/sounds/win.mp3");

  if (matchedPairs === 8) {
    clearInterval(gameInterval);
    setTimeout(() => showResult("🎉🎉You won the Game 🎉🎉"), 500);
    winSound.play();
  }
}

function countDown() {
  scoreElemnt.textContent = score;
 
  timeLeft--;
  timerElemt.textContent = timeLeft;

  const looseSound = new Audio("assets/sounds/loose.mp3");

  
  if(timeLeft===0){
    clearInterval(gameInterval);

    showResult("Game Over :( Try Again.");
    looseSound.play()

  }

}

function showResult(message) {
  resultConatiner.innerHTML = `<h2>${message}</h2>
  <p>Time left: ${timeLeft} sec | Score: ${score}</p>
   <button onclick="playAgain()">Play Again </button>
    <button  onclick="restartGame()">Home</button>`;

  resultConatiner.classList.remove("hidden");
  document.getElementById("game-container").classList.add("hidden");
}





function playAgain() {

startGame(currentCategory);

  document.getElementById("game-container").classList.remove("hidden");
  document.getElementById("result-container").classList.add("hidden");
}

function restartGame() {

  clearInterval(gameInterval);
  timeLeft = 30;
  score = 0;
  matchedPairs = 0;
  flippedCards = [];
  selectedCategory = [];
  currentCategory = "";

  timerElemt.textContent = timeLeft;
  scoreElemnt.textContent = score;
  gameBoard.innerHTML = "";
  resultConatiner.innerHTML = "";

  resultConatiner.classList.add("hidden");
  document.getElementById("game-container").classList.add("hidden");
  document.getElementById("landing-page").classList.remove("hidden");
}


