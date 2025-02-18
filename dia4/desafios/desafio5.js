// Crie um código que verifique se um link começa com "https://" e termina com ".com". Exiba mensagens diferentes dependendo do caso.

// Inicialização da constante que captura input do usuário
const prompt = require('prompt-sync')();

// Inicialização da variável urlSite para armazenar o input do usuário
let urlSite = prompt("Informe a url do site: ");

// Verifica se urlSite inicia com "https://" e finaliza com ".com" para determinar o que será exibido na tela
if (urlSite.startsWith("https://") && urlSite.endsWith(".com")) {
    console.log("Site válido!");
} else {
    console.log("Link inválido. Não é um endereço de site válido.");
}

// Saída:
// Informe a url do site: https://github.com
// Site válido!