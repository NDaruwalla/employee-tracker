// These are my application dependencies
const connection = require('./config/connection');//links to the sql connection file connection.js
const validate = require('./javascript/validate');//where the js validation file will be that validates user entries
const inquirer = require('inquirer');
const figlet = require('figlet');
const consTable = require('console.table');//table display in console
const chalk = require('chalk');

// Display the app title and begin the connection
connection.connect((error) => {
  if (error) throw error;
  //(https://www.npmjs.com/package/chalk) used to style text color and background in console
  //(https://www.npmjs.com/package/figlet) used to turn a string of text into ASCII Art
  console.log(chalk.green.bold(`================================================================`));
  console.log(``);
  console.log(chalk.orangeBright.bold(figlet.textSync('Synergy Employee Tracker')));
  console.log(``);
    console.log(chalk.green.bold(`================================================================`));
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