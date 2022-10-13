const gameCanvas = document.getElementById("gameCanvas");
const context = gameCanvas.getContext("2d");
gameCanvas.height = 650;
gameCanvas.width = 650;

function updateGameCanvas() {
    // Draws the gameboard
    context.fillStyle = "lightgrey";
    context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    drawApple();
    drawSnake();
}

function drawSnake() {
    // Draws the snake's head
    context.fillStyle = "green";
    context.fillRect(snakeCol, snakeRow, boxSize, boxSize);
    // Draws the snake's body if there are any
    for (let i = 1; i < snakeBody.length; ++i) {
        context.fillStyle = "lightgreen";
        context.fillRect(snakeBody[i][1], snakeBody[i][0], boxSize, boxSize);
    }
}

function drawApple() {
    context.fillStyle = "red";
    context.fillRect(appleCol, appleRow, boxSize, boxSize);
}