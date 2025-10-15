var lista = []
function add(){
    let nu = document.getElementById('num')
    let n = document.getElementById('num').value
    let num = Number(n)
    let selec = document.getElementById('nums')
    if(n == ''){
        window.alert('Escreva algo')
    }else if(lista.includes(num) || num < 1 || num > 100){
        window.alert('O número já está na lista, ou é inválido')
    }else{
        selec.innerHTML += `<option value="${num}">O número ${num} foi adicionado</option>`
        lista.push(num)
    }
    nu.value = ""
}
function finalizar(){
    let res = document.getElementById('resultado')
    let soma = 0
    let media = 0
    for(let i = 0; i < lista.length; i++){
        soma += lista[i]
    }
    media = soma/lista.length
    lista.sort((a, b) => a - b)
    res.innerHTML += `<p>Ao todo a lista tem ${lista.length} números.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${lista[lista.length - 1]}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${lista[0]}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.`
    res.innerHTML += `<p>A media dos valores digitados é ${media}.`
    res.innerHTML += `<p>E a lista ordenada ficaria assim: ${lista}</p>`
}
let input = document.getElementById('num')
function place(){
    if(window.matchMedia('(max-width: 500px)').matches){
        input.placeholder = "Digite"
    }
    else{
        input.placeholder = "Digite um número"
    }
}
place()
window.addEventListener('resize', place)