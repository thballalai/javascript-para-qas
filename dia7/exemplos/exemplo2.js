// Exemplo Prático 2
// Função para contar quantas vezes uma letra aparece em uma palavra

// Declara uma função chamada contarLetra que recebe uma palavra e uma letra como parâmetros

function contarLetra(palavra, letra){
    // Converte a palavra para minúsculas para evitar diferenciação entra maiúsculas e minúsculas
    let palavraFormatada = palavra.toLowerCase();

    // Converte a letra para minúscula para garantir a comparação correta
    let letraFormatada = letra.toLowerCase();

    // Inicializa uma variável para armazenar o número de vezes que a letra aparece
    let contador = 0;

    // Percorre cada caractere da string
    for(let i = 0; i< palavraFormatada.length; i++){
        if(palavraFormatada[i] === letraFormatada){
            contador++;
        }
    }
    // Retorna o número de vezes que a letra aparece na palavra
    return contador;
}

// Chama a função e exibe o resultado no console
console.log(contarLetra("Programação", "r"));

// Saída: 2