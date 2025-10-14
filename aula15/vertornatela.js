let valores = [2, 5, 6, 7, 3, 8]
console.log(valores)
for(let i = 0; i <= 5; i++){
    console.log(`A posição é ${i} e o número guardado é ${valores[i]}`)
}
for(let pos in valores){
    console.log(`teste > ${valores[pos]}`)
}