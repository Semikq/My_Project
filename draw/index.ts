const openSelectColor = document.getElementById("openSelectColor") as HTMLSpanElement
const draw = document.getElementById("draw") as HTMLDivElement
const selectColor = document.getElementById("selectColor") as HTMLDivElement

const changeSizeField = document.getElementById("changeSizeField") as HTMLInputElement
const numColumns = document.getElementById("numColumns") as HTMLInputElement
const numLines = document.getElementById("numLines") as HTMLInputElement
const fieldDraw = document.getElementById("fieldDraw") as HTMLDivElement

let colorField: string = "#123346"
let color: string = "red"

openSelectColor.addEventListener("click", function (): void {
    if (draw.classList.value) {
        draw.classList.remove("active")
        selectColor.classList.remove("ac tive")
    } else {
        draw.classList.add("active")
        selectColor.classList.add("active")
    }
})

changeSizeField.addEventListener("click", function (): void {
    if (numColumns.value && numLines.value) {
        fieldDraw.innerHTML = ""
        const table = document.createElement("table") as HTMLTableElement
        let isDrawing: boolean = false 
        table.addEventListener("mouseleave", () => {
            isDrawing = false;
        });
        for (let i = 0; i < parseInt(numColumns.value); i++){
            const tr = document.createElement("tr") as HTMLTableRowElement
            for(let j = 0; j < parseInt(numLines.value); j++){
                const td = document.createElement("td") as HTMLTableDataCellElement
                td.style.border = "1px solid black";
                td.addEventListener("mousedown", function(): void{
                    isDrawing = true
                    td.style.background = color
                })
                td.addEventListener("mousemove", function(): void{
                    if(isDrawing) td.style.background = color
                })
                td.addEventListener("mouseup", function(): void{
                    isDrawing = false
                })
                tr.append(td)
            }
            table.append(tr)
        }
        fieldDraw.append(table)
    }
})

const changeColors = document.querySelectorAll(".changeColors") as NodeListOf<HTMLInputElement>

changeColors.forEach((input) => {
    if (input.type === "button") {
        input.addEventListener("click", function(): void {
            color = this.value
        });
    } else {
        input.addEventListener("change", function(): void {
            color = this.value
        });
    }
});

const changeColorsField = document.querySelectorAll(".changeColorsField") as NodeListOf<HTMLInputElement>
const eraser = document.getElementById("eraser") as HTMLInputElement

changeColorsField.forEach((input) =>{
    input.addEventListener("change", function(): void {
        fieldDraw.style.background = this.value
        eraser.value = this.value
    });
})

eraser.addEventListener("click", function(): void{
    color = colorField
})

const restartGame = document.getElementById("restartGame") as HTMLInputElement

// restartGame.addEventListener("click",function(): void{
//     fieldDraw.innerHTML = ""
//     colorField = ""
//     color = ""
// })