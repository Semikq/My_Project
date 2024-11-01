"use strict";
const openSelectColor = document.getElementById("openSelectColor");
const draw = document.getElementById("draw");
const selectColor = document.getElementById("selectColor");
const changeSizeField = document.getElementById("changeSizeField");
const fieldDraw = document.getElementById("fieldDraw");
const changeColors = document.querySelectorAll(".changeColors");
const changeColorsField = document.querySelectorAll(".changeColorsField");
const eraser = document.getElementById("eraser");
const restartGame = document.getElementById("restartGame");
let color;
let colorField;
openSelectColor.addEventListener("click", function () {
    const isActive = draw.classList.toggle("active");
    selectColor.classList.toggle("active", isActive);
    openSelectColor.classList.toggle("ionArrow", isActive);
    openSelectColor.classList.toggle("arrowRedo", !isActive);
});
function createTableDraw(columns, lines) {
    const table = document.createElement("table");
    let isDrawing = false;
    table.addEventListener("mouseleave", () => {
        isDrawing = false;
    });
    for (let i = 0; i < parseInt(columns); i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < parseInt(lines); j++) {
            const td = document.createElement("td");
            td.style.border = "1px solid black";
            td.addEventListener("mousedown", function () {
                isDrawing = true;
                td.style.background = color;
            });
            td.addEventListener("mousemove", function () {
                if (isDrawing)
                    td.style.background = color;
            });
            td.addEventListener("mouseup", function () {
                isDrawing = false;
            });
            tr.append(td);
        }
        table.append(tr);
    }
    fieldDraw.append(table);
}
createTableDraw("16", "16");
changeSizeField.addEventListener("click", function () {
    let numColumns = document.getElementById("numColumns").value;
    let numLines = document.getElementById("numLines").value;
    if ((numColumns && numLines) && (parseInt(numColumns) <= 60 && parseInt(numLines) <= 60)) {
        fieldDraw.innerText = "";
        createTableDraw(numColumns, numLines);
        numColumns = "";
        numLines = "";
    }
});
changeColors.forEach((input) => {
    if (input.type === "button") {
        input.addEventListener("click", function () {
            color = this.value;
        });
    }
    else {
        input.addEventListener("change", function () {
            color = this.value;
        });
    }
});
changeColorsField.forEach((input) => {
    input.addEventListener("change", function () {
        fieldDraw.style.background = this.value;
        colorField = this.value;
    });
});
eraser.addEventListener("click", function () {
    color = colorField;
});
restartGame.addEventListener("click", function () {
    fieldDraw.innerText = "";
    fieldDraw.style.background = "";
    colorField = "";
    color = "";
});
//# sourceMappingURL=index.js.map