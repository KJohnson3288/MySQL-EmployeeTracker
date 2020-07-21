const mysql = require("mysql");

//Connection info to connect to the database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "KPOctober@3",
    database: "employee_trackerdb"
  });
  
  // connect to the mysql server and sql database
  connection.connect(function(err) {
    if (err) throw err
  });

  module.exports = connection;
