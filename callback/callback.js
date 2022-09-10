function teste(nome){
    alert('Hello ' + nome)
}
function processarInput(callback){
    var nome = prompt("Digite o seu nome: ")
    callback(nome)
}
processarInput(teste)
setTimeout(()=>{
    console.log("Isto é uma função callback")
},3000 )
console.log("Executando.....")

window.addEventListener('click', evt =>{
    console.log(evt)
    console.log("houve um click na janela")
})