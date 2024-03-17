const textUser = document.getElementById("textUser")
const textBot = document.getElementById("textBot")
const oneImage = document.getElementById("oneImage")
const twoImage = document.getElementById("twoImage")
const result = document.getElementById("result")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const one = document.getElementById("one")
const two = document.getElementById("two")
let i = 0
let j = 0

function setImage(imageName) {
    const img = document.createElement("img")
    img.src = "image/" + imageName + ".png";
    img.onload = function() {
        const maxWidth = oneImage.offsetWidth;
        const maxHeight = oneImage.offsetHeight;
        const aspectRatio = this.width / this.height;

        let newWidth = maxWidth;
        let newHeight = maxHeight;
        if (aspectRatio > 1) {
            newHeight = maxWidth / aspectRatio;
        } else {
            newWidth = maxHeight * aspectRatio;
        }

        img.width = newWidth;
        img.height = newHeight;
    };
    oneImage.innerHTML = ""
    oneImage.appendChild(img);
}

function setImage2(imageName) {
    const img = document.createElement("img")
    img.src = "image/" + imageName + ".png";
    img.onload = function() {
        const maxWidth = twoImage.offsetWidth;
        const maxHeight = twoImage.offsetHeight;
        const aspectRatio = this.width / this.height;

        let newWidth = maxWidth;
        let newHeight = maxHeight;
        if (aspectRatio > 1) {
            newHeight = maxWidth / aspectRatio;
        } else {
            newWidth = maxHeight * aspectRatio;
        }

        img.width = newWidth;
        img.height = newHeight;
    };
    twoImage.innerHTML = ""
    textBot.innerText = ""
    textBot.innerText = imageName
    twoImage.appendChild(img);
}

button1.addEventListener("click", function(){
    textUser.value = ""
    oneImage.innerText = ""
})

textUser.addEventListener("input", function(){
    const input = textUser.value.toLowerCase()
    if(input === "paper" || input === "rock" || input === "scissors"){
        setImage(textUser.value)
    }else{
        oneImage.innerText = ""
    }
})

    button2.addEventListener("click", function(){
        let random = Math.floor(Math.random() * 3)
        let resultBot = ""
        if(random === 0){
            resultBot = "rock"
        }else if(random === 1){
            resultBot = "paper"
        }else if(random === 2){
            resultBot = "scissors"
        }

        if(resultBot === "rock" || resultBot === "paper" || resultBot === "scissors") {
            setImage2(resultBot)
            if(textUser.value === resultBot){
                result.innerText = "Draw"
            }else if(textUser.value === "paper" && resultBot === "rock" ||
                     textUser.value === "rock" && resultBot === "scissors" ||
                     textUser.value === "scissors" && resultBot === "paper"){
                one.innerText = `User ${++i}`
                result.innerText = "User Win"
                if(i === 10){
                    i = 0
                    j = 0
                    alert("User Win")
                }
            }else{
                two.innerText = `Bot ${++j}`
                result.innerText = "Bot Win"
                if(j === 10){
                    i = 0
                    j = 0
                    alert("Bot Win")
                }
            }
        }
    })