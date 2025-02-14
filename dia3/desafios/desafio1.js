const prompt = require("prompt-sync")();

let temperatura = parseInt(prompt("Qual a temperatura? "));

if (temperatura>25){
    console.log("Está muito quente!");
} else if(temperatura>10){
    console.log("Temperatura agradável.");
} else {
    console.log("Está muito frio!");
}