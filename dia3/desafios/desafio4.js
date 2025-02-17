// Crie um sistema de pedidos onde o usuário pode escolher entre três opções de lanche digitando um número:

// 1 → "Você escolheu um Hambúrguer"
// 2 → "Você escolheu uma Pizza"
// 3 → "Você escolheu um Sanduíche"
// Se for um número diferente desses, exiba "Opção inválida"

const prompt = require("prompt-sync")();

let lancheEscolihdo = parseInt(prompt("Escolha um lanche: (1,2 ou 3) "));

switch(lancheEscolihdo){
    case 1:
        console.log("Você escolheu Hambúrguer");
        break;
    case 2:
        console.log("Você escolheu Pizza");
        break;
    case 3:
        console.log("Você escolheu Sanduíche");
        break;
    default:
        console.log("Opção inválida")
}