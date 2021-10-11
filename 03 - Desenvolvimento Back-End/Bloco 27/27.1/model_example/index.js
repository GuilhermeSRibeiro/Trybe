const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const authorsDB = require('./models/authors');
const booksDB = require('./models/books');

const LOCAL_PORT = 3000;
const PORT = process.env.PORT || LOCAL_PORT;

const OK = 200;
const CREATED = 201;
const BAD_REQUEST = 400;
const NOT_FOUND = 404;

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await authorsDB.getById(id);
  if (!author) {
    res.status(NOT_FOUND).json({ message: 'Not found' });
  }
  res.status(OK).json(author);
});

app.get('/authors', async (_req, res) => {
  const authors = await authorsDB.getAll();
  res.status(OK).json(authors);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await booksDB.getById(id);
  if (!book) {
    res.status(NOT_FOUND).json({ message: 'Not found' });
  }
  res.status(OK).json(book);
});

app.get('/books', async (req, res) => {
  const { author_id } = req.query;
  const books = (author_id)
  ? await booksDB.getByAuthorId(author_id)
  : await booksDB.getAll();
  res.status(OK).json(books);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  if (!authorsDB.validateAuthor(first_name, middle_name, last_name)) {
    return res.status(BAD_REQUEST).json({ message: 'bad request' });
  }
  await authorsDB.create(first_name, middle_name, last_name);
  res.status(CREATED).json({ message: 'created' });
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;
  if (!booksDB.validateBook(title, author_id)) {
    return res.status(BAD_REQUEST).json({ message: 'Dados inválidos' });
  }
  await booksDB.create(title, author_id);
  res.status(CREATED).json({ message: 'Livro criado com sucesso! '});
});

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});
