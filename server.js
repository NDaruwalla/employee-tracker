// These are my application dependencies
const connection = require('./config/connection');//links to the sql connection file connection.js
const inquirer = require('inquirer');
const figlet = require('figlet');
const cTable = require('console.table');
const chalk = require('chalk');



// Display the app title and begin the connection
connection.connect((error) => {
  if (error) throw error;
  console.log(chalk.bgMagenta.bold
    (`||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||`));
  console.log(``);
  console.log(chalk.blue.bold(figlet.textSync('Employee Tracker')));
  console.log(``);
  console.log(``);
  console.log(chalk.bgMagenta.bold
    (`||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||`));
  promptUser();
});

// Prompt user selection of actions
const promptUser = () => {
  inquirer.prompt([
      {
        name: 'choices',
        type: 'list',
        message: 'What action would you like to perform?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Update an employee role',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Exit'
          ]
      }
    ])
    .then((answers) => {
      const {choices} = answers;

        if (choices === 'View all departments') {
            viewAllDepartments();
        }

        if (choices === 'View all roles') {
          viewAllRoles();
        }

        if (choices === 'View all employees') {
            viewAllEmployees();
        }

        if (choices === 'Update an employee role') {
            updateEmployeeRole();
        }

        if (choices === 'Add a department') {
            addDepartment();
        }

        if (choices === 'Add a role') {
            addRole();
        }

        if (choices === 'Add an employee') {
            addEmployee();
        }

        if (choices === 'Exit') {
            connection.end();
        }
  });
};

// View all Departments
const viewAllDepartments = () => {
  const sql = `SELECT department.id AS id, department.department_name AS department FROM department`; 
    connection.query(sql, (error, response) => {
    if (error) throw error;
    console.log(`Here is a view of ALL DEPARTMENTS:`);
    console.table(response);
       promptUser();
  });
};

// View all Roles
const viewAllRoles = () => {
  console.log(`Here is a view of ALL ROLES:`);
  const sql = `SELECT DISTINCT role.id, role.title as role_title, department.department_name AS department FROM role INNER JOIN department ON role.department_id = department.id`;
  connection.query(sql, (error, response) => {
    if (error) throw error;
      console.table(response);
      promptUser();
  });
};

