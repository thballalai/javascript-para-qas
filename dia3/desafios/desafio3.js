const prompt = require("prompt-sync")();

let pontosJogador = prompt("Informe quantos pontos você fez: ");
let pontosAdversario = prompt("Informe quantos pontos o seu adversário fez: ");

if (pontosJogados > pontosAdversario){
    console.log("Você venceu!");
} else if (pontosJogador < pontosAdversario) {
    console.log("Você perdeu!");
} else {
    console.log("Empate!");
}