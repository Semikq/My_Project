"use strict";
const openWords = document.getElementById("openWords");
const rightWords = document.getElementById("rightWords");
const block = document.getElementById("block");
const enterWords = document.getElementById("enterWords");
const checkWord = document.getElementById("checkWord");
const restartGame = document.getElementById("restartGame");
const htmlPreviousWord = document.getElementById("htmlPreviousWord");
const listWords = document.getElementById("listWords");
let previousWord;
let openingWords = ["Car", "Yellow", "Arrow", "Blue", "Yes", "Hello"];
function randomOpeningWords() {
    const randomNumber = Math.floor(Math.random() * 6);
    htmlPreviousWord.textContent = openingWords[randomNumber];
}
randomOpeningWords();
openWords.addEventListener("click", function () {
    if (rightWords.classList.value) {
        rightWords.classList.remove("active");
        block.classList.remove("active");
    }
    else {
        rightWords.classList.add("active");
        block.classList.add("active");
    }
});
checkWord.addEventListener("click", function () {
    if (enterWords.value) {
        const lastLetter = (htmlPreviousWord.innerText).split("");
        const newWord = (enterWords.value).split("");
        if (lastLetter[lastLetter.length - 1] === newWord[0]) {
            listWords.append(` ${enterWords.value},`);
            htmlPreviousWord.innerText = enterWords.value;
            enterWords.value = "";
        }
    }
});
restartGame.addEventListener("click", function () {
    randomOpeningWords();
    listWords.innerText = "";
    enterWords.value = "";
});
//# sourceMappingURL=index.js.map