const element = document.querySelector('h1')

element.innerText = "hello world" //altera o txt selecionado na tag, mas não interpreta as tags html

const element2 = document.querySelector('h2')

element2.textContent = "hello world" //altera o txt selecionado na tag, mas não interpreta as tags html

const element3 = document.querySelector('h3')

element3.innerHTML = "hello <small>world</small> <p> teste </p>" //altera o txt selecionado na tag, e interpreta as tags html