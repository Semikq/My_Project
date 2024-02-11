const select = document.getElementById("select")
const obj = {Celsius: "(celsius * 9/5) + 32", Fahrenheit: "(5/9) * (fahrenheit - 32)"}

for(const element in obj){
    const option = document.createElement("option")
    option.value = obj[element]
    option.textContent = element
    select.append(option)
}

const example = document.getElementById("example")
const input = document.getElementById("input")
const inputResult = document.getElementById("inputResult")

inputResult.value = 0;
example.textContent = "(celsius * 9/5) + 32"

function update() {
    let result = 0
    const number = +input.value
    const optionValue = select.value
    if(optionValue === "Celsius"){
        result = (number * 9/5) + 32
    }else{
        result = (5/9) * (number - 32)
    }
    inputResult.value = result
    example.textContent = select.value;
}
select.addEventListener("change", function(){
    input.value = ''
    update()
})
input.addEventListener("input", update)