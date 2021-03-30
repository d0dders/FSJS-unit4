/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }


    /**
     * Add phrase letters to dispaly blanked out
     */
    addPhraseToDisplay() {
        const phraseList = document.querySelector('#phrase>ul');
        [...this.phrase].forEach(letter => {
            if (letter === ' ') {
                phraseList.insertAdjacentHTML("beforeend", `<li class="space"> </li>`);
            } else if (/[^a-zA-Z]/.test(letter)) {
                //Just incase we encounter something not a-z
                phraseList.insertAdjacentHTML("beforeend", `<li class="show letter ${letter}">${letter}</li>`);
            } else {
                phraseList.insertAdjacentHTML("beforeend", `<li class="hide letter ${letter}">${letter}</li>`);
            }
        });
    }


    /**
     * Check if the chosen letter exists in the phrase
     * @param {string} letter - The guessed letter 
     * @returns {boolean}
     */
    checkLetter(letter) {
         return this.phrase.includes(letter);
    }


    /**
     * Reveals the phrase letters containg the players guess
     * @param {string} chosenLetter 
     */
    showMatchedLetter(chosenLetter) {
        const phraseLetters = document.querySelectorAll('#phrase>ul>li');
        phraseLetters.forEach(letterLi => {
            if (letterLi.classList.contains(chosenLetter)) {
                letterLi.classList.remove('hide');
                letterLi.classList.add('show');
            }
        });
    }
}
