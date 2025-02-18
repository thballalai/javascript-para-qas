// Crie uma variável nivelBateria (de 0 a 100) e exiba mensagens como:

// "Bateria cheia! ⚡" se for maior que 80
// "Bateria moderada 🔋" se estiver entre 30 e 80
// "Bateria fraca! Conecte o carregador! ⚠️" se for menor que 30

// Inicialização da constante que captura input do usuário
const prompt = require("prompt-sync")();

// Inicialização da variável nivelBateria
let nivelBateria = 0;

// Estrutura de repetição que garante a primeira execução do código
do{
    // Variável nivelBateria recebe input do usuário
    nivelBateria = parseInt(prompt("Qual o nível da bateria? (entre 1 e 100) "));
    // Verificado se nivelBaterial recebeu input válido
    if (nivelBateria <= 0 || nivelBateria > 100){
        console.log("Valor inválido. Informe novamente.");
    }
}while(nivelBateria <= 0 || nivelBateria > 100);

// Verificação do valor de nivelBateria para determinar a mensagem que será exibida na tela
if (nivelBateria>80){
    console.log("Bateria cheia!");
} else if(nivelBateria>30){
    console.log("Bateria moderada.");
} else {
    console.log("Bateria fraca! Conecte ao carregador!");
}

// Saída:
// Qual o nível da bateria? 105
// Valor Inválido. Informe novamente.
// Qual o nível da bateria? 55
// Bateria moderada.