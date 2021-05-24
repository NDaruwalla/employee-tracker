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

// Add a department
const addDepartment = () => {
  inquirer
    .prompt([
      {
        name: 'newDepartment',
        type: 'input',
        message: 'What is the name of the department you wish to add?',
      }
    ])
    .then((answer) => {
      let sql = `INSERT INTO department (department_name) VALUES (?)`;
      connection.query(sql, answer.newDepartment, (error, response) => {
        if (error) throw error;
        console.log(`The department was created successfully.`);
        viewAllDepartments();
      });
    });
};

// View all Employees
const viewAllEmployees = () => {
  let sql = `select e.id as empID, d.Department_Name, r.title, e.first_name, e.last_name, concat(em.first_name,' ',em.last_name) as Manager_Name
  from employee e 
  left join role r on r.id = e.role_id
  left join department d on  d.id = r.department_id
  left join employee em on em.id = e.manager_id
  ORDER BY 2,3,e.role_id;`;

  connection.query(sql, (error, response) => {
    if (error) throw error;
    console.log(`Here is a view of ALL EMPLOYEES:`);
    console.table(response);
    promptUser();
  });
};

