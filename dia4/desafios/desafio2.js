// Escreva um código que verifique se uma string contém a palavra "QA". Se encontrar, exiba "Este texto menciona QA!", senão, "Nenhuma referência a QA encontrada.".

// Inicialização da constante que captura input do usuário
const prompt = require('prompt-sync')();

// Inicialização de variável texto para armazenar input do usuário
let texto = prompt("Digite aqui um texto curto: (Até 200 caracteres) ");

// Verificação se string tem o número máximo de caracteres para determinar se o aplicativa continuará sendo executado
if(texto.length < 200) {
    // Verificação se o texto possui o termo QA para determinar qual mensagem irá ser exibida na tela
    if(texto.includes("QA")) {
        console.log("Este texto menciona QA!");
    } else {
        console.log("Nenhuma referência a QA encontrada.");
    }
} else {
    console.log("Texto muito longo!");
}

// Saída:
// Digite aqui um texto curto: (até 200 caracteres) Semana do desafio de QA! Continuando os estudos!
// Esse texto menciona QA!