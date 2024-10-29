const openWords = document.getElementById("openWords") as HTMLSpanElement
const rightWords = document.getElementById("rightWords") as HTMLDivElement
const block = document.getElementById("block") as HTMLDivElement
const enterWords = document.getElementById("enterWords") as HTMLInputElement
const checkWord = document.getElementById("checkWord") as HTMLInputElement
const restartGame = document.getElementById("restartGame") as HTMLInputElement
const htmlPreviousWord = document.getElementById("htmlPreviousWord") as HTMLParagraphElement
const listWords = document.getElementById("listWords") as HTMLParagraphElement
let previousWord: string
let openingWords: readonly string[] = ["Car", "Yellow", "Arrow", "Blue", "Yes", "Hello"];

function randomOpeningWords(): void{
    const randomNumber: number = Math.floor(Math.random() * 6)
    htmlPreviousWord.textContent = openingWords[randomNumber]
}
randomOpeningWords()

openWords.addEventListener("click", function(): void{
    console.log(openWords.classList.value)
    if(rightWords.classList.value){
        rightWords.classList.remove("active")
        block.classList.remove("active")
        openWords.classList.remove("ionArrowUndo")
        openWords.classList.add("ionArrowRedo")
    }else{
        rightWords.classList.add("active")
        block.classList.add("active")
        openWords.classList.remove("ionArrowRedo")
        openWords.classList.add("ionArrowUndo")
    }
})

checkWord.addEventListener("click", function(): void{
    if(enterWords.value){
        const lastLetter: string[] = (htmlPreviousWord.innerText).split("")
        const newWord: string[] = (enterWords.value).split("")
        if(lastLetter[lastLetter.length -1] === newWord[0]){
            listWords.append(` ${enterWords.value},`)
            htmlPreviousWord.innerText = enterWords.value
            enterWords.value = ""
        }
    }
})

restartGame.addEventListener("click", function(): void{
    randomOpeningWords()
    listWords.innerText = ""
    enterWords.value = ""
})