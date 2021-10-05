const connection = require('./connection');

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

// Converte o nome dos campos de snake_case para camelCase

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
});

// Busca todos os autores do banco.

async function getAll() {
  const query = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors;';
  const [authors] = await connection.execute(query);
  return authors.map(serialize).map(getNewAuthor);
};

module.exports = {
    getAll,
};
