const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM ModelExample.books;';
  const [books] = connection.execute(query);
  return books;
};

module.exports = {
  getAll,
};
