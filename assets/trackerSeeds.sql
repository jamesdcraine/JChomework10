DROP DATABASE IF EXISTS employeeTrackerDB;
CREATE database employeeTrackerDB;

USE employeeTrackerDB;

CREATE TABLE department (
  position INT NOT NULL,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (position)
);

CREATE TABLE role (
  position INT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary decimal(10,2) NOT NULL,
  PRIMARY KEY (position)
);

CREATE TABLE employee (
  position INT NOT NULL,
  first VARCHAR(30) NOT NULL,
  last VARCHAR(30) NOT NULL,
  role INT NOT NULL,
  manager INT NOT NULL,
  PRIMARY KEY (position)
);

SELECT * FROM departments roles employees;