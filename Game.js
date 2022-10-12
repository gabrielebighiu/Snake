// Total of 26 boxes
let boxSize = 25;
// Snake head starting position
let snakeRow = boxSize * 12;
let snakeCol = boxSize * 6;
let snakeBody = [];
let snakeDirection = "";
// Stores apple coordinates
let appleCol;
let appleRow;
let loopInterval;
// Points
let points = 0;
let displayPoints = document.getElementById("points");
// Game status

window.onload = function () {
        setApple();
        updateGameCanvas();
        loopInterval = setInterval(gameLoop, 1000/8); // Updates the canvas 8 times per second
}

function gameLoop() {
        if (snakeDirection != "") {
                document.getElementById("gameMessage").innerHTML = "";
        }
        if (snakeDirection == "UP") {
                snakeRow -= boxSize;
        } else if (snakeDirection == "DOWN") {
                snakeRow += boxSize;
        } else if (snakeDirection == "LEFT") {
                snakeCol -= boxSize;
        } else if (snakeDirection == "RIGHT") {
                snakeCol += boxSize;
        }
        checkApple();
        updateSnakeParts();
        checkCollision();
        checkWinner();
        updateGameCanvas();
}

// Generates random coordinates for apple
function setApple() {
        appleRow = Math.floor(Math.random() * 26) * boxSize;
        appleCol = Math.floor(Math.random() * 26) * boxSize;
}

// Event Listener to detect arrow input
document.addEventListener("keydown", setDirection);

// Every condition checks the snakeDirection so that the snake does not reverse into itself
function setDirection(pressedKey) {
        if (pressedKey.key == "ArrowUp" && snakeDirection != "DOWN") {
                snakeDirection = "UP";
        } else if (pressedKey.key == "ArrowDown" && snakeDirection != "UP") {
                snakeDirection = "DOWN";
        } else if (pressedKey.key == "ArrowLeft" && snakeDirection != "RIGHT") {
                snakeDirection = "LEFT";
        } else if (pressedKey.key == "ArrowRight" && snakeDirection != "LEFT") {
                snakeDirection = "RIGHT";
        }
}

// If the snake eats the apple
function checkApple() {
        if (snakeCol == appleCol && snakeRow == appleRow) {
                snakeBody.push([appleRow, appleCol]);
                setApple();
                // Updates the points displayed
                ++points;
                displayPoints.innerHTML = points;
        }
}

// Updates the snake's parts (except the head) coordinates as the snake moves
function updateSnakeParts() {
        for (let i = snakeBody.length - 1; i > 0; --i) {
                snakeBody[i] = snakeBody[i - 1];
        }
        if (snakeBody.length > -1) {
                snakeBody[0] = [snakeRow, snakeCol];
        }
}

// Checks if the snake runs into itself OR if the snake goes out of bound
function checkCollision() {
        // Checks if the snake bites itself
        for (let i = 1; i < snakeBody.length; ++i) {
                if (snakeRow == snakeBody[i][0] && snakeCol == snakeBody[i][1]) {
                        clearInterval(loopInterval);
                        gameOver()
                }
        }
        // Checks if the snake goes outside the gameboard
        if (snakeRow < 0 || snakeCol < 0 || snakeRow == gameCanvas.height || snakeCol == gameCanvas.width) {
                clearInterval(loopInterval);
                gameOver();
        }
}

function gameOver() {
        // Game over message
        let gameOverMessage = document.getElementById("gameMessage");
        gameOverMessage.innerHTML = "Game Over! Click below to play again";
        // Restart button
        createRestartBtn();
}

function checkWinner() {
        if (snakeBody.length == (gameCanvas.width / boxSize) * (gameCanvas.height / boxSize)) {
                let gameOverMessage = document.getElementById("gameMessage");
                gameOverMessage.innerHTML = "You Won! You have too much free time";
                createRestartBtn();
        }
}

function createRestartBtn() {
        let restartBtn = document.createElement("button");
        restartBtn.innerHTML = "Play Again";
        restartBtn.className = "btn btn-light";
        restartBtn.onclick = function () {
                location.reload();
        }
        document.getElementById("gameOver").appendChild(restartBtn);
}