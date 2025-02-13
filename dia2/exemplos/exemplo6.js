let plano = "premium";

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