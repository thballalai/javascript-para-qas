// Crie uma string com uma frase desorganizada (exemplo: " ola MUNDO! "). Corrija o formato, removendo espaços extras e deixando a primeira letra maiúscula.

const prompt = require('prompt-sync')();

let texto = prompt("Digite aqui um texto curto: (200caracteres) ");
let textoCorrigido = "";
let letraM

if(texto.length < 200) {
    textoCorrigido = texto.trim().toLowerCase();
    textoCorrigido = textoCorrigido.charAt(0).toUpperCase() + textoCorrigido.slice(1);
    console.log(`Texto após as correções: ${textoCorrigido}`);
} else {
    console.log("Texto muito longo!");
}