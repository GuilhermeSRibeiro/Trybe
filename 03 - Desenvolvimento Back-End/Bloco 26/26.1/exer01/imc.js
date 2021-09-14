const readline = require('readline-sync');

const peso = readline.questionFloat('Qual seu peso? ');
const altura = readline.questionFloat('Qual sua altura? ');
const imc = peso/altura**2;

switch (true) {
  case (imc < 18.5):
    console.log(`Seu IMC é ${imc}! Situação: "Abaixo do peso (magreza)`);
    break;
  case (imc < 24.9):
    console.log(`Seu IMC é ${imc}! Situação: "Peso normal`);
    break;
  case (imc < 29.9):
    console.log(`Seu IMC é ${imc}! Situação: "Acima do peso (sobrepeso)`);
    break;
  case (imc < 34.9):
    console.log(`Seu IMC é ${imc}! Situação: "Obesidade grau 1`);
    break;
  case (imc < 39.9):
    console.log(`Seu IMC é ${imc}! Situação: "Obesidade grau 2`);
    break;
  default:
    console.log(`Seu IMC é ${imc}! Situação: "Obesidade graus 3 e 4`);
    break;
};
