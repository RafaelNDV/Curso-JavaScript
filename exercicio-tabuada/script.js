function gerar(){
    let num = Number(document.getElementById('num').value)
    document.getElementById('res').innerHTML = ``
    for(let i = 1 ; i <=9 ; i++){
        document.getElementById('res').innerHTML += `<div>${num} x ${i} = ${num * i}</div>`
    }
}


