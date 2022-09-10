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

    Promise.all([
        simularDownload(),
        simularDownload(),
        simularDownload(),
        simularDownload(),

    ]).then(res => {
        console.log("todas as imagens foram baixadas")
    })
    console.log("Página renderizada")
}
assyncDownload()