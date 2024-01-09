let display = document.getElementById("display");

function addButtonEventListener(className, value) {
    document.querySelector("." + className).addEventListener("click", function() {
        return display.innerHTML += value;
    });
}

addButtonEventListener("buttonOne", "1");
addButtonEventListener("buttonTwo", "2");
addButtonEventListener("buttonThree", "3");
addButtonEventListener("buttonFour", "4");
addButtonEventListener("buttonFive", "5");
addButtonEventListener("buttonSix", "6");
addButtonEventListener("buttonSeven", "7");
addButtonEventListener("buttonEight", "8");
addButtonEventListener("buttonNine", "9");
addButtonEventListener("buttonZero", "0");
addButtonEventListener("buttonAdd", "+");
addButtonEventListener("buttonSub", "-");
addButtonEventListener("buttonMull", "*");
addButtonEventListener("buttonDilet", "/");

document.getElementById("equals").addEventListener("click", function() {
    try {
        let result = eval(display.innerHTML);
        display.innerHTML = result;
    } catch (error) {
        display.innerHTML = "Error";
    }
});

document.getElementById("clear").addEventListener("click", function() {
    return display.innerHTML = "";
});
