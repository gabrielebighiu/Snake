// Total of 26 boxes
let boxSize = 25;
// Snake head starting position
let snakeRow = boxSize * 12;
let snakeCol = boxSize * 6;
// Stores apple coordinates
let appleRow;
let appleCol;
// Stores the direction of the snake
let snakeDirection;
let snakeBody = [{}];

window.onload = function () {
        setApple();
        updateGameCanvas();
        setInterval(gameLoop, 1000/8); // Updates the canvas 8 times per second
}

function gameLoop() {
        if (snakeDirection == "UP") {
                snakeRow -= 1 * boxSize;
        } else if (snakeDirection == "DOWN") {
                snakeRow += 1 * boxSize;
        } else if (snakeDirection == "LEFT") {
                snakeCol -= 1 * boxSize;
        } else if (snakeDirection == "RIGHT") {
                snakeCol += 1 * boxSize;
        }
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