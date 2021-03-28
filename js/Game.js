/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

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
        const overlay = document.getElementById('overlay');
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
            //checkWin()
                //gameover WIN
        }
    }


    removeLife() {
        const lives = document.querySelectorAll('.tries>img');
        lives[this.missed].setAttribute('src', 'images/lostHeart.png');
        this.missed++;
        if (this.missed === 5) {
            console.log('GAME OVER');
            //gameOver()
        }
    }
}