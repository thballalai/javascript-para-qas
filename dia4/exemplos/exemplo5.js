// Exemplo Prático 5
// Verificando se um usuário preencheu um campo obrigatório

let comentario = "";
if(comentario.trim() === "") {
    console.log("Erro! O campo não pode está vazio.");
} else {
    console.log("Comentário enviado!");
}

// Saída: Erro! O campo não pode está vazio.