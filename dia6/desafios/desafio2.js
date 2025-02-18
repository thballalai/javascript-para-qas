// Dado um array ["Maçã", "Pera", "Uva", "Banana"], use um loop para exibir cada item separadamente.

// Inicialização de array chamado frutas com 4 strings armazenadas
let frutas = ["Maçã", "Pera", "Uva", "Banana"];

// Estrutura de repetição para percorrer o array frutas e exibir na tela de forma organizada
for(let i = 0; i < frutas.length; i++){
    console.log(`Item ${i+1}: ${frutas[i]}`);
}

// Saída:
// Item 1: Maçã
// Item 2: Pera
// Item 3: Uva
// Item 4: Banana