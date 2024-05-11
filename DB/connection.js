const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Gu@54321",
  database: "A",
});
module.exports = connection;