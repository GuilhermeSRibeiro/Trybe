const connection = require('./connection');

const serialize = (bookData) => ({
  id: bookData.id,
  title: bookData.title,
  authorId: bookData.author_id,
});

async function getAll() {
  const query = 'SELECT id, title, author_id FROM ModelExample.books;'
  const [books] = await connection.execute(query);
  return books.map(serialize);
};

module.exports = {
  getAll,
};
