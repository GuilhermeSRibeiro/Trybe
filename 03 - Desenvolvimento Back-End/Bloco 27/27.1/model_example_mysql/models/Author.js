const connection = require('./connections');

const getAll = async () => {
  const result = await connection.axecute('SELECT id, first_name, middle_name, last_name FROM authors');
  return result;
};

module.exports = {
  getAll,
};
