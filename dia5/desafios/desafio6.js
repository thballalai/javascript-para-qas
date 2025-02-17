// Crie um loop que sorteie números aleatórios de 1 a 10 até encontrar o número 7.

let i = 1;
let f = 10;
let lf = 7;
let draw = 0;
let c = 0;

do{
    draw = Math.floor(Math.random() * (f - i) + i);
    c++;
    console.log(`tentativa ${c}: número sorteado foi (${draw}).`);
}while(lf != draw);

console.log(`Parabéns! O número sorteado foi o ${lf}. Foi preciso sortear ${c} vezes.`);