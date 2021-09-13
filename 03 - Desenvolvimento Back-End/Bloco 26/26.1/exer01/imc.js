const readline = require('readline-sync');

const peso = readline.questionFloat('Qual seu peso? ');
const altura = readline.questionFloat('Qual sua altura? ');
const imc = peso/altura**2;

console.log(`Seu IMC é ${imc}`);
