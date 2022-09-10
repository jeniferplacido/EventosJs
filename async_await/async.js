// async function hello(){
//     return "Hello"
// }
// hello().then(res => console.log(res));
function randon(max){
    return Math.random() *max;
}

async function simularDownload(){
    let result = await new Promise((resolve, reject)=>{
     setTimeout(()=>{
            resolve("Imagem baixada")
        }, randon(1000))
    })
console.log('Imagem baixada.')
}
function assyncDownload(){
    console.log("Renderizando a pagina")

    simularDownload()
    console.log("Página renderizada")

}
assyncDownload()
