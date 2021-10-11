const connection = require('./connection');

const getAll = async () => {
  const authors = await connection.execute();
  return authors;
};

module.exports = {
  getAll,
};
