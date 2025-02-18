// Crie um contador regressivo de 10 a 0 e exiba "Hora de começar!" quando atingir 0.

// Inicialização da constante que captura input do usuário
const prompt = require("prompt-sync")();

// Inicialização de variáveis timer e inicioContador
let timer = 0;
let inicioContador = "";

// Estrutura de repetição que verifica se pode iniciar o contador
do{
    inicioContador = prompt("Quer começar a contagem? [s/n] ");
    if (inicioContador != "s" && inicioContador != "n"){
        console.log("Por favor, digitar s para sim ou n para não");
    }
    if (inicioContador == "n"){
        console.log("Aguardando poder começar.")
    }
}while(inicioContador!="s");

// Estrutura de repetição que armazena o input do usuário válido na variável timer 
do{
    timer = parseInt(prompt("Informe o tempo para o temporizador em segundos: "));
    if (timer <= 0){
        console.log("Por favor, informe um número positivo maior que 0");
    }
}while(timer<=0);

// Estrutura de repetição que realiza a contagem regressiva da variavel timer
for(let i = 0; i < timer; i++){
    console.log(`Restam ${timer-i} segundos`);
}
console.log("Hora de começar!");

// Saída:
// Quer começar a contagem? [s/n] s
// Informe o tempo para o temporizador em segundos: 10
// Restam 10 segundos
// Restam 9 segundos
// Restam 8 segundos
// Restam 7 segundos
// Restam 6 segundos
// Restam 5 segundos
// Restam 4 segundos
// Restam 3 segundos
// Restam 2 segundos
// Restam 1 segundos
// Hora de começar!