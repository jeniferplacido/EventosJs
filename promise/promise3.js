function randon(max){
    return Math.random() *max;
}
function simularDownload(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
        console.log('Imagem baixada')
    }, randon(1000)) 
    })
   
}
function assyncDownload(){
    console.log("renderizando página");
    simularDownload()
    .then(res =>{
        console.log("Promessa resolvida com: ")
        return res + "processada"
    })
    .then(res =>{
        console.log(res)
    })
    console.log("Pagina renderizada")
    }
    assyncDownload()