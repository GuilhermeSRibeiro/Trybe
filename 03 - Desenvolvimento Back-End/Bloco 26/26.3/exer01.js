/* Exercício 1: Estruture os testes utilizando mocha e chai para um função que irá dizer se um número é "positivo", "negativo" ou "neutro":
    * Essa função irá receber um número como parâmetro e retornar uma string como resposta;
    * Quando o número passado for maior que 0 deverá retornar "positivo", quando for menor que 0 deverá retornar "negativo" e quando igual a 0 deverá retornar "neutro";
  1. Descreva todos os cenário de teste utilizando describes;
  2. Descreva todos os testes que serão feitos utilizando its;
  3. Crie as asserções validando se os retornos de cada cenário tem o tipo e o valor esperado. */

const funcNumero = require('./funcNumero');
const { expect } = require('chai');

describe('Verifica se o número é positivo, neutro ou negativo', () => {
  describe('Quando o número é maior que zero', () => {
    describe('A resposta é', () => {
      it('Uma string', () => {
        const resposta = funcNumero(1);
        expect(resposta).to.be.a('string');
      });
      it('É "positivo".', () => {
        const resposta = funcNumero(1);
        expect(resposta).to.be.iquals('positivo');
      });
    });
  });
  describe('Quando o número é igual a zero', () => {
    describe('A resposta é', () => {
      it('Uma string', () => {
        const resposta = funcNumero(0);
        expect(resposta).to.be.a('string');
      });
      it('É "neutro".', () => {
        const resposta = funcNumero(0);
        expect(resposta).to.be.iquals('neutro');
      });
    });
  });
  describe('Quando o número é menor que zero', () => {
    describe('A resposta é', () => {
      it('Uma string', () => {
        const resposta = funcNumero(-1);
        expect(resposta).to.be.a('string');
      });
      it('É "negativo".', () => {
        const resposta = funcNumero(-1);
        expect(resposta).to.be.iquals('negativo');
      });
    });
  });
});

/* Exercício 2: Implemente a função apresentada no Exercício 1, garantindo que ela irá passar em todos os testes que você escreveu.
  DICA: Lembre-se de adicionar o script de test no package.json e de instalar as dependências. */

function funcNumero(number) {
  switch (true) {
    case (number > 0):
      'positivo';
      break;
    case (number === 0):
      'neutro';
      break;
    default:
      'negativo';
      break;
  }
};

module.exports = funcNumero;

/* Exercício 3 Adicione à função um tratamento para casos em que o parâmetro informado não seja do tipo Number.
  1. Adicione o cenário em seu arquivo de testes, passando um valor de tipo diferente a Number para a função;
  2. Adicione uma asserção para esperar que o valor retornado para esse caso seja igual uma string "o valor deve ser um número";
  3. Implemente em sua função tal validação para que o teste passe. */


/* Exercício 4 Crie testes para uma função que escreverá um conteúdo em um arquivo específico.
    * Essa função deverá receber dois parâmetros: o nome do arquivo e o conteúdo desse arquivo.
    * Após concluir a escrita do arquivo ela deverá retornar um ok.
  1. Descreva todos os cenários de teste utilizando describes;
  2. Descreva todos os testes que serão feitos utilizando its;
  3. Crie as asserções validando se o retorno da função possui o valor e tipo esperado. */


/* Exercício 5 Implemente a função descrita no /* Exercício 4.
  1. Crie a função descrita no /* Exercício 4 utilizando o módulo fs do node.
  2. Adapte os testes adicionando stub ao módulo utilizado do fs , isolando assim o teste.
  3. Garanta que todos os testes escritos no /* Exercício 4 irão passar com sucesso. */

