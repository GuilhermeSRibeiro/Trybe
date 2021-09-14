const readline = require('readline-sync');

function again() {
  const yes = readline.question('Deseja jogar novamente (y/n)? ');
  if(yes === "y") {
    sorteio();
  };
};

function sorteio() {
  const number = parseInt(Math.random() * 10);
  const input = readline.questionInt('Digite um número entre 0 e 10: ');
  
  if(number === input) {
    console.log('Parabéns, número correto!');
    again();
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${number}`);
    again();
  };
};
sorteio();
