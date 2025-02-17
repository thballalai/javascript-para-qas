// Crie um contador regressivo de 10 a 0 e exiba "Hora de começar!" quando atingir 0.

const prompt = require("prompt-sync")();

let timer = 0;
let inicioContador = "";

do{
    inicioContador = prompt("Quer começar a contagem? [s/n] ");
    if (inicioContador != "s" && inicioContador != "n"){
        console.log("Por favor, digitar s para sim ou n para não");
    }
    if (inicioContador == "n"){
        console.log("Aguardando poder começar.")
    }
}while(inicioContador!="s");

do{
    timer = parseInt(prompt("Informe o tempo para o temporizador em segundos: "));
    if (timer <= 0){
        console.log("Por favor, informe um número positivo maior que 0");
    }
}while(timer<=0);

for(let i = 0; i < timer; i++){
    console.log(`Restam ${timer-i} segundos`);
}
console.log("Hora de começar!");