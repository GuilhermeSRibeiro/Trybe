const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM ModelExample.books;';
  const [books] = await connection.execute(query);
  return books;
};

module.exports = {
  getAll,
};
