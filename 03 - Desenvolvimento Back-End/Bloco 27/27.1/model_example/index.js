const express = require('express');

const app = express();

const authorsDB = require('./models/authors');
const booksDB = require('./models/books');

const LOCAL_PORT = 3000;
const PORT = process.env.PORT || LOCAL_PORT;

const OK_STATUS = 200;
const NOT_FOUND_STATUS = 404;

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await authorsDB.getById(id);
  if (!author) {
    res.status(NOT_FOUND_STATUS).json({ message: 'Not found' });
  }
  res.status(OK_STATUS).json(author);
});

app.get('/authors', async (_req, res) => {
  const authors = await authorsDB.getAll();
  res.status(OK_STATUS).json(authors);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await booksDB.getById(id);
  if (!book) {
    res.status(NOT_FOUND_STATUS).json({ message: 'Not found' });
  }
  res.status(OK_STATUS).json(book);
});

app.get('/books', async (req, res) => {
  const { author_id } = req.query;
  const books = (author_id)
  ? await booksDB.getByAuthorId(author_id)
  : await booksDB.getAll();
  res.status(OK_STATUS).json(books);
});

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});
