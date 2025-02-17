// Crie um array com os dias da semana. Use splice() para substituir "Quarta-feira" por "Dia Livre".

let diasDaSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado", "Domingo"];

diasDaSemana.splice(2, 1, "Dia Livre");

console.log(diasDaSemana);