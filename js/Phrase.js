/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        const phraseList = document.querySelector('#phrase>ul');
        for (let i = 0; i < this.phrase.length; i++){
            if (this.phrase[i] === ' ') {
                phraseList.insertAdjacentHTML("beforeend", `<li class="space"> </li>`);
            } else {
                phraseList.insertAdjacentHTML("beforeend", `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`);
            }
        }
    }

    checkLetter(letter) {
         return this.phrase.includes(letter);
    }
}
