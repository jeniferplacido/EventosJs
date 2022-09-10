function randon(max){
    return Math.random() *max;
}
function simulateDownload(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            try{
                throw Error("Eita deu erro!")
            } catch(e){
                reject(e)
            }
            resolve("imagem baixada")
        }, randon(1000))
    })
}
function assyncDownload(){
    console.log("Renderizando página");
    simulateDownload()
    .then(res =>{
        console.log("Promessa resolvida com: ");
        console.log(res)
    })
    .catch(err =>{
        console.log("Promessa rejeitada com: ")
        console.log(err)
    });
    console.log("Página renderizada")
}
assyncDownload();


