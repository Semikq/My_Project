let num = 1
const mainDiv = document.getElementById("mainDiv")
const counting = document.getElementById("counting")

const table = document.createElement("table")
for(let i = 1;i <= 4;i++){
    const tr = document.createElement("tr")
    for(let j = 1;j <= 4;j++){
        const td = document.createElement("td")
        const input = document.createElement("input")
        input.type = "button"
        input.value = "Suslik"

        input.addEventListener("click", function(){
            if(num === 100){
                num = 0
                alert("You win")
            }
            counting.innerText = num++
            input.disabled = !input.disabled
            timer()
        })

        function timer(){
            let time = input.disabled ? (Math.random() * (2200 - num)) : (Math.random() * 10000)
            input.disabled = !input.disabled
            let timeoutId = setTimeout(timer, time)
            return timeoutId
        }

        timer()
        td.append(input)
        tr.append(td)
    }
    table.append(tr)
}

mainDiv.append(table)