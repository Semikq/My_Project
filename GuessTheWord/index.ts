const blockOne = document.getElementById("blockOne") as HTMLInputElement
const blockTwo = document.getElementById("blockTwo") as HTMLInputElement
const blockThree = document.getElementById("blockThree") as HTMLInputElement
const switchActive = document.getElementById("switchActive") as HTMLSpanElement
const successfulAnswers = document.getElementById("successfulAnswers") as HTMLSpanElement
const question = document.getElementById("question") as HTMLParagraphElement
const hint = document.getElementById("hint") as HTMLInputElement
const newQuestion = document.getElementById("newQuestion") as HTMLInputElement
const newAnswer = document.getElementById("newAnswer") as HTMLInputElement
const addQuestion = document.getElementById("addQuestion") as HTMLInputElement
const checkResult = document.getElementById("checkResult") as HTMLInputElement
const score = document.getElementById("score") as HTMLParagraphElement
const skipRiddle = document.getElementById("skipRiddle") as HTMLInputElement
const listSuccessfulAnswers = document.getElementById("listSuccessfulAnswers") as HTMLDivElement
const howManyQuestions = document.getElementById("howManyQuestions") as HTMLParagraphElement
const restart = document.getElementById("restart") as HTMLInputElement

// Initial questions setup
const objStartQuestions: {[key: string]: string} = {
    "What color is the water?": "blue",
    "What color is the sun?": "yellow",
    "What is the name of this game?": "Guess The Word", 
    "Can you create your own question here?": "Yes",
}

let objQuestion: {[key: string]: string | number} = {...objStartQuestions};

// Game logic
function game(objQuestion: {[key: string]: string | number}){
    if(Object.keys(objQuestion).length === 0 || score.innerText === "100"){
        alert("You win, please input button \"restart\"")
        question.innerText = "You win"
        hint.placeholder = "You win"
        checkResult.disabled = true
        skipRiddle.disabled = true
        addQuestion.disabled = true
    }else{
        howManyQuestions.innerText = `Question: ${Object.keys(objQuestion).length}`
        const keys = Object.keys(objQuestion)
        const randomIndex = Math.floor(Math.random() * keys.length);
        question.innerText = keys[randomIndex];
    }
}
game(objQuestion)

// Toggle between blocks
switchActive.addEventListener("click", function(): void{
    let active = blockOne.classList.toggle("active")
    blockTwo.classList.toggle("active", active)
})

// Show successful answers
successfulAnswers.addEventListener("click", function(): void{
    blockThree.classList.toggle("active");
    successfulAnswers.classList.toggle("active");
});

// Add new question
addQuestion.addEventListener("click", function(): void{
    if(newQuestion.value.trim() && newAnswer.value.trim()){
        objQuestion[newQuestion.value] = newAnswer.value
        newQuestion.value = ""
        newAnswer.value = ""
        howManyQuestions.innerText = `Question: ${Object.keys(objQuestion).length}`
    }
})

// Check the result
checkResult.addEventListener("click", function (): void {
    if ((question.innerText.trim() && hint.value.trim())) {
        if (objQuestion[question.innerText] === hint.value) {
            const p = document.createElement("p") as HTMLParagraphElement
            p.innerHTML = `${hint.value},`
            p.title = question.innerText
            listSuccessfulAnswers.append(p)

            delete objQuestion[question.innerText]
            score.innerText = String(Number(score.innerText) + 1)
            hint.value = ""
            game(objQuestion)
        }else{
            hint.value = ""
            hint.placeholder = "Wrong answer"
        }
    }
})

// Skip the riddle
skipRiddle.addEventListener("click", function(): void{
    if(question.innerText){
        delete objQuestion[question.innerText]
        hint.value = ""
        game(objQuestion)
    }
})

// Restart the game
restart.addEventListener("click", function(): void{
    score.innerText = "0"
    listSuccessfulAnswers.innerHTML = ""
    objQuestion = {...objStartQuestions}
    game(objQuestion)
    checkResult.disabled = false
    skipRiddle.disabled = false
    addQuestion.disabled = false
})