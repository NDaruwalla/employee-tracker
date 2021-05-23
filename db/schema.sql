-- creates the database (This code is based on the schema.png img provided in assignment and provided README file)
DROP DATABASE IF EXISTS synergyEmployees;
CREATE DATABASE synergyEmployees;
USE synergyEmployees;

-- creates the department table in the synergyEmployees database and adds id and department_name columns 
CREATE TABLE department (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(50) NOT NULL
);

-- creates the role table in the synergyEmployees database and adds id, title, salary and department_id columns 
CREATE TABLE role (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    salary DECIMAL(12, 2) NOT NULL,
    department_id INTEGER
);

-- creates the employee table in the synergyEmployees database and adds id, first_name, last_name, role_id, and manager_id and department_name columns 
CREATE TABLE employee(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER
);