function contar(){
    let inicio = Number(document.getElementById('inicio').value)
    let fim = Number(document.getElementById('fim').value)
    let passo = Number(document.getElementById('passo').value)
    let res = document.getElementById('res')
    res.innerHTML = `${inicio} >`
    for(let i = (inicio + passo); i <= fim; i = i + passo){
        res.innerHTML += `   ${i}   >`
    }
    res.innerHTML += ' 🏁'
    
    
    //res.innerHTML = `${inicio} ${fim} ${passo}`
}