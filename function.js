const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table");
 //const sql = require("./sql");
require('./server.js');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "employeestrackerdb"
});


var methods = {
	testFunction: function() {
		
		 console.log("Viewing employees\n");

  var query =
    `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
  FROM employee e
  LEFT JOIN role r
	ON e.role_id = r.id
  LEFT JOIN department d
  ON d.id = r.department_id
  LEFT JOIN employee m
	ON m.id = e.manager_id`

    connection.query(query, function (err, res) {
    if (err) throw err;

    console.table(res);
    console.log("Employees viewed!\n");

    firstPrompt();
     });
	}
};

module.exports = methods;