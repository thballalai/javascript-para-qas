// Crie uma variável com o nome completo de uma pessoa e exiba apenas o primeiro nome.

// Inicialização da constante que captura input do usuário
const prompt = require('prompt-sync')();

// Inicialização de variável nomeCompleto que recebe input do usuário
let nomeCompleto = prompt("Informe o seu nome completo: ");

// Remoção de espaços vazios nas extremidades da variável nomeCompleto
nomeCompleto = nomeCompleto.trim();

// Inicialização da variável primeiroNome para armazenar 
let primeiroNome = "";

// Estrutura de repetição que irá repetir tantas vezes quanto tiver de caracteres na variável nomeCompleto
for(let i = 0; i < nomeCompleto.length; i++){
    // Verifica se o caractere naquela posição da variável nomeCompleto é um espaço para saber se acabou o primeiro nome
    if(nomeCompleto[i] == " "){
        // Armazena na variável primeiroNome os caracteres existentes entre o inicio da string nomeCompleto até o primeiro espaço
        primeiroNome = nomeCompleto.slice(0, i);
        // Interrompe a execução da estrutura de repetição
        break;
    }
}

// Mostra na tela o valor da variável primeiroNome
console.log(`O seu primeiro nome é ${primeiroNome}!`);

// Saída:
// Informe o seu nome completo: Marcos Dias Ferreira Santos
// O seu primeiro nome é Marcos!