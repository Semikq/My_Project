const word = document.getElementById("word")
const wordUser = document.getElementById("wordUser")
const button = document.getElementById("button")
const buttonWords = document.getElementById("buttonWords")
const buttonHide = document.getElementById("buttonHide")
const words = document.getElementById("words")
const arr = []
let is = false
button.onclick = wordNew

function wordNew(){
    if(wordUser.value && !arr.includes(wordUser.value)){
        if(arr.length === 0){
            word.innerText = wordUser.value 
            arr.push(wordUser.value)
        }else{
            let letter = arr[arr.length - 1]
            letter = letter[letter.length - 1]
            if(wordUser.value[0].toLowerCase() === letter.toLowerCase() && !arr.includes(wordUser.value)){
                word.innerText = wordUser.value 
                arr.push(wordUser.value)
                if(is === true){
                    showHideWords()
                }
            }else{
                wordUser.value = ""
                wordUser.placeholder = "Please, enter the corrext word"
            }
        }
    }
}

wordUser.addEventListener("keydown", function(event) {
    let key = event.key
    if (!isNaN(key)) {
        event.preventDefault()
    }
})

buttonWords.onclick = showHideWords

function showHideWords(){
    is = true
    words.innerText = arr.join(", ")
    buttonHide.style.display = "block"
    buttonHide.addEventListener("click", function(){
        is = false
        words.innerText = ""
        buttonHide.style.display = "none"
    })
}