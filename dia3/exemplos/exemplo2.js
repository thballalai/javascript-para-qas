// Exemplo Prático 2
// Sistema de autenticação

// Declaramos uma variável para armazenar se o usuário está logado
let usuarioLogado = false;
// Declaramos uma variável para armazenar se o usuário é um admin
let ehAdmin = true;

// Avaliamos se o usuário estiver logado OU se ele for um admin
// Imprime "Acesso liberado!"
// Se não, imprime "Acesso não permitido."
if(usuarioLogado||ehAdmin){
    console.log("Acesso liberado!");
} else {
    console.log("Acesso não permitido.");
}

// Saída: Acesso liberado!