const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "employeeTrackerDB"
});

connection.connect(function(err) {
  if (err) throw err;
  //Make sure we're calling our runSearch function ONLY AFTER our connection to the database was successfully established
  runSearch();
});

function 