"use strict";
const openSelectColor = document.getElementById("openSelectColor");
const draw = document.getElementById("draw");
const selectColor = document.getElementById("selectColor");
openSelectColor.addEventListener("click", function () {
    if (draw.classList.value) {
        draw.classList.remove("active");
        selectColor.classList.remove("active");
    }
    else {
        draw.classList.add("active");
        selectColor.classList.add("active");
    }
});
//# sourceMappingURL=index.js.map