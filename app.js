//lista numero secreto
let listaDeNumerosSorteados = [];
let numeroLimiteMultiplicao = 10;

let numeroSecreto = gerarnumAleatorio ();
console.log (numeroSecreto);
tentativas = 1;




//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Jogo do número secreto";

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um número entre 1 á 10"

//função com parametro
function exibirTextos(tag, texto){
    let paragrafo = document.querySelector(tag);
    paragrafo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
exibirMensagensIniciais();


//função sem parametro
function verificarChute(){
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto){
        exibirTextos("h1", "Acertou!!");
         let mensagemTentativa = tentativas > 1? "tentativas": "tentativa";
        exibirTextos("p", `Você descobriu o número secreto com ${tentativas} ${mensagemTentativa}`);
        document.getElementById("reiniciar").removeAttribute("disabled");

    }else{
        if (chute >numeroSecreto){
            exibirTextos("p", "O número é menor do que o chute");
        }else{
            exibirTextos("p", "O número é maior do que o chute");
        } tentativas ++ ;
        limparCampo();
    }

}   

function gerarnumAleatorio (){
    let numeroEscolhido= parseInt(Math.random () *numeroLimiteMultiplicao +1);
    let quantidadeDeElementosLista = listaDeNumerosSorteados.length;
    //length exibe a quantidade de elementos de uma lista.
    //se ja completou todos os numeros sem repetição ai vai ter que zerar a lista e repetir 
        if(quantidadeDeElementosLista == numeroLimiteMultiplicao);
            listaDeNumerosSorteados = []
    //para não repetir um número em novo jogo
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarnumAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        //Para adicionar um elemento ao final da array, você pode usar o método push
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    } 
}

function limparCampo(){
chute = document.querySelector("input");
chute.value = "";
}

function exibirMensagensIniciais(){
    exibirTextos("h1", "Jogo do número secreto");
    exibirTextos("p", "Escolha um número entre 1 á 10");

}


function reiniciarJogo(){
    numeroSecreto = gerarnumAleatorio ();
    console.log(numeroSecreto);
    limparCampo();
    tentativas =1;
    exibirMensagensIniciais();
    document.getElementById ("reiniciar").setAttribute("disabled", true);
}


