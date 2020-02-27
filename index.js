const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,
  user: "root",
  password: "root",
  database: "employeeTrackerDB"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

initDatabase();

function initDatabase() {
  inquirer
      .prompt(
          {
              name: "trackerApp",
              type: "list",
              message: "Choose function:",
              choices: ["add_info", "view_info", "update_info", "delete_info", "close"],
          }
      ).then(function ({ trackerApp }) {
          switch (trackerApp) {
              case "add_info":
                  add_new();
                  break;
              case "info":
                view_employee();
                  break;
              case "update_info":
                update_info();
                  break;                    
              case "delete_info":
                delete_info();
                  break;
              case "close":
                  connection.end();
                  return;
          }

      })
}

function add() {
  inquirer
      .prompt(
          {
              name: "add_info",
              type: "list",
              message: "what would you like to add?",             
              choices: ["employees", "roles", "departments"],
          }
      ).then(function ({ add_info }) {
          switch (add_info) {

            case "employee":
                add_employee();
                break;

            case "role":
                add_role();
                break;

            case "department":
                add_department();
                break;
          }
      })

}
function add_employee() {
  inquirer
      .prompt(
          {
              name: "first",
              message: "Enter new employee's first name.",
              type: "input"
          }, 
          {
          name: "last",
          message: "Enter new employee's last name.",
          type: "input"
          },
          {
          name: "role",
          message: "What is their role?",
          type: "list", 
          choices:
          },
          {
            name: "manager",
            message: "who is their manager?",
            type: "list"
            choices: 
          }






//       ).then(function ({ name }) {
//           connection.query(`INSERT INTO employee (name) VALUES ('${name}')`, function (err, data) {
//               if (err) throw err;
//               console.log(`Added`)
//               getJob();
//           })
//       })
// }