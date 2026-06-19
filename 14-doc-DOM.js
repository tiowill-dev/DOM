const button = document.getElementById("idButton")

const dollar = 5.14

const convertValues = () => {
const input = document.getElementById("valueInput").value

console.log(input / dollar)
}

button.addEventListener('click',convertValues)