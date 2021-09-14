const readline = require('readline-sync');

const table = ["1 - IMC","2 - Velocidade","3 - Sorteio"];

console.log(table);

const answer = readline.questionInt('Qual script você deseja executar? ');

switch (answer) {
  case 1:
    require('./imc');
    break;
  case 2:
    require('./velocidade');
    break;
  case 3:
    require('./sorteio');
    break
  default:
    console.log('OK');
    break;
};
