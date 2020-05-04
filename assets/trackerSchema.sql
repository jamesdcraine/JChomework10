DROP DATABASE IF EXISTS employeeTrackerDB;
CREATE database employeeTrackerDB;

USE employeeTrackerDB;

CREATE TABLE departments (
  department_id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (department_id)
  FOREIGN KEY (employee_id) REFERENCES employees(id)
  FOREIGN KEY (role_id) REFERENCES roles(id)
);

CREATE TABLE roles (
  role_id INT AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary decimal(10,2) NOT NULL,
  PRIMARY KEY (role_id)
  FOREIGN KEY (department_id) REFERENCES departments(id)
  FOREIGN KEY (employee_id) REFERENCES employees(id)
);

CREATE TABLE employees (
  employee_id INT AUTO_INCREMENT NOT NULL,
  first VARCHAR(30) NOT NULL,
  last VARCHAR(30) NOT NULL,
  role VARCHAR(30) NOT NULL,
  manager VARCHAR(30) NOT NULL,
  PRIMARY KEY (employee_id)
  FOREIGN KEY (department_id) REFERENCES departments(id)
  FOREIGN KEY (role_id) REFERENCES roles(id)
);

SELECT * from departments, roles, employees;