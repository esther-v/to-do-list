const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "2021@Simplon",
  database: "to_do_list"
});

db.connect((error) => {
  if (error) throw error;
  console.log("Connection to database works!");
});

module.exports = db;