function fatorial(n){
    var soma = n
    for(var i = n; i > 1; i--){
        soma = soma * (i - 1)
    }
    return soma
}
console.log(fatorial(5))