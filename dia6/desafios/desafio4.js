// Crie um array com os dias da semana. Use splice() para substituir "Quarta-feira" por "Dia Livre".

// Inicializa um array chamado diasDaSemana para armazenar 7 strings
let diasDaSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado", "Domingo"];

// Substitui o valor no indice 2 pela string "Dia Livre"
diasDaSemana.splice(2, 1, "Dia Livre");

// Exibe na tela o array diasDaSemana
console.log(diasDaSemana);

// Saída: ["Segunda", "Terça", "Dia Livre", "Quinta", "Sexta", "Sabado", "Domingo"]