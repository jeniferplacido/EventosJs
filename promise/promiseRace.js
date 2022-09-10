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
    console.log("Renderizando página");

    Promise.race([
        simularDownload(),
        simularDownload(),
        simularDownload(),
        simularDownload(),

    ]).then(res => {
        console.log("algumas imagens foram baixadas")
    })
    console.log("Página renderizada")
}
assyncDownload()