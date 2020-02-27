const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",

  port: 8080,
  user: "root",
  password: "root",
  database: "employeeTrackerDB"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

initDatabase();

// first prompt

function initDatabase() {
  inquirer
      .prompt(
          {
              name: "trackerApp",
              type: "rawlist",
              message: "Choose function:",
              choices: ["add_info", "view_info", "update_info", "delete_info", "close"],
          }
          ).then(function ({ trackerApp }) {
            switch (trackerApp) {
                  case "add_info":
                    addInfo();
                    break;
                  case "view_info":
                    viewInfo()
                    break;              
                  case "update_info":
                    updateInfo()
                    break;
                  case "delete_info":
                    deleteInfo()
                    break;
                  case "close":                 
                    connection.end()
                    return;
            }
        })
      }

// add info function

function addInfo() {
  inquirer
  .prompt(
      {
          name: "add_info",
          message: "What would you like to add?",
          type: "list",
          choices: ["employees", "roles", "departments"],
      }
  ).then(function ({ add_info }) {
      switch (add_info) {
            case "employees":
              addEmployee();
              break;
            case "roles":
              addRole()
              break;              
            case "departments":
              addDepartment()
              break;
      }
  })
}

// view info function

function viewInfo() {
  inquirer
  .prompt(
      {
          name: "view_info",
          message: "What would you like to view?",
          type: "list",
          choices: ["employees", "roles", "departments"],
      }
  ).then(function ({ view_info }) {
      switch (view_info) {
            case "employees":
              viewEmployee();
              break;
            case "roles":
              viewRole()
              break;              
            case "departments":
              viewDepartment()
              break;
      }
  })
}

// update info function

function updateInfo() {
  inquirer
  .prompt(
      {
          name: "update_info",
          message: "What would you like to update?",
          type: "list",
          choices: ["employees", "roles", "departments"],
      }
  ).then(function ({ update_info }) {
      switch (update_info) {
            case "employees":
              updateEmployee();
              break;
            case "roles":
              updateRole()
              break;              
            case "departments":
              updateDepartment()
              break;
      }
  })
}

// delete info function

function deleteInfo() {
  inquirer
  .prompt(
      {
          name: "delete_info",
          message: "What would you like to delete?",
          type: "list",
          choices: ["employees", "roles", "departments"],
      }
  ).then(function ({ delete_info }) {
      switch (delete_info) {
            case "employees":
              deleteEmployee();
              break;
            case "roles":
              deleteRole()
              break;              
            case "departments":
              deleteDepartment()
              break;
      }
  })
}

// add employee function

function addEmployee() {
  inquirer
  .prompt([
    {
      name: "first",
      type: "input",
      message: "Input new employee's first name"
    },
    {
      name: "last",
      type: "input",
      message: "Input new employee's last name"
    },
    {
      name: "role",
      type: "input",
      message: "Input new employee's role"
    },
    {
      name: "manager",
      type: "input",
      message: "Input new employee's manager", 
      validate: function(value) {
        if (isNaN(value) === false) {
          return true;
        }
        return false;
      }
    }
  ])
  .then(function(answer) {
    connection.query(
      "INSERT INTO employees SET ?",
      {
        first: answer.first,
        last: answer.last,
        role: answer.role,
        manager: answer.manager
      })
      function(err) {
        if (err) throw err;
        console.log("New employee info recorded successfully");
        initDatabase();
      }
    );
  });
}

// add role function

function addRole() {
  inquirer
  .prompt([
    {
      name: "role",
      type: "input",
      message: "Input new role's name"
      },
      name: "salary",
      type: "input",
      message: "Input new role's salary", 
      validate: function(value) {
        if (isNaN(value) === false) {
          return true;
        }
        return false;
      }
    }
  ])
  .then(function(answer) {

    connection.query(
      "INSERT INTO roles SET ?",
      {
        role_name: answer.new_role,      
        salary: answer.salary
      }
      function(err) {
        if (err) throw err;
        console.log("New role info recorded successfully");
        initDatabase();
      }
    );
  });
}

// add departments function

function addDepartment() {
  inquirer
  .prompt([
    {
      name: "new_department",
      type: "input",
      message: "Input new department's name", 
      validate: function(value) {
        if (isNaN(value) === false) {
          return true;
        }
        return false;
      }
    }
  ])
  .then(function(answer) {

    connection.query(
      "INSERT INTO departments SET ?",
      {
        department_name: answer.new_department,      
      }
      function(err) {
        if (err) throw err;
        console.log("New department info recorded successfully");
        initDatabase();
      }
    );
  });
}

// view employee function

function viewEmployee() {
  inquirer
    .prompt({
      name: "employee",
      type: "input",
      message: "What employee would you like to search for?"
    })
    .then(answer => {
      let queryString = "SELECT first, last, role, manager FROM employees WHERE ?";
      let query = connection.query(queryString, { employee: answer.employee }, (err, res) => {

        if (err) throw err;

        res.forEach(dataRow => {
          console.log(
            `Employee: ${dataRow.first}${dataRow.last} || Role: ${dataRow.role} || Manager: ${dataRow.manager}` 
          )
        });

        console.log(query.sql);

        console.log("Take another action");
        initDatabase();
      });

    });
}

// view role function

function viewRole() {
  inquirer
    .prompt({
      name: "role",
      type: "input",
      message: "Show all roles?"
    })
    .then(answer => {
      let queryString = "SELECT * FROM roles";
      let query = connection.query(queryString, { mployee: answer.employee }, (err, res) => {

        if (err) throw err;

        res.forEach(dataRow => {
          console.log(
            `Employee: ${dataRow.first}${dataRow.last} || Role: ${dataRow.role} || Manager: ${dataRow.manager}` 
          )
        });

        console.log(query.sql);

        console.log("Take another action");
        initDatabase();
      });

    });

// view department function

function viewDepartment() {
  inquirer
    .prompt({
      name: "role",
      type: "input",
      message: "Show all departments?"
    })
    .then(answer => {
      let queryString = "SELECT * FROM departments";
      let query = connection.query(queryString, { employee: answer.employee }, (err, res) => {

        if (err) throw err;

        res.forEach(dataRow => {
          console.log(
            `Employee: ${dataRow.first}${dataRow.last} || Role: ${dataRow.role} || Manager: ${dataRow.manager}` 
          )
        });

        console.log(query.sql);
        console.log("Take another action");
        initDatabase();
      });

    });
}
}


function updateEmployee() {}
function updateRole() {}
function updateDepartment() {}

function deleteEmployee() {}
function deleteRole() {}
function deleteDepartment() {}

