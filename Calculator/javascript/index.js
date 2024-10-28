"use strict";
const containerButton = document.getElementById("containerButton");
const display = document.getElementById("display");
const arrSymbols = [
    ["C", "+/-", "%", "/"],
    ["7", "8", "9", "Х"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="]
];
let firstValue;
let sign;
for (let i = 0; i < arrSymbols.length; i++) {
    for (let j = 0; j < arrSymbols[i].length; j++) {
        const button = document.createElement("input");
        button.type = "button";
        button.value = arrSymbols[i][j];
        if (button.value === "0")
            button.classList.add("zero");
        else
            button.classList.add("button");
        button.addEventListener("click", () => buttonAction(button.value));
        containerButton.append(button);
    }
}
function buttonAction(value) {
    if (["/", "Х", "-", "+"].includes(value)) {
        if (display.textContent && !firstValue) {
            sign = value;
            firstValue = Number(display.textContent);
            display.textContent = "";
        }
    }
    else if (value === "=") {
        switch (sign) {
            case "/":
                display.textContent = String(firstValue / Number(display.textContent));
                break;
            case "Х":
                display.textContent = String(firstValue * Number(display.textContent));
                break;
            case "-":
                display.textContent = String(firstValue - Number(display.textContent));
                break;
            case "+":
                display.textContent = String(firstValue + Number(display.textContent));
                break;
        }
        sign = "";
        firstValue = 0;
    }
    else if (value === "C") {
        display.textContent = "";
    }
    else if (value === "+/-") {
        if (display.textContent)
            display.textContent = String(Number(display.textContent) * -1);
    }
    else if (value === "%") {
        if (display.textContent)
            display.textContent = String((Number(display.textContent) / 100));
    }
    else if (value === ".") {
        if (display.textContent && !display.textContent.includes("."))
            display.textContent += ".";
    }
    else if (display.textContent.length < 15) {
        display.textContent += value;
    }
}
display.addEventListener("click", function () {
    if (display.textContent.length !== 0) {
        display.textContent = display.textContent.slice(0, -1);
    }
});
//# sourceMappingURL=index.js.map