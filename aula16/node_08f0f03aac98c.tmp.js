function fatorial(n){
    for(let i = n; i >= 1; i--){
        i = i * i - 1
    }
    return i
}
console.log(fatorial(3))