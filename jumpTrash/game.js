const dino = document.getElementById('dino');
const gameContainer = document.getElementById('gameContainer');
const restartButton = document.getElementById('restartButton');
const scoreDisplay = document.getElementById('scoreDisplay');
let isJumping = false;
let position = 0;
let gravity = 0.9;
let jumpCount = 0;
let isGameOver = false;
let score = 0;


function jump() {
  if (!isJumping && !isGameOver) {
    isJumping = true;
    jumpCount = 0;
    const jumpInterval = requestAnimationFrame(jumpUp);
  }
}

function jumpUp() {
  const jumpHeight = 500;
  if (jumpCount < jumpHeight) {
    jumpCount += 10;
    position += gravity * 2;
    dino.style.bottom = position + 'px';
    requestAnimationFrame(jumpUp);
  } else {
    jumpDown();
  }
}

function jumpDown() {
  if (position > 0) {
    position -= gravity * 2;
    dino.style.bottom = position + 'px';
    requestAnimationFrame(jumpDown);
  } else {
    isJumping = false;
  }
}
function createObstacle() {
  if (isGameOver) return;
  const obstacle = document.createElement('img');
  obstacle.classList.add('obstacle');
  obstacle.style.left = '600px';
  gameContainer.appendChild(obstacle);
  let obstaclePosition = 600;
  const randomImageIndex = Math.floor(Math.random() * 2);
  const imageSrc = randomImageIndex === 0 ? 'img/detersivo1.png' : 'img/detersivo2.png';
  obstacle.src = imageSrc;

  function moveObstacle() {
  if (obstaclePosition < -20) {
    gameContainer.removeChild(obstacle);
  } else if (obstaclePosition > 50 && obstaclePosition < 90 && position < 50) {
    gameOver();
  } else {
    obstaclePosition -= 5;
    obstacle.style.left = obstaclePosition + 'px';
    requestAnimationFrame(moveObstacle);
    if (obstaclePosition === 50) {
      score++;
      scoreDisplay.textContent = 'Score: ' + score;
    }
  }
}

  moveObstacle();
  if (!isGameOver) setTimeout(createObstacle, Math.random() * 3000 + 1000);
}


function gameOver() {
  isGameOver = true;
  dino.src = 'img/trash.png';
  restartButton.style.display = 'block';
}

function restartGame() {
  isGameOver = false;
  dino.src = 'img/trashcan.png';
  position = 0;
  dino.style.bottom = position + 'px';
  while (gameContainer.firstChild) {
    gameContainer.removeChild(gameContainer.firstChild);
  }
  createObstacle();
  restartButton.style.display = 'none';
}

document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    jump();
  }
});
scoreDisplay.textContent = 'Score: ' + score;
createObstacle();
