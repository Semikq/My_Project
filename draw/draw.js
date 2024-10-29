










































// const field = document.getElementById("field")
// const hei = document.getElementById("hei")
// const wid = document.getElementById("wid")
// const update = document.getElementById("update")
// const reset = document.getElementById("reset")
// const eraser = document.getElementById("eraser")
// const tableColor = document.getElementById("tableColor")
// const colors = document.getElementById("colors")
// const color = document.getElementById("color")
// const red = document.getElementById("red")
// const green = document.getElementById('green')
// const blue = document.getElementById("blue")
// let col = "black"
// let is = false
// let heigh = 10
// let widt = 10

// update.addEventListener("click", function(){
//     if((hei.value < 50 && hei.value > 0) && (wid.value < 50 && wid.value > 0)){
//         heigh = hei.value
//         widt = wid.value
//         createTable()
//     }
// })

// eraser.addEventListener("click", function(){
//     col = tableColor.value
// })

// tableColor.addEventListener("input", function(){
//     const table = document.querySelector("table");
//     table.style.background = tableColor.value;
//     tableColor.style.background = tableColor.value
// });

// colors.addEventListener("input", function(){
//     col = colors.value
//     color.style.background = col
//     colors.style.background = col
// })

// color.addEventListener("click", function(){
//     col = colors.value
// })

// red.addEventListener("click", function(){
//     col = "red"
// })

// green.addEventListener("click", function(){
//     col = "green"
// })

// blue.addEventListener("click", function(){
//     col = "blue"
// })

// function createTable(){
// const table = document.createElement("table")
// table.style.width = "450px"
// table.style.height = "450px"
// table.border = "solid 1px black"
// table.style.borderCollapse = "collapse"
// table.style.background = "lightgray"
// for(let i = 1;i <= heigh;i++){
//     const tr = document.createElement("tr")
//     for(let j = 1;j <= widt;j++){
//         const td = document.createElement("td")

//         td.addEventListener("mousedown", function(){
//                 is = true
//                 td.style.background = col
//         })

//         td.addEventListener("mousemove", function(){
//             if(is){
//                 td.style.background = col
//             }
//         })

//         td.addEventListener("mouseup", function(){
//             is = false
//         })

//         td.style.userSelect = "none";

//         reset.addEventListener("click", function(){
//             td.style.background = tableColor.value
//         })
    
//         tr.append(td)
//     }
//     table.append(tr)
// }

// table.addEventListener("mouseleave", function(){
//     is = false
// })

// field.innerHTML = ""
// field.append(table)
// }

// createTable()