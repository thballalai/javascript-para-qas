// Crie uma função que receba um nome e verifique se ele contém a letra "a", retornando true ou false.

// Declarção de função verificarPalavra que recebe palavra e letra para verificar a presença de uma letra na palavra
function verificarPalavra(palavra, letra){
    let palavraFormatada = palavra.toLowerCase();
    let letraFormatada = letra.toLowerCase();

    for(let i = 0; i < palavraFormatada.length; i++){
        if(palavraFormatada[i] == letraFormatada) return true;
    }

    return false;
}

// Inicialização da constante que captura input do usuário
const prompt = require("prompt-sync")();

// Inicialização de variável chamada nome para receber input do usuário
let nome = prompt("Digite o nome que deseja verificar: ");

// Operador ternário que verifica se na variável nome existe a letra A para decider qual mensagem vai ser mostrada na tela
verificarPalavra(nome, "a") ? console.log(`O nome ${nome} contém a letra A`) : console.log(`O nome ${nome} não contém a letra A`);

// Saida
// Digite o nome que deseja verificar: Antonio
// O nome Antonio contém a letra A