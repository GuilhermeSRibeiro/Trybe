const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT id, first_name, middle_name, last_name FROM ModelExample.authors;';
  const authors = await connection.execute(query);
  return authors;
};

module.exports = {
  getAll,
};
