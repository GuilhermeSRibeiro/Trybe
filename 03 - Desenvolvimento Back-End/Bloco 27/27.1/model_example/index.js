const express = require('express');

const app = express();

const authorsDB = require('./models/authors');

const LOCAL_PORT = 3000;
const PORT = process.env.PORT || LOCAL_PORT;

app.get('/authors', async (_req, res) => {
  const authors = await authorsDB.teste();
  res.status(200).json(authors);
});

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});
