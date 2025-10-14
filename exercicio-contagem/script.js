function contar(){
    let inicio = Number(document.getElementById('inicio').value)
    let fim = Number(document.getElementById('fim').value)
    let passo = Number(document.getElementById('passo').value)
    let res = document.getElementById('res')
    if(document.getElementById('inicio').value == "" || document.getElementById('fim').value == "" || document.getElementById('passo').value == ""){
        window.alert('Não deixe campos vazios')
    }else if(passo <= 0){
        window.alert('Passo não pode ser 0 ou negativo, será 1')
        passo = 1
        res.innerHTML = `${inicio} > `
        for(let i = (inicio + passo); i <= fim; i = i + passo){
            res.innerHTML += `   ${i}   > `
        }
        res.innerHTML += ' 🏁 '
    }else if(inicio > fim){
        res.innerHTML = `${inicio}`
        for(let i = inicio - passo; i >= fim; i = i - passo){
            res.innerHTML += ` ${i} > `
        }
        res.innerHTML += ` 🏁 `
    }
    else{
        res.innerHTML = `${inicio} > `
        for(let i = (inicio + passo); i <= fim; i = i + passo){
            res.innerHTML += `   ${i}   > `
        }
        res.innerHTML += ' 🏁 '
    }
}