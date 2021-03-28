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


    handleInteraction(letterButton) {
        letterButton.disabled = true;
        const letter = letterButton.innerText;
        if (!this.activePhrase.phrase.includes(letter)) {
            console.log(`${letter}: is NOT in the phrase`)
            // add wrong to css and removelife()
        } else  {
            console.log(`${letter}: is in the phrase`)
            // add wrong to css and removelife()
        //letter in phrase
            //add chosen to css
            //showMatchedletter
            //checkWin
                //gameover WIN
        }
    }
}