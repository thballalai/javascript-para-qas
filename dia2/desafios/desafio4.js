// Crie uma variável senhaCorreta e senhaDigitada e exiba "Acesso permitido" se forem iguais, e "Senha incorreta" caso contrário.

const prompt = require('prompt-sync')();

let senhaCorreta = "1234";
let senhaDigitada = prompt("Informe a senha: ") == senhaCorreta ? console.log('Acesso Permitido') : console.log('Senha Incorreta');