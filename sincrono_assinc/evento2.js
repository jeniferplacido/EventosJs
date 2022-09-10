function randon(max){
    return Math.random() *max;
}
function simularDownload(){
    setTimeout(() =>{
        console.log('Imagem baixada')
    }, randon(1000))
}

function assyncDownload(){
    console.log("Renderizando a pagina");

    simularDownload();
    console.log("Página renderizada")

}
assyncDownload();