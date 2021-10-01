const mysql = require('mysql2/promisse');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'guilhermeribeiro',
  password: 'senh@1921',
  database: 'model_example',
});

module.exports = connection;
