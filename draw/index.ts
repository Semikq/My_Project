const openSelectColor = document.getElementById("openSelectColor") as HTMLSpanElement
const draw = document.getElementById("draw") as HTMLDivElement
const selectColor = document.getElementById("selectColor") as HTMLDivElement
const changeSizeField = document.getElementById("changeSizeField") as HTMLInputElement
const fieldDraw = document.getElementById("fieldDraw") as HTMLDivElement
const changeColors = document.querySelectorAll(".changeColors") as NodeListOf<HTMLInputElement>
const changeColorsField = document.querySelectorAll(".changeColorsField") as NodeListOf<HTMLInputElement>
const eraser = document.getElementById("eraser") as HTMLInputElement
const restartGame = document.getElementById("restartGame") as HTMLInputElement

let color: string
let colorField: string

openSelectColor.addEventListener("click", function (): void {
    const isActive = draw.classList.toggle("active");
    selectColor.classList.toggle("active", isActive);
    openSelectColor.classList.toggle("ionArrow", isActive);
    openSelectColor.classList.toggle("arrowRedo", !isActive);
});

function createTableDraw(columns: string, lines: string): void {
    const table = document.createElement("table") as HTMLTableElement
    let isDrawing: boolean = false

    table.addEventListener("mouseleave", () => {
        isDrawing = false;
    })

    for (let i = 0; i < parseInt(columns); i++) {
        const tr = document.createElement("tr") as HTMLTableRowElement
        for (let j = 0; j < parseInt(lines); j++) {
            const td = document.createElement("td") as HTMLTableDataCellElement
            td.style.border = "1px solid black";
            td.addEventListener("mousedown", function (): void {
                isDrawing = true
                td.style.background = color
            })
            td.addEventListener("mousemove", function (): void {
                if (isDrawing) td.style.background = color
            })
            td.addEventListener("mouseup", function (): void {
                isDrawing = false
            })
            tr.append(td)
        }
        table.append(tr)
    }
    fieldDraw.append(table)
}

createTableDraw("16", "16")

changeSizeField.addEventListener("click", function (): void {
    let numColumns = (document.getElementById("numColumns") as HTMLInputElement).value
    let numLines = (document.getElementById("numLines") as HTMLInputElement).value
    if ((numColumns && numLines) && (parseInt(numColumns) <= 60 && parseInt(numLines) <= 60)) {
        fieldDraw.innerText = ""
        createTableDraw(numColumns, numLines)
        numColumns = ""
        numLines = ""
    }
})

changeColors.forEach((input) => {
    if (input.type === "button") {
        input.addEventListener("click", function () {
            color = this.value
        });
    } else {
        input.addEventListener("change", function () {
            color = this.value
        });
    }
});

changeColorsField.forEach((input) => {
    input.addEventListener("change", function () {
        fieldDraw.style.background = this.value
        colorField = this.value
    });
})

eraser.addEventListener("click", function () {
    color = colorField
})

restartGame.addEventListener("click", function (): void {
    fieldDraw.innerText = ""
    fieldDraw.style.background = ""
    colorField = ""
    color = ""
})