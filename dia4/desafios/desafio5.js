// Crie um código que verifique se um link começa com "https://" e termina com ".com". Exiba mensagens diferentes dependendo do caso.

const prompt = require('prompt-sync')();

let urlSite = prompt("Informe a url do site: ");

if (urlSite.startsWith("https://") && urlSite.endsWith(".com")) {
    console.log("Site válido!");
} else {
    console.log("Link inválido. Não é um endereço de site válido.");
}