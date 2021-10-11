const connection = require('./connection');
const authorsDB = require('./authors');

const getAll = async () => {
  const query = 'SELECT * FROM ModelExample.books;';
  const [books] = await connection.execute(query);
  return books;
};

const getByAuthorId = async (author_id) => {
  // const query = `SELECT * FROM ModelExample.books WHERE author_id=${author_id}`;
  // const [books] = await connection.execute(query);
  // ou...
  const query = 'SELECT * FROM ModelExample.books WHERE author_id=?';
  const [books] = await connection.execute(query, [author_id]);
  if (books.length === 0) {
    return null;
  }
  return books;
};

const getById = async (id) => {
  const query = 'SELECT * FROM ModelExample.books WHERE id=?;';
  const [book] = await connection.execute(query, [id]);
  if (book.length === 0) {
    return null;
  }
  return book;
};

const validateBook = async (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number' || !(await authorsDB.getById(authorId))) return false;
  return true;
};

const create = async (title, authorId) => {
  const query = 'INSERT INTO ModelExample.books (title, author_id) VALUES (?,?)';
  return connection.execute(query, [title, authorId]);
};

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  validateBook,
  create,
};
