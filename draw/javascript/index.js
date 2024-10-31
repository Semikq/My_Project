"use strict";
const openSelectColor = document.getElementById("openSelectColor");
const draw = document.getElementById("draw");
const selectColor = document.getElementById("selectColor");
const changeSizeField = document.getElementById("changeSizeField");
const numColumns = document.getElementById("numColumns");
const numLines = document.getElementById("numLines");
const fieldDraw = document.getElementById("fieldDraw");
let colorField = "#123346";
let color = "red";
openSelectColor.addEventListener("click", function () {
    if (draw.classList.value) {
        draw.classList.remove("active");
        selectColor.classList.remove("ac tive");
    }
    else {
        draw.classList.add("active");
        selectColor.classList.add("active");
    }
});
changeSizeField.addEventListener("click", function () {
    if (numColumns.value && numLines.value) {
        fieldDraw.innerHTML = "";
        const table = document.createElement("table");
        let isDrawing = false;
        table.addEventListener("mouseleave", () => {
            isDrawing = false;
        });
        for (let i = 0; i < parseInt(numColumns.value) || 4; i++) {
            const tr = document.createElement("tr");
            for (let j = 0; j < parseInt(numLines.value) || 4; j++) {
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
});
const changeColors = document.querySelectorAll(".changeColors");
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
const changeColorsField = document.querySelectorAll(".changeColorsField");
const eraser = document.getElementById("eraser");
changeColorsField.forEach((input) => {
    input.addEventListener("change", function () {
        fieldDraw.style.background = this.value;
        eraser.value = this.value;
    });
});
eraser.addEventListener("click", function () {
    color = colorField;
});
const restartGame = document.getElementById("restartGame");
// restartGame.addEventListener("click",function(): void{
//     fieldDraw.innerHTML = ""
//     colorField = ""
//     color = ""
// })
//# sourceMappingURL=index.js.map