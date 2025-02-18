// Dada a string "Atenção: problema detectado no sistema.", substitua "problema" por "atualização pendente" e exiba a nova mensagem.

// Inicialização de variável aviso armazenando string
let aviso = "Atenção: problema detectado no sistema.";
// Inicialização de variável novoAviso com string que substitui "problema" por "atualização pendente"
let novoAviso = aviso.replace("problema", "atualização pendente");

// Exibe na tela a string armazenada em novoAviso
console.log(novoAviso);

// Saída:
// Atenção: atualização pendente detectado no sistema