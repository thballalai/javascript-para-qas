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