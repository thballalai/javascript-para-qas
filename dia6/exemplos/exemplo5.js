// Exemplo Prático 5
// Alterando elementos com splice()

// Declara um array chamado listaDeEspera com três nomes
let listaDeEspera = ["Lucas", "Mariana", "João"]

// Usa o metódo splice para substituir o segundo item ("Mariana") por "Amanda".
// O splice funciona assim: splice(inicio, quantidade. novoElemento1, novoElemento2...)
// Inicio é a posição no array onde as modificações começam
// Quantidade define quantos elementos serão removidos a partir do inicio
// novoElemento1, novoElemento2... são os elementos que serão inseridos no lugar dos removidos
listaDeEspera.splice(1,1, "Amanda");

// Exibe no console o array atualizado
console.log(listaDeEspera);

// Saída: ["Lucas", "Amanda", "João"]