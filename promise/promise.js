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
    console.log("Renderizando a pagina")

    simularDownload()
    .then(res => console.log(res))
    .catch(err => console.log(err))
    console.log("Página renderizada")

}
assyncDownload();