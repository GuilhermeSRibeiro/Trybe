const readline = require('readline-sync');

const sequencia = [0];

const termos = readline.questionInt('Quantos termos você deseja na sequência de Fibonacci? ');

function fibonacci() {
  switch (true) {
    case (termos <= 0):
      console.log('A sequência deve possuir pelo menos 1 termo!');
      break;
    case (termos === 1):
      console.log(sequencia);
      break;
    case (termos === 2):
      sequencia.push(1);
      console.log(sequencia);
      break;
    default:
      sequencia.push(1);
      let segundo_anterior = sequencia[sequencia.length - 2];
      let anterior = sequencia[sequencia.length - 1];
      for(let t = sequencia.length; t < termos; t += 1) {
        let atual = anterior + segundo_anterior;
        sequencia.push(atual);
        segundo_anterior = anterior;
        anterior = atual;
      };
      console.log(sequencia);
      break;
  }
};
fibonacci();
