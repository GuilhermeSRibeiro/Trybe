const mysql = requite('mysql2/promisse');

const connection = mysql.createPool({
  user: 'root',
  password: '',
  host: 'localhost',
  database: 'ModelExample',
});

module.exports = connection;
