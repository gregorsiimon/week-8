const userInput = document.querySelector("#userInput")
const numberofprints = document.querySelector("#numberOfPrints")
const button = document.querySelector("button")
const result = document.querySelector("#resultPrints")

button.addEventListener("click", () => {
    result.innerHTML = ""
    const userInputText = userInput.value
    const n = numberofprints.value

    for(let i = 0; i < n; i++) {
        let newLi = document.createElement("li")
        newLi.innerText = `${i + 1}. ${userInputText}`
        result.appendChild(newLi)
    }
})