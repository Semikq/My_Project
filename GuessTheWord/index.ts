const blockOne = document.getElementById("blockOne") as HTMLInputElement
const blockTwo = document.getElementById("blockTwo") as HTMLInputElement
const blockThree = document.getElementById("blockThree") as HTMLInputElement
const switchActive = document.getElementById("switchActive") as HTMLSpanElement
const successfulAnswers = document.getElementById("successfulAnswers") as HTMLSpanElement
const question = document.getElementById("question") as HTMLParagraphElement
const hint = document.getElementById("hint") as HTMLParagraphElement
const newQuestion = document.getElementById("newQuestion") as HTMLInputElement
const newAnswer = document.getElementById("newAnswer") as HTMLInputElement
const addQuestion = document.getElementById("addQuestion") as HTMLInputElement

const objQuestion: {[key: string]: string | number} = {
    "What color is the water?": "blue",
    "What color is the sun?": "yellow",
    "What is the name of this game?": "Guess The Word", 
    "Can you create your own question here?": "Yes"
};

(function startGame(objQuestion: {[key: string]: string | number}){
    const keys = Object.keys(objQuestion)
    const random = Math.ceil(Math.random() * keys.length)
    question.innerText =  keys[random - 1];
    hint.innerText = String(objQuestion[keys[random - 1]]);
    console.log(objQuestion[keys[0]])
})(objQuestion)

switchActive.addEventListener("click", function(): void{
    let active = blockOne.classList.toggle("active")
    blockTwo.classList.toggle("active", active)
})

successfulAnswers.addEventListener("click", function() {
    blockThree.classList.toggle("active");
    successfulAnswers.classList.toggle("active");
});

addQuestion.addEventListener("click", function(){
    if(newQuestion.value && newAnswer.value){
        objQuestion[newQuestion.value] = newAnswer.value
        console.log(objQuestion)
    }
})