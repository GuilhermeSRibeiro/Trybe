const connection = require('./connection');

const getAll = async () => {
  const authors = await connection.execute();
  return authors;
};

const teste = () => console.log('teste');

module.exports = {
  getAll,
  teste,
};
