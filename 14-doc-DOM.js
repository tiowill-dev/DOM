const button = document.getElementById("idButton")
const select = document.getElementById("currency-select")
const dollar = 5.14
const euro = 5.87

const convertValues = () => {
    const input = document.getElementById("valueInput").value
    const realValue = document.getElementById("real-value-txt")
    const dollarValue = document.getElementById("dolar-Value")
    const euroValue = document.getElementById('dolar-Value')
    //realValue.innerHTML = input

    realValue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(input)

    if (select.value === "USR$ Dólar Americano") {
        dollarValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(input / dollar)
    }

    if (select.value === "€ Euro") {
        euroValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(input / euro)
    }
    //dollarValue.innerHTML = input / dollar
};
chandCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if (select.value === "USR$ Dólar Americano") {
        currencyName.innerHTML = 'Dólar Americano'
        currencyImg.src = "./assets/eua.png"
    }

    if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener("change", chandCurrency)