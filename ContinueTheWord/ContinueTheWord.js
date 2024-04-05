const word = document.getElementById("word")
const wordUser = document.getElementById("wordUser")
const wordNewButton = document.getElementById("wordNewButton")
const wordBoxButton = document.getElementById("wordBoxButton")
const wordBox = document.getElementById("wordBox")
const arr = []
let is = false

function newWord(){
    const userInput = wordUser.value.trim()
    if(arr.length === 0 || userInput[0].toLowerCase() === arr[arr.length - 1][arr[arr.length - 1].length - 1].toLowerCase()){
        arr.push(wordUser.value)
        word.innerText = wordUser.value
        wordUser.value = ""
        if(is === true){
            ShowWord()
            is = true
        }
    }else {
        wordUser.value = ""
        wordUser.placeholder = "Please, enter one word that start with the last letter of the previous word"
    }
}

wordNewButton.onclick = newWord

function ShowWord(){
    if(arr.length !== 0){
        if(is === true ){
            wordBox.innerText = arr.join(" ")
            wordBoxButton.value = "Hide the words"
            is = false
        }else if(is === false){
            wordBox.innerText = ""
            wordBoxButton.value = "Look at the preceding words"
            is = true
        }
    }
}

wordBoxButton.onclick = ShowWord