// Use switch para exibir uma recomendação de destino de viagem com base em um número digitado pelo usuário (1 para praia, 2 para montanha, etc.).

// Inicialização da constante que captura input do usuário
const prompt = require('prompt-sync')();

// Inicialização de variável destino para receber input do usuário
let destino = prompt('Insira um número: ');

// Verificação da variável destino para informar qual o destino escolhido
switch(destino){
    // Caso tenha sido informado 1, irá realizar as seguintes ações:
    case "1":
        // Exibir na tela "Praia" 
        console.log('Praia');
        // Interromper a verificação switch
        break;
    // Caso tenha sido informado 2, irá realizar as seguintes ações:
    case "2":
        // Exibir na tela "Montanha"
        console.log('Montanha');
        // Interromper a verificação switch
        break;
    // Caso tenha sido informado 3, irá realizar as seguintes ações:
    case "3":
        // Exibir na tela "Floresta"
        console.log('Floresta');
        // Interromper a verificação switch
        break;
    // Caso nenhum das outras opções tenham sido selecionadas, irá realizar as seguintes ações:
    default:
        // Exibir na tela "Internacional"
        console.log('Internacional');
}

// Saída:
// Insira um número: 6
// Internacional