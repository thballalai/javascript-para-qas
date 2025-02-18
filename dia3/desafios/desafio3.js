// Um jogo retorna dois valores: pontosJogador e pontosAdversario. Crie uma lógica que:

// Se pontosJogador for maior, exiba "Você venceu! 🏅"
// Se pontosAdversario for maior, exiba "Você perdeu. 😢"
// Se forem iguais, exiba "Empate! ⚖️"

// Inicialização da constante que captura input do usuário
const prompt = require("prompt-sync")();

// Inicialização da variável pontosJogador que armazena input do usuário
let pontosJogador = prompt("Informe quantos pontos você fez: ");

// Inicialização da variável pontosAdversario que armazena input do usuário
let pontosAdversario = prompt("Informe quantos pontos o seu adversário fez: ");

// Compara os valores de pontosJogador e pontosAdversario para determinar o que será exibido na tela
if (pontosJogados > pontosAdversario){
    console.log("Você venceu!");
} else if (pontosJogador < pontosAdversario) {
    console.log("Você perdeu!");
} else {
    console.log("Empate!");
}

// Saída:
// Informe quantos pontos você fez: 50
// Informe quantos pontos o seu adversário fez: 48
// Você venceu!