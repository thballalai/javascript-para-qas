// Exemplo Prático 3
// Usando switch para escolher um plano de assinatura


// Declaramos uma variável plano
let plano = "premium";

// Avaliamos se o valor de plano é igual a:
// Se for "básico", imprime "Você tem acesso liberado"
// Se for "intermediário", imprime "Você tem acesso a cursos completos!"
// Se for "premium", imprime "Você tem acesso VIP e suporte 24h!"
// Caso não seja nenhum dos 3 valores anteriores, imprime "Plano Inválido"
switch(plano){
    case "básico":
        console.log("Você tem acesso limitado!");
        break;
    case "intermediário":
        console.log("Você tem acesso a cursos completos!");
        break;
    case "premium":
        console.log("Você tem acesso VIP e suporte 24h!");
        break;
    default:
        console.log("Plano inválido.");
}

//  Saída: Você tem acesso VIP e suporte 24!