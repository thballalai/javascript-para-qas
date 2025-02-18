// Escreva um código que receba uma nota e classifique o aluno da seguinte forma:

// 90 ou mais: "Aprovado com A"
// 70 a 89: "Aprovado com B"
// Menos de 70: "Reprovado"

// Inicialização da constante que captura input do usuário
const prompt = require('prompt-sync')();

// Inicialização de variável nota para receber input do usuário com conversão para inteiro
let nota = parseInt(prompt('Qual a nota do aluno? '));

// Verificação do valor de nota para definir se foi aprovado com A, aprovado com B ou Reprovado
if(nota >= 90){
    console.log('Aprovado com A');
}else if(nota >= 70){
    console.log('Aprovado com B');
}else{
    console.log('Reprovado');
}

// Saída:
// Qual a nota do aluno? 85
// Aprovado com B