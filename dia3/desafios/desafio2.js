// Imagine que você está desenvolvendo um sistema de login. Cheque se o usuário está cadastrado (variável estaCadastrado) e se o código de acesso do usuário é válido (variável codigo) e valide se ele pode entrar:

// Se ele estiver cadastrado e o código for "1234", exiba "Acesso permitido! ✅"
// Se ele não estiver cadastrado ou se o código for qualquer outro valor, exiba "Acesso não permitido. Tente novamente. ❌"

// Inicialização da constante que captura input do usuário
const prompt = require("prompt-sync")();

// Inicialização de variável senhaCorreta que armazena valor string
let senhaCorreta = "1234";

// Ínicio de loop com estrutura while, que vai se repetir enquanto sua condição for verdadeira
while(senhaCorreta = "1234"){
    // Inicialização de variável cadastro para captura de input do usuário    
    let cadastro = prompt("Você está cadastrado? [s/n] ");
    // Verificação do input do usuário para determinar se o foi colocado o input esperado
    if(cadastro=="s"||cadastro=="n"){
        // Se o usuário informar que está cadastrado executar as ações a seguir
        if(cadastro=="s"){
            // Inicializa variável senhaDigitada para receber input do usuário
            let senhaDigitada = prompt("Qual a senha? ");
            // Comparação das variáveis senhaDigitada e senhaCorreta
            if(senhaDigitada == senhaCorreta){
                console.log("Acesso permitido!");
            } else {
                console.log("Acesso não permitido. Tente novamente.");
            }
            // Ação a ser realizada caso o usuário informe que não esta cadastrado
        } else {
            console.log("Acesso não permitido. Tente novamente.");
        }
        // Encerra a estrutura de repetição
        break
    }
    // Exibe no console mensagem de erro
    console.log("ERRO! Resposta inválida.");
}

// Saída:
// Você está cadastrado? [s/n] s
// Qual a senha? 1234
// Acesso permitido!