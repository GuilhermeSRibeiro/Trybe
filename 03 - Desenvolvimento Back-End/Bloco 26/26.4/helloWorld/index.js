const express = require('express');
const app = express();
const PORT = 3000;

function helloWorld(_req, res) {
  res.status(200).send('Olá mundo! Eu sou o Guilherme!');
};

app.get('/', helloWorld)

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});
