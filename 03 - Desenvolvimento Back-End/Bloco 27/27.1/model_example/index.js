const express = require('express');

const app = express();

const authorsDB = require('./models/authors');
const booksDB = require('./models/books');

const LOCAL_PORT = 3000;
const PORT = process.env.PORT || LOCAL_PORT;

const OK_STATUS = 200;

app.get('/authors', async (_req, res) => {
  const authors = await authorsDB.getAll();
  res.status(OK_STATUS).json(authors);
});

app.get('/books', async (_req, res) => {
  const books = await booksDB.getAll();
  res.status(OK_STATUS).json(books);
});

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});
