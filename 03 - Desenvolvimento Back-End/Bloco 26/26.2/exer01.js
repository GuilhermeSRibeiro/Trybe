// 1. Crie uma função que recebe três parâmetros retorna uma Promise.
  // Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números".
  // Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro (a + b) * c.
  // Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo".
  // Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.
const quest01 = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number') {
      reject('Informe apenas números');
    }
    const resultado = (a + b) * c;
    if (resultado < 50) {
      reject('Valor muito baixo');
    }
    resolve(resultado);
  });
};

quest01(1, 2, 3)
  .then(resolve => console.log(resolve))
  .catch(reject => console.log(reject));

// 2. Escreva um código para consumir a função construída no exercício anterior.
  // Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1).
  // Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
  // Utilize then e catch para manipular a Promise retornada pela função:
    // Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
    // Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.
const a = Math.floor(Math.random() * 100 + 1);
const b = Math.floor(Math.random() * 100 + 1);
const c = Math.floor(Math.random() * 100 + 1);

quest01(a, b, c)
  .then(resolve => console.log(resolve))
  .catch(reject => console.log(reject));

// 3. Reescreva o código do exercício anterior para que utilize async/await.
// Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async.
async function quest03() {
  try {
    const resultado = await quest01(a, b, c);
    console.log(resultado);
    console.log('aqui');
  } catch (e) {
    console.error(e);
  };
};
quest03();

// 4. Realize o download deste arquivo e salve-o como simpsons.json. Utilize o arquivo baixado para realizar os requisitos abaixo.
  // Você pode utilizar then e catch, async/await ou uma mistura dos dois para escrever seu código. Procure não utilizar callbacks.
    // Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.
    // Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
    // Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.


    // Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.
    // Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
    // Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.
const fs = require('fs').promises;

fs.readFile('simpsons.json', 'utf8')
  .then((data) => {
    return JSON.parse(data);
  })
  .then((array) => {
    return array.forEach(({ id, name }) => console.log(`${id} - ${name}`));
  });

async function retornaPersonagem(id) {
  const simpsons = await fs.readFile('simpsons.json', 'utf8')
    .then((data) => {
      return JSON.parse(data);
    });
  const busca = simpsons.find((simpson) => simpson.id === id );
  if (!busca) {
    throw new Error('id não encontrado');
  }
  return busca;
};
retornaPersonagem('11');

async function alteraPersonagem() {
  const simpsons = await fs.readFile('./simpsons.json', 'utf8')
    .then((data) => {
      return JSON.parse(data);
    });
  const alterado = simpsons.map((simpson) => simpson.id !== '10' || simpson.id !== '6');
  await fs.writeFile('./simpsons.json', JSON.stringify(alterado));
};
alteraPersonagem();

// 5. Crie uma função que lê e escreve vários arquivos ao mesmo tempo.
  // Utilize o Promise.all para manipular vários arquivos ao mesmo tempo.
  // Dado o seguinte array de strings: ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'] Faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a file<index + 1>.txt. Por exemplo, para a string "Finalmente", o nome do arquivo é file1.txt.
  // Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado fileAll.txt.

  // O conteúdo do arquivo fileAll.txt deverá ser Finalmente estou usando Promise.all !!!.

