// Exemplo Prático 2
// Sistema de categorias de um jogo

// Declaramos uma variável nivel
let nivel = 5;

// Avaliamos se a variável nivel tem um valor maior ou igual a 10, se sim
// Imprime "Você está no nível avançado!"
// Caso não tenha um valor maior ou igual a 10, mas sim maior ou igual a 5 (resumindo de 5 a 9),
// Imprime "Você está no nível intermediário!"
// Caso não tenha um valor maior igual a 10, nem um valor maior igual a 5 (resumindo, um valor menor ou igual a 4),
// Imprime "Você está no nível iniciante!"
if(nivel >= 10){
    console.log("Você está no nível avançado!");
} else if(nivel >= 5) {
    console.log("Você está no nível intermediário!");
} else {
    console.log("Você está no nível iniciante!");
}

// Saída: Você está no nível intermediário!