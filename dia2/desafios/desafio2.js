// Escreva um código que receba uma nota e classifique o aluno da seguinte forma:

// 90 ou mais: "Aprovado com A"
// 70 a 89: "Aprovado com B"
// Menos de 70: "Reprovado"


const prompt = require('prompt-sync')();

let nota = prompt('Qual a nota do aluno? ');
if(nota >= 90){
    console.log('Aprovado com A');
}else if(nota >= 70){
    console.log('Aprovado com B');
}else{
    console.log('Reprovado');
}