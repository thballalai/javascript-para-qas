// Crie uma variável com o nome completo de uma pessoa e exiba apenas o primeiro nome.

const prompt = require('prompt-sync')();

let nomeCompleto = prompt("Informe o seu nome completo: ");
nomeCompleto = nomeCompleto.trim();
let primeiroNome = "";
let i = 0;

while(nomeCompleto[i] != " "){
    primeiroNome = primeiroNome+nomeCompleto[i];
    i++;
}

console.log(primeiroNome);