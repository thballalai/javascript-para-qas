const prompt = require("prompt-sync")();
let w = true;
let nivelBateria;

while(w==true){
    nivelBateria = parseInt(prompt("Qual o nível de batéria? (entre 1 e 100) "));
    if (nivelBateria>=1 && nivelBateria<=100){
        break;
    }
}



if (nivelBateria>80){
    console.log("Bateria cheia!");
} else if(nivelBateria>30){
    console.log("Bateria moderada.");
} else {
    console.log("Bateria fraca! Conecte ao carregador!");
}