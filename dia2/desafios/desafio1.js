//Crie um programa que receba uma idade e classifique a pessoa como "Criança", "Adolescente" ou "Adulto".

// Inicialização da constante que captura input do usuário
const prompt = require('prompt-sync')();

// Inicialização de variável idade para receber input do usuário com conversão para inteiro
let idade = parseInt(prompt('Qual é a sua idade? '));

// Verificação do valor de idade para definir se a pessoa é uma criança, um adolescente ou um adulto
if (idade < 10) {
    console.log('Criança');
} else if(idade < 18){
    console.log('Adolescente');
} else {
    console.log('Adulto');
}

// Saída:
// Qual é a sua idade? 18
// Adulto