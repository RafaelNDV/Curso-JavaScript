function fatorial(n){
    let soma = n
    for(let i = n; i >= 1; i = i - 1){
        soma = soma * (i - 1)
    }
    return i
}
console.log(fatorial(5))