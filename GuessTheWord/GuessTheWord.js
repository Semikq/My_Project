const hint = document.getElementById("hint")
const word = document.getElementById("word")
const button = document.getElementById("button")
const userWord = document.getElementById("userWord")
const addQuestions = document.getElementById("addQuestions")
const point = document.getElementById("point")
const newQuestions = document.getElementById("newQuestions")
const add = document.getElementById("add")
const newAnswer = document.getElementById("newAnswer")
const addQuestionsButton = document.getElementById("addQuestionsButton")
const mainDiv2 = document.getElementById("mainDiv2")
const back = document.getElementById("back")
const arr = [{},{blue: "What color is the water?"},{Paris:"What is the capital of France?"},{yellow: "What color is a banana when ripe?"}, {dog: "What animal barks and wags its tail?"}, {scissors:"What do you use to cut paper?"}]
let correctWord = ""
let i = -2
let is = false

button.onclick = puzzles

function puzzles(){
    if(arr.length !== 1){
        if(userWord.value.toLowerCase() === correctWord.toLowerCase()){
            let readyWord = ""
            let random = Math.round((Math.random() * 3))
            if(random === 0){
                random = 2
            }
            if(arr.length === 2){
                random = 1
            }
            let mystery = arr[random]
            userWord.value = ""
            if(word.value !== "clue"){
                word.value = "clue"
            }
            for(let element in mystery){
                correctWord = element
                hint.innerText = mystery[element]
                for(let letters of element){
                    let random = Math.round((Math.random() * 2))
                    if(random === 1){
                        readyWord += letters
                    }else{
                        readyWord += "_"
                    }
                }
            }
            arr.splice(random, 1)
            word.addEventListener("click", function(){
                word.value = readyWord
                is = true
            })
            checkPoint()
        }
    }else{
        hint.innerText = "You win"
        userWord.value = "You win"
        userWord.disabled = true
        word.disabled = true
        addQuestions.disabled = true
        checkPoint()
    }
}

function checkPoint(){
    if(is === true){
        i += 1
    }else{
        i += 2
    }
    point.innerText = `Point: ${i}`
    is = false
}

addQuestionsButton.addEventListener("click", function(){
    mainDiv2.style.display = "flex"
})

back.addEventListener("click", function(){
    mainDiv2.style.display = "none"
    newAnswer.value = ""
    newQuestions.value = ""
})

add.onclick = addQuestion

function addQuestion(){
    const obj = {}
    obj[newAnswer.value] = newQuestions.value
    newAnswer.value = ""
    newQuestions.value = ""
    arr.push(obj)
}
puzzles()