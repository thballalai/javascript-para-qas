// Crie uma variável senhaCorreta e senhaDigitada e exiba "Acesso permitido" se forem iguais, e "Senha incorreta" caso contrário.

// Inicialização da constante que captura input do usuário
const prompt = require('prompt-sync')();

// Inicialização de variável senhaCorreta para armazenar a senha correta de acesso
let senhaCorreta = "1234";

// Inicialização de variável senhaDigitada que recebe o input do usuário
// Realiza uma operação ternária na qual verifica a igualdade entre senhaDigitada e senhaCorreta para exibir diferentes mensagens na tela
let senhaDigitada = prompt("Informe a senha: ") == senhaCorreta ? console.log('Acesso Permitido') : console.log('Senha Incorreta');

// Saída:
// Informe a senha: admin
// Senha Incorreta