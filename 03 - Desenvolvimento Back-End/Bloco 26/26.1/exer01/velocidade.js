const readline = require('readline-sync');

function velocidadeMedia() {
  const distancia = readline.questionFloat('Qual a distância (km) percorrida? ');
  const tempo = readline.questionInt('Quanto tempo (minutos), o carro percorreu a distância? ');
  
  const velocidade = distancia/(tempo/60);
  
  console.log(`A velocidade média do carro foi de ${velocidade} km/h`);
};

velocidadeMedia();
