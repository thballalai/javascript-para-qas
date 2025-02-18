//Crie um programa que analisa a temperatura do ambiente e exiba mensagens diferentes:

// Se estiver abaixo de 10°C, mostre "Está muito frio! ❄️"
// Se estiver entre 10°C e 25°C, mostre "Temperatura agradável. 😊"
// Se estiver acima de 25°C, mostre "Está muito quente! 🔥"

// Inicialização da constante que captura input do usuário
const prompt = require("prompt-sync")();

// Inicialização de variável temperatura que armazena input do usuário 
let temperatura = parseInt(prompt("Qual a temperatura? "));

// Verifica a variável temperatura para determinar a ação que será realizada
if (temperatura > 25){
    console.log("Está muito quente!");
} else if(temperatura > 10){
    console.log("Temperatura agradável.");
} else {
    console.log("Está muito frio!");
}

// Saída:
// Qual a temperatura? 25
// Temperatura agradável.