// Crie uma função que receba uma palavra e conte quantas vogais (a, e, i, o, u) existem nela.

// Declaração de função contarLetra reponsável por contar o número de uma letra específica em uma palavra e retorna o total desta letra
function contarLetra(palavra, letra){
    let count = 0;
    palavra = palavra.toLowerCase();
    for (let i = 0; i < palavra.length; i++){
        if(palavra[i] == letra) count++;
    }
    return count;
}

// Inicialização da constante que captura input do usuário
const prompt = require("prompt-sync")();

// Inicializa variável chamada palavra que armazena input do usuário
let palavra = prompt("Escreva uma palavra: ");
// Inicializa array chamada vogais que armazena os caracteres que são vogais
let vogais = ["a", "e", "i", "o", "u"];
// Inicializa variável chamada soma para armazenar um valor inteiro
let soma = 0;
// Transforma todos os caracteres da variável palavra em minúsculas por motivos estéticos
palavra = palavra.toLowerCase();

// Estrutura de repetição que percorre o array vogais fazendo a chamada da função contarLetra e exibe o resultado na tela
for(let i = 0; i < vogais.length; i++){
    console.log(`Existem ${contarLetra(palavra, vogais[i])} vogais ${vogais[i]} na palavra ${palavra}`);
    soma += contarLetra(palavra, vogais[i]);
}

//Exibe na tela a somatória total das vogais na palavra
console.log("---------------------------------------------");
console.log(`Existem ${soma} vogais na palavra ${palavra}`);

// Saída:
// Escreva uma palavra: ParaLELEPIpedO
// Existem 2 vogais a na palavra paralelepipedo
// Existem 3 vogais e na palavra paralelepipedo
// Existem 1 vogais i na palavra paralelepipedo
// Existem 1 vogais o na palavra paralelepipedo
// Existem 0 vogais u na palavra paralelepipedo
// ---------------------------------------------
// Existem 7 vogais na palavra paralelepipedo