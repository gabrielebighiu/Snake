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
    drawSnakeParts();
}

function drawSnake() {
    context.fillStyle = "green";
    context.fillRect(snakeCol, snakeRow, boxSize, boxSize);
}

function drawSnakeParts() {
    for (let i = 1; i < snakeBody.length; ++i) {
        context.fillStyle = "lightgreen";
        context.fillRect(snakeBody[i][1], snakeBody[i][0], boxSize, boxSize);
    }
}

function drawApple() {
    context.fillStyle = "red";
    context.fillRect(appleCol, appleRow, boxSize, boxSize);
}