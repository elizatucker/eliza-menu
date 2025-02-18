const button = document.querySelector("#button")
const disclaimer = document.querySelector("#disclaimer")
let showing = false

const onClick = function() {
   if (showing == false) {
    disclaimer.innerHTML = "Oat milk, almond milk adds $0.60. Ingredient subsitutions and additions adds $1.00"
    showing = true
   } else {
    disclaimer.innerHTML = ""
    showing = false
   }
}

button.addEventListener("click", onClick)