/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

const overlay = document.getElementById('overlay');
const lives = document.querySelectorAll('.tries>img');

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            'A rose by any other name would smell a sweet',
            'All the worlds a stage'
        ]
        this.activePhrase = null;
    }


    startGame() {
        overlay.style.display = 'none';
        this.activePhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase.addPhraseToDisplay();
    }


    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }


    /**
     * 
     * @param {HTMLElement} letterButton 
     */
    handleInteraction(letterButton) {
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


    removeLife() {
        // TODO: prevent below from running if game already over. 
        lives[this.missed].setAttribute('src', 'images/lostHeart.png');
        this.missed++;
        if (this.missed === 5) {
            console.log('GAME OVER');
            this.gameOver(false);
        }
    }


    checkForWin() {
        const letters = [...document.querySelectorAll('.letter')];
        return letters.every(letter => letter.classList.contains('show'));
    }


    gameOver(gameWon) {
        const gameOverText = document.getElementById('game-over-message');
        overlay.classList.remove('start');
        if (gameWon){
            gameOverText.innerText = 'Congratulations! You won!';
            overlay.classList.add('win');
        } else {
            overlay.classList.add('lose');
            gameOverText.innerText = 'Bummer! Try again!';
        }
        overlay.style.display = 'flex';
        this.reset();
    }


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