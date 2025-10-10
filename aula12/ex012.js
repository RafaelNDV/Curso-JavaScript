let agora = new Date()
let hora = agora.getHours()
console.log(`A hora de agora é ${hora}h`)
if(hora < 12 && hora >= 6){
    console.log('Bom dia!')
}else if(hora < 18 && hora >= 12){
    console.log('Boa tarde')
}else{
    console.log('Boa noite')
}