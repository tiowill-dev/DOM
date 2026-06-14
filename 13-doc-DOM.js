const button = document.querySelector('button')
const select = document.querySelector('select')
const input = document.querySelector('input')

button.addEventListener ('click',()=>{alert("você clicou")})
select.addEventListener ('change',()=>{console.log(select.value)})
input.addEventListener ('focus', ()=>{console.log("deu foco")})