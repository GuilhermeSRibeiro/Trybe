const connection = require('./connection');

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

module.exports = {
  getAll,
  getByAuthorId,
  getById,
};
