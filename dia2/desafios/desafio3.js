// Use switch para exibir uma recomendação de destino de viagem com base em um número digitado pelo usuário (1 para praia, 2 para montanha, etc.).

const prompt = require('prompt-sync')();

let destino = prompt('Insira um número: ');

switch(destino){
    case "1":
        console.log('Praia');
        break;
    case "2":
        console.log('Montanhas');
        break;
    case "3":
        console.log('Floresta');
        break;
    default:
        console.log('Internacional');
}