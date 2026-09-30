const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const resetButton = document.getElementById("resetButton");
const winLine = document.getElementById("winLine");

let currentPlayer;
let gameBoard = ["", "", "", "", "", "", "", ""];
let gameActive = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach(cell => {
    cell.addEventListener("click", handleCellClick);
});

resetButton.addEventListener("click", resetGame);

function chooseStartingPlayer() {
    currentPlayer = Math.random() < 0.5 ? "X" : "O";
    statusText.textContent = `Player ${currentPlayer}'s turn`;
}

function handleCellClick(event) {

    const index = event.target.dataset.index;

    if (gameBoard[index] !== "" || !gameActive) {
        return;
    }

    gameBoard[index] = currentPlayer;
    event.target.textContent = currentPlayer;

    event.target.classList.add(currentPlayer.toLowerCase());

    checkWinner();
}

function checkWinner() {

    for (let combination of winningCombinations) {

        const [a, b, c] = combination;

        if (
            gameBoard[a] !== "" &&
            gameBoard[a] === gameBoard[b] &&
            gameBoard[a] === gameBoard[c]
        ) {

            cells[a].classList.add("winner");
            cells[b].classList.add("winner");
            cells[c].classList.add("winner");

            statusText.textContent = `Player ${currentPlayer} wins!`;

            gameActive = false;

            drawWinningLine(combination);

            return;
        }
    }

    if (!gameBoard.includes("")) {
        statusText.textContent = "It's a draw!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";

    statusText.textContent = `Player ${currentPlayer}'s turn`;
}

function drawWinningLine(combination) {

    const [a, , c] = combination;

    const startCell = cells[a];
    const endCell = cells[c];

    const startX = startCell.offsetLeft + startCell.offsetWidth / 2;
    const startY = startCell.offsetTop + startCell.offsetHeight / 2;

    const endX = endCell.offsetLeft + endCell.offsetWidth / 2;
    const endY = endCell.offsetTop + endCell.offsetHeight / 2;

    const distance = Math.sqrt(
        Math.pow(endX - startX, 2) +
        Math.pow(endY - startY, 2)
    );

    const angle = Math.atan2(
        endY - startY,
        endX - startX
    ) * 180 / Math.PI;

    winLine.style.width = `${distance}px`;
    winLine.style.left = `${startX}px`;
    winLine.style.top = `${startY}px`;
    winLine.style.transform = `rotate(${angle}deg)`;
    winLine.style.display = "block";
}

function resetGame() {

    currentPlayer = "";
    gameBoard = ["", "", "", "", "", "", "", ""];
    gameActive = true;

    cells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove("x", "o", "winner");
    });

    winLine.style.display = "none";

    chooseStartingPlayer();
}

// Randomly choose the first player when the game loads
chooseStartingPlayer();