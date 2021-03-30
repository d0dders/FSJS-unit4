/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

const overlay = document.getElementById('overlay');
const lives = document.querySelectorAll('.tries>img');
const phraseList = [
    "Array Iteration Methods",
    "DOM Traversal",
    "Arrow Functions",
    "Callback Functions",
    "Object Oriented Programming",
    "Web Content Accessibility Guidelines",
    "document object model",
    "Regular Expression",
    "Keep It Simple Stupid"
]


class Game {
    constructor() {
        this.missed = 0;
        this.phrases = phraseList.map(phrase => new Phrase(phrase));
        this.activePhrase = null;
        this.isGameActive = false;
    }


    /**
     * Show the game board and a new phrase to guess
     */
    startGame() {
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        this.isGameActive = true;
    }


    /**
     * Selects a random phrase
     * @returns {Phrase}
     */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }


    /**
     * Handles the players guesses
     * @param {HTMLElement} letterButton - The key button the player selected
     */
    handleInteraction(letterButton) {
        if (letterButton.disabled !== true) {
            letterButton.disabled = true;
            const letter = letterButton.innerText;
            if (!this.activePhrase.phrase.includes(letter)) {
                letterButton.classList.add('wrong');
                this.removeLife();
            } else  {
                letterButton.classList.add('chosen');
                this.activePhrase.showMatchedLetter(letter);
                if (this.checkForWin()){
                    this.gameOver(true);
                }
            }
        }
    }


    /**
     * Updates lives left for incorrect guesses
     */
    removeLife() {
        lives[this.missed].setAttribute('src', 'images/lostHeart.png');
        this.missed++;
        if (this.missed === 5) {
            this.gameOver(false);
        }
    }


    /**
     * Checks if all letters ahve been guessed
     * @returns {boolean}
     */
    checkForWin() {
        const letters = [...document.querySelectorAll('.letter')];
        return letters.every(letter => letter.classList.contains('show'));
    }


    /**
     * Handles ending the game, presenting final screen
     * @param {boolean} gameWon - Boolean representing whther the game was won 
     */
    gameOver(gameWon) {
        const gameOverText = document.getElementById('game-over-message');
        overlay.classList.remove('start');
        if (gameWon){
            gameOverText.innerText = 'Congratulations! You won!';
            overlay.classList.remove('lose');
            overlay.classList.add('win');
        } else {
            overlay.classList.remove('win');
            overlay.classList.add('lose');
            gameOverText.innerText = 'Bummer! Try again!';
        }
        overlay.style.display = 'flex';
        this.reset();
        this.isGameActive = false;
    }


    /**
     * Resets the game board ready for a new game to be created
     */
    reset() {
        const keys = document.querySelectorAll('.key');
        keys.forEach(key => { 
            key.className = 'key';
            key.disabled = false;
        });
        const phraseList = document.querySelector('#phrase>ul');
        phraseList.innerHTML = '';
        lives.forEach(life => life.setAttribute('src', 'images/liveHeart.png'));
    }
}