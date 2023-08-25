//initialize the count
//listen for clicks on the increment button
//change  the count-el in the html to reflect the new count
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
   let countStr = count + " - "
   saveEl.textContent += countStr
   countEl.textContent = 0
   count = 0

}