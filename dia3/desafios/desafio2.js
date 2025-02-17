// Imagine que você está desenvolvendo um sistema de login. Cheque se o usuário está cadastrado (variável estaCadastrado) e se o código de acesso do usuário é válido (variável codigo) e valide se ele pode entrar:

// Se ele estiver cadastrado e o código for "1234", exiba "Acesso permitido! ✅"
// Se ele não estiver cadastrado ou se o código for qualquer outro valor, exiba "Acesso não permitido. Tente novamente. ❌"

const prompt = require("prompt-sync")();

let w = true;
let estaCadastrado;

while(w==true){
let cadastro = prompt("Você está cadastrado? [s/n] ");
if(cadastro=="s"||cadastro=="n"){
    if(cadastro=="s"){
        estaCadastrado = true;
    } else {
        estaCadastrado = false;
    }
    break
}
console.log("Resposta errada. Nos informe novamente.");
}

let password = prompt("Qual a senha? ");

if (password="1234"&&estaCadastrado){
    console.log("Acesso permitido!");
} else {
    console.log("Acesso não permitido. Tente novamente.");
}