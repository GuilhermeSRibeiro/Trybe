const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'guilhermeribeiro',
  password: 'senh@1921',
  host: 'localhost',
  database: 'ModelExample',
});

module.exports = connection;
