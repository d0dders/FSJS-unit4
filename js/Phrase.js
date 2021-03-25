/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        const phraseList = document.querySelector('#phrase>ul');
        [...this.phrase].forEach(letter => {
            if (letter === ' ') {
                phraseList.insertAdjacentHTML("beforeend", `<li class="space"> </li>`);
            } else {
                phraseList.insertAdjacentHTML("beforeend", `<li class="hide letter ${letter}">${letter}</li>`);
            }
        });
    }

    checkLetter(letter) {
         return this.phrase.includes(letter);
    }
}
