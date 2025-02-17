// Um jogo retorna dois valores: pontosJogador e pontosAdversario. Crie uma lógica que:

// Se pontosJogador for maior, exiba "Você venceu! 🏅"
// Se pontosAdversario for maior, exiba "Você perdeu. 😢"
// Se forem iguais, exiba "Empate! ⚖️"

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