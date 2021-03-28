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
        /* startGame(): hides the start screen overlay, calls the getRandomPhrase() method, 
        and sets the activePhrase property with the chosen phrase. It also adds that phrase to the board by calling 
        the addPhraseToDisplay() method on the active Phrase object. */

        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        this.activePhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase.addPhraseToDisplay();
        
    }


    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }
}