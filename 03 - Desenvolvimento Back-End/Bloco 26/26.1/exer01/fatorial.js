const readline = require('readline-sync');

const number = readline.questionInt('Qual fatorial deseja calcular? ');

function fatorial() {
  let aux = number;
  for(let n = number - 1; n >= 1; n -= 1) {
    aux = aux * n;
  }
  console.log(aux);
};
fatorial();
