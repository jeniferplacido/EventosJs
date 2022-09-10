# **Promises / Async Await/ Callback**

------

O JavaScript é uma linguagem single-threaded. Isso significa que o engine do JS consegue processar uma declaração por vez em sequência. Linguagens com uma única thread simplificam o código por não ter que lidar com simultaneidade. Isso também quer dizer que não conseguem lidar com processos longos, como baixar uma imagem da rede sem bloquear o resto da execução. Códigos que executam apenas uma tarefa por vez em sequência são chamados síncronos.

Vamos entender na prática como funciona um evento síncrono e assíncrono!

Sincrono:

```
function simularDownload(){
    for(i = 0; i < 100000000; i++){
        //
    }
    console.log("Imagem Baixada")
}

function sincronaDownload(){
    console.log('Renderizando a página');

    simularDownload()
    console.log("Pagina Renderizada")
}
sincronaDownload();
```

Assíncrono:

```
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
```



## **Promises**

Promise é um objeto utilizado para processamento assíncrono. Uma Promise (“promessa”) representa um valor que pode estar disponível agora, no futuro ou nunca.

Sintaxe:

```
new Promise(function(resolve, reject){
//
})
```

A função passada como argumento para a promise é chamada de executor. Ela recebe dois argumentos (resolve e reject). Esta função é chamada imediatamente pela implementação da Promise.
Os dois argumentos do executor são funções que, quando chamadas, resolvem (em caso de sucesso) ou rejeitam (quando ocorre um erro) a promessa. O executor define o que deve ser executado assincronamente que deve chamar resolve ou reject quando for concluído para definir o estado da promessa.

Vamos entender na prática como funciona uma promessa!

Promise 1

```
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
```

Promise 2

```
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
```

Promise 3

```
function randon(max){

  return Math.random() *max;

}

function simularDownload(){

  return new Promise((resolve, reject) =>{

​    setTimeout(() =>{

​    console.log('Imagem baixada')

  }, randon(1000)) 

  })

  

}

function assyncDownload(){

  console.log("renderizando página");

  simularDownload()

  .then(res =>{

​    console.log("Promessa resolvida com: ")

​    return res + "processada"

  })

  .then(res =>{

​    console.log(res)

  })

  console.log("Pagina renderizada")

  }

  assyncDownload()
```

Como vimos, uma promise pode se tornar resolvida com um valor ou rejeitada por conta de um erro. Quando um desses estados ocorrem, o método then do Promise é chamado, que por sua vez executa outro método de tratamento associado ao estado.A função passada como parâmetro para then será executada em caso de resolução e catch será chamado em caso de rejeição.then recebe como argumento o valor passado para resolve e catch recebe o valor passado para reject.

<p align="center">
  <img width="700" height="456" src="https://lh6.googleusercontent.com/Gpoc9hsGv2XA7OPJn0HvncXfy6Gs_kYwlXdsU1cHGu8RCeSucHT2sFMVQNDjIyQ_ph1xJFGJvsWBERT7NokPOmiQ0fX0Jxk7_iRT2MCheYreYfATA8XvwKv-L2BjUy7gX4ARFYMgYnbtUrIEZDbGI5dmcWDwe9c9vhOO5VulznHx9S7GSAoqQK3TBPWW7ik">
</p>



### Promises - outros métodos

<p align="center">
  <img width="700" height="456" src="https://lh6.googleusercontent.com/-xdD52GiTcbGqj4M36wHi6Xh12cEWnLAXqF6a6tF931l-86hCl-7eSzM4oTDTYb_KtasdmU8Yr9Xb6oI_W9a_tjYWuZhVw65M6d4gd3s6KK5KaqzyqpB04NCgfQxPt4x4UKNP-YvVHnqHiy2kKLuTwZoZ81eoHEATZjlU5_Vnd5zuJ_wBseC2_yt1qf88UQ">
</p>



O objeto Promise fornece mais doismétodos além de then e catch:

● Promise.all - recebe uma lista de promises. Retorna uma promise que é resolvida somente quando todas as promises da lista forem resolvidas. É rejeitada com o motivo da primeira promise que for rejeitada.

```
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
```

● Promise.race - recebe uma lista de promises. Retorna um promise que é resolvida ou rejeitada quando alguma das promises da lista é resolvida ou rejeitada.

```
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
```

------

# Async / Await

Promises geram um certo overhead, precisamos instanciar, resolver ou rejeitar, tratar com then ou catch, etc... **async / await** resolvem esse problema e tornam assincronicidade no JavaScript
bem mais simples. Para começar, vamos entender o papel da palavra chave async.

O código abaixo declara uma função que retorna uma string. Nada novo por aqui.

```
function hello(){
return "Hello"
}
```

O segundo código declara a mesma função usando a palavra chave async. Agora, ao invés de retornar uma string ela retorna uma promise resolvida com a string. 

```
async function hello(){
    return "Hello"
}
hello().then(res => console.log(res));
```

Em resumo, async diz para a função retornar uma promise resolvida com o valor ao invés de retornar diretamente o valor. Async se torna realmente mais vantajoso quando usado em
combinação com a palavra chave await. Await faz com que a execução da função async baseada em uma promise espere até que a Promise seja resolvida.

```
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

```

Note que no código apenas chamamos simularDownload sem precisar ficar
declarando thens e catchs. O tratamento é feito dentro da própria função e o código dentro de
asyncDownload continua executando normalmente.

Uma vez que async faz com que sua função retorne uma promise, você pode adotar uma solução híbrida para que a função simulatrDownload se torne mais flexível. Ou seja, quem decide o que fazer com a resposta é quem chama a função, e não a função em si.

Veremos a aplicação de Promise e Async / Await em requisições HTTP e chamadas de API mais para frente, mas tenha em mente que await funciona com qualquer função que retorne uma
promise. Logo, podemos usar com a API fetch, por exemplo.

------

## **Callback**

Antigamente, o JavaScript fornecia apenas callbacks para lidar com operações assíncronas. As duas formas vistas nos exemplos anteriores surgiram para facilitar o modo como isso era feito. Agora veremos o que são callbacks, como utilizá-los e o que levou a sua substituição.

Uma função callback é uma função passada para outra função como argumento, que é então chamada dentro da função externa para completar algum tipo de rotina ou ação.

```
function teste(nome){
    alert('Hello ' + nome)
}
function processarInput(callback){
    var nome = prompt("Digite o seu nome: ")
    callback(nome)
}
processarInput(teste)
```

O exemplo anterior é um callback síncrono, que é executado imediatamente.

Note, no entanto, que callbacks são geralmente usados para executar alguma coisa depois de uma operação assíncrona ser terminada.

```
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
```

setTimeout é uma operação assíncrona e que recebe um callback para ser executado no final da contagem.

Como vimos no primeiro exemplo, a função para a qual passaremos o callback pode executá-la passando argumentos.

O callback depende de um parâmetro, que é passado para ele pela função que o executa.

------

#### Callback em eventos

JavaScript é uma linguagem orientada a eventos. Nós também usamos callbacks quando estamos declarando que queremos fazer algo quando algum evento acontecer.

Abra do browser e digite o seguinte exemplo no console do developer tools.

```
window.addEventListener('click', evt =>{
    console.log(evt)
    console.log("houve um click na janela")
})
```

Passamos um callback para a função addEventListener que diz o que queremos fazer quando a página atual for clicada. Fazemos uso do argumento passado para nosso callback, que é um objeto representando o evento em si.

------

#### Callback hell

Callbacks foram, por muito tempo, o único modo de lidar com operações assíncronas
no JavaScript. Uma das motivações para possibilitar outras formas de lidar com
assincronicidade foi a falta de escalabilidade das soluções quando era necessário
encadear callbacks.

Um exemplo do que era comum quando havia necessidade de encadear operações
assíncronas:

```
function verificarUsuario(nome, senha, callback){
    dataBase.verifyUser(nome, senha, (error, infoUsuario)=>{
        if(error){
            callback(error)
        }else{
            dataBase.getRoles(nome, (error, roles) =>{
                if(error){
                    callback(error)
                }else{
                    dataBase.logAccess(userName, (error)=>{
                        if(error){
                            callback(error)
                            
                            }else{
                                callback(null, infoUsuario, roles)
                            }
                        }
                    )
                }
            })
        }
    })
}
```

Esse tipo de código é conhecido como Callback Hell ou Pyramid of Doom. É difícil de manter e não respeita o princípio de não repetição de código.

------

# **Event Loop**

- O **Event Loop** é um recurso da arquitetura do Node;

- O Node.js executa uma linha por vez e de cima para baixo o código escrito;

- Isso nos ajuda a evitar problemas de concorrência, garantindo assim a execução do código;

- É preciso ter cuidado com bloqueios de fluxo, como loops infinitos;

<p align="center">
  <img width="700" height="456" src="https://lh5.googleusercontent.com/LgwA16C8VqUSZQxnuVxyzVMW4VPQyWwiFpwvZyTRnI-WlPikP1PwhbX63D0YeCZrT2AfEuXb7doENvQQB4c9v9Wajvy7qz0QHeu30qxBnCVEf2qu7CN5cMPZR2OrD3pZsTpOErkJmogZ5_QdircbO6wPRJSDMGCaukFAcUrRsAJr0PZWtwUcYbQM7v17giw">
</p>

Sempre que você chama uma função síncrona ela vai para uma “call stack” ou pilha de chamadas de funções com o seu endereço em memória, parâmetros e variáveis locais. Se a partir dessa função você chamar outra, esta nova função é empilhada em cima da anterior (não literalmente, mas a ideia é essa). Quando essa nova função termina, ela é removida da call stack e voltamos o fluxo da função anterior. Caso a nova função tenha retornado um valor, o mesmo é adicionado à função anterior na call stack.

Mas o que acontece quando chamamos algo como setTimeout, http.get, process.nextTick, ou fs.readFile? Estes não são recursos nativos do V8, mas estão disponíveis no Chrome WebApi e na C++ API no caso do Node.js.

Vamos criar uma aplicação Node.js bem comum – um servidor executando em localhost:3000. Após receber a requisição, o servidor vai chamar wttr.in/ para obter informações do tempo e imprimir algumas mensagens no console e depois retorna a resposta HTTP.

