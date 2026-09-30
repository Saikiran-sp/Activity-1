# Activity-1

## Tic-Tac-Toe Game

A simple and interactive two-player Tic-Tac-Toe game developed as part of VOSC Activity-1.

The game is built using HTML, CSS, and JavaScript and is designed to be simple, responsive, and fully playable.

## Features

* Two-player gameplay
* Random selection of the starting player
* Different colors for Player X and Player O
* Automatic winner detection
* Winning line displayed across the three matching cells
* Draw detection
* Restart Game functionality
* Responsive design
* Clean and simple user interface

## Technologies Used

* HTML – Used to create the structure of the game
* CSS – Used for styling, layout, colors, and responsive design
* JavaScript – Used to implement game logic, random player selection, player turns, winner detection, draw detection, and the winning line

## Project Structure

```text
Activity-1/
│
├── index.html      # Main HTML structure
├── style.css       # Styling and responsive design
├── script.js       # Game logic
└── README.md       # Project documentation
```

## How to Run

1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. The game will start immediately.

No additional software, libraries, or installations are required.

## How to Play

1. The game randomly selects either Player X or Player O to start.
2. Players take turns selecting an empty cell.
3. The objective is to get three matching symbols in a row.
4. A winning combination can be horizontal, vertical, or diagonal.
5. When a player wins, a line is displayed across the winning combination.
6. If all nine cells are filled without a winner, the game ends in a draw.
7. Click the Restart Game button to start a new game with a randomly selected starting player.

## Game Logic

The game board is represented using an array containing nine positions.

The program checks the following eight possible winning combinations:

```text
[0, 1, 2]    [3, 4, 5]    [6, 7, 8]
[0, 3, 6]    [1, 4, 7]    [2, 5, 8]
[0, 4, 8]    [2, 4, 6]
```

After every move, the program checks whether the current player has completed one of these combinations.

The starting player is selected randomly using JavaScript's `Math.random()` function.

## Author

Sai Kiran

Vasavi College of Engineering
Computer Science & Engineering

## Activity

VOSC Activity-1 – Prerequisite Activity

This project demonstrates basic web development concepts and the use of Git and GitHub for project version control.
