const connection = require('./connection');

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
});

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;
  const fullName = [firstName, middleName, lastName].filter((name) => name).join(' ');
  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

const getAll = async () => {
  const query = 'SELECT id, first_name, middle_name, last_name FROM ModelExample.authors;';
  const [authors] = await connection.execute(query);
  return authors.map(serialize).map(getNewAuthor);
};

const getById = async (id) => {
  const query = 'SELECT * FROM ModelExample.authors WHERE id=?;';
  const [author] = await connection.execute(query, [id]);
  if (author.length === 0) {
    return null;
  }
  return author.map(serialize).map(getNewAuthor);
};

const validateAuthor = (first_name, middle_name, last_name) => {
  if (!first_name || typeof first_name !== 'string') return false;
  if (middle_name && typeof middle_name !== 'string') return false;
  if (!last_name || typeof last_name !== 'string') return false;
  return true;
};

const create = async (firstName, middleName, lastName) => {
  const query = 'INSERT INTO ModelExample.authors (first_name, middle_name, last_name) VALUES (?,?,?);';
  return connection.execute(query, [firstName, middleName, lastName]);
};

module.exports = {
  getAll,
  getById,
  validateAuthor,
  create,
};
