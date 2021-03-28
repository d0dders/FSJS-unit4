/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = null

const startButton = document.getElementById('btn__reset');
startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

const keyboard = document.getElementById('qwerty');
keyboard.addEventListener('click', (e) => {
    if (e.target.classList.contains('key')) {
        game.handleInteraction(e.target);
    }
});