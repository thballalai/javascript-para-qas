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