# Tic-Tac-Toe-Web
For the apprenticeship challenge, I decided to develop a [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe) game using Vue.js for 
the frontend and Node.js for backend. The Vue.js app implements the game logic and the backend implements and serve the minimax algorithm which allows the computer to compete against the human. This application also uses MySQL database to keep track of the leaderboard of the game.

# Game Implementation

## Frontend
The frontend is a single page application implemented with the Vue.js framework. It supports the game logic and the UI that allows people to play the game.

## Backend
The backend is implemented with Node.js and more specifically with the Express.js framework. It exposes three endpoints:

- An endpoint to get the move of the AI. This endpoint is served with a Minimax algorithm which derives the best move for the AI given a board state.
- An endpoint to get all the entries on the leaderboard in your database.
- An endpoint to create new entry on the leaderboard.

## Separation Of Concern
To organize my code so as to maintain a clean codebase, I used the **Model View Controller** architectural pattern to organize the code. 

## Testing
To proof my code, I decided implement unit test both on the frontend and the backend using the Jest testing framework.
