const button = document.getElementById("idButton")

const dollar = 5.14

const convertValues = () => {
const input = document.getElementById("valueInput").value
const realValue = document.getElementById("real-value-txt")
const dollarValue = document.getElementById("dolar-Value")
//realValue.innerHTML = input

realValue.innerHTML = new Intl.NumberFormat("pt-BR",{
    style: "currency",
    currency: "BRL"}).format(input)

    dollarValue.innerHTML = new Intl.NumberFormat("en-US",{
    style: "currency",
    currency: "USD"}).format(input / dollar)


//dollarValue.innerHTML = input / dollar
}

button.addEventListener('click',convertValues)