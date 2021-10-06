const express = require('express');
const author = require('./models/author');
const book = require('./models/book');

const app = express();

const OK_STATUS = 200;
const LOCAL_PORT = 3000;
const PORT = process.env.PORT || LOCAL_PORT;

app.get('/authors', async (_req, res) => {
  const authors = await author.getAll();
  return res.status(OK_STATUS).json(authors);
});

app.get('/books', async (req, res) => {
  const { author_id } = req.query;
  const books = (author_id)
  ? await book.getByAuthorId(author_id)
  : await book.getAll();
  return res.status(OK_STATUS).json(books);
});

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`)
});
