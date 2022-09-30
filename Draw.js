const gameCanvas = document.getElementById("gameCanvas");
const context = gameCanvas.getContext("2d");
gameCanvas.height = 650;
gameCanvas.width = 650;

function updateGameCanvas() {
    // Initialises the board colour
    context.fillStyle = "lightgrey";
    context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    drawApple();
    drawSnake();
}

function drawSnake() {
    context.fillStyle = "green";
    context.fillRect(snakeCol, snakeRow, boxSize, boxSize);
}

function drawApple() {
    context.fillStyle = "red";
    context.fillRect(appleRow, appleCol, boxSize, boxSize);
}