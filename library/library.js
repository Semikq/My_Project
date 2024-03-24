const mainDiv = document.getElementById("mainDiv")
const addButton = document.getElementById("addButton")
const book = document.getElementById("book")
const resetBook = document.getElementById("resetBook")
const deleteLast = document.getElementById("deleteLast")
const information = document.getElementById("information")
const select = document.getElementById("select")
let arr = []

function addBookToLibrary(){
    const div = document.createElement("div")
    const divName = document.createElement("div")
    const button = document.createElement("button")
    div.style = `
    display: flex;
    flex-direction: column;
    gap: 10px;`
    divName.style.background = "gainsboro"
    const objBook = {
        NameBook : prompt("Enter name book") || "No name",
        YearBook : prompt("Enter year book") || "No date",
        AfterBook : prompt("Enter after book") || "No after",
        GenreBook : prompt("Enter genre book") || "No genre"
    }
    arr.push(objBook)
    divName.innerText = `${objBook.NameBook} `
    divName.style = `
    background: gainsboro;
    text-align: center;
    width: 75px;
    height: 20px;`
    button.innerText = "To change"
    button.style = `
    background: gainsboro;
    border: 0;`
    button.addEventListener("click", function(){
        information.innerText = ""
        information.style.background = "gray"
        const clear = document.createElement("button")
        const conteiner = document.createElement("div")
        clear.style = `
        width: 50px;
        margin: 5px 0px 0px 5px;`
        clear.innerText = "Back"
        for(let key in objBook){
            const divInformation = document.createElement("div")
            divInformation.innerText = `${key}: ${objBook[key]}`
            conteiner.append(divInformation)
        }
        conteiner.style.margin = "0px 0px 5px 5px"
        information.append(clear, conteiner)
        clear.addEventListener("click", function(){
            information.innerText = ""
            information.style.background = ""
        })
    })
    div.append(divName, button)
    book.append(div)
}

addButton.addEventListener("click", addBookToLibrary)

resetBook.addEventListener("click", function(){
    arr = []
    book.innerText = ""
})

deleteLast.addEventListener("click", function() {
        arr.pop()
        if(book.lastChild){
            information.innerText = ""
        }
        book.removeChild(book.lastChild)
});