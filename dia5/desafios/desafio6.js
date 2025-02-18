// Crie um loop que sorteie números aleatórios de 1 a 10 até encontrar o número 7.

// Inicialização das variaveis:
// i -> inicio do sorteio 
// f -> fim do sorteio
// lf -> numero buscado
// draw -> numero sorteado
// c -> quantidade de repetições executada
let i = 1;
let f = 10;
let lf = 7;
let draw = 0;
let c = 0;

// Estrutura de repetição que força a primeira execução
do{
    // Sorteio de um número aleatorio inteiro entre 1 e 10
    draw = Math.floor(Math.random() * (f - i) + i);
    // Contagem do número de repetições
    c++;
    // Exibir na tela a tentativa de sortear o número correto
    console.log(`tentativa ${c}: número sorteado foi (${draw}).`);
}while(lf != draw);

// Exibir na tela o sucesso de sortear o número e a quantidade de tentativas foram necessárias
console.log(`Parabéns! O número sorteado foi o ${lf}. Foi preciso sortear ${c} vezes.`);

// Saída:
// tentativa 1: número sorteado foi (9).
// tentativa 2: número sorteado foi (2).
// tentativa 3: número sorteado foi (7).
// Parabéns! O número sorteado foi o 7. Foi preciso sortear 3 vezes.