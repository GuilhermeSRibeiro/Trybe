const express = require('express');
const author = require('./models/author');

const app = express();

const OK_STATUS = 200;
const LOCAL_PORT = 3000;
const PORT = process.env.PORT || LOCAL_PORT;

app.get('/authors', async (_req, res) => {
  const authors = author.getAll();
  return res.status(OK_STATUS).json(authors);
});

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`)
});
