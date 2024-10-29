const openSelectColor = document.getElementById("openSelectColor") as HTMLSpanElement
const draw = document.getElementById("draw") as HTMLDivElement
const selectColor = document.getElementById("selectColor") as HTMLDivElement

openSelectColor.addEventListener("click", function(): void{
    if(draw.classList.value){
        draw.classList.remove("active")
        selectColor.classList.remove("active")
    }else{
        draw.classList.add("active")
        selectColor.classList.add("active")
    }
})