const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'guilhermeribeiro',
  password: 'Senh@1921',
  host: 'localhost',
  database: 'ModelExample',
});

module.exports = connection;
