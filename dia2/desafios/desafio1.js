//Crie um programa que receba uma idade e classifique a pessoa como "Criança", "Adolescente" ou "Adulto".

const prompt = require('prompt-sync')();

let idade = prompt('Qual é a sua idade? ');

if (idade < 10) {
    console.log('Criança');
} else if( idade < 18){
    console.log('Adolescente');
} else {
    console.log('Adulto');
}