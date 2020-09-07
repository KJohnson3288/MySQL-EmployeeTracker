// Dependencies
const mysql = require("mysql");
const connection = require("../config/connection");
const inquirer = require("inquirer");

//ORM files
const view = require("./viewFunctions");



let add = {

  department: function (cb) {
    let questions = [
      {
        type: "input",
        message: "What's the department id?",
        name: "id"
      },
      {
        type: "input",
        message: "What is the department name?",
        name: "department_name"
      }
    ];
    inquirer.prompt(questions).then(function (answer) {
      connection.query(
        "INSERT INTO departments SET ?",
        {
          id: answer.id,
          department_name: answer.department_name
        })

    }).then(() => {
      cb("add complete");
    });
  },

  role: function (cb) {
    let questions = [
      {
        type: "input",
        message: "What's the role id?",
        name: "id"
      },
      {
        type: "input",
        message: "What is the title?",
        name: "title"
      },
      {
        type: "input",
        message: "What is the salary?",
        name: "salary"
      },
      {
        type: "input",
        message: "What is the department_id?",
        name: "department_id"
      }
    ];
    inquirer.prompt(questions).then(function (answer) {
      connection.query(
        "INSERT INTO roles SET ?",
        {
          id: answer.id,
          title: answer.title,
          salary: answer.salary,
          department_id: answer.department_id
        });

    }).then(() => {
      cb("add complete");
    });
  },

  employee: function (cb) {
    let questions = [
      {
        type: "input",
        message: "What is this employees id?",
        name: "id"
      },
      {
        type: "input",
        message: "What is the employee's first name?",
        name: "first_name"
      },
      {
        type: "input",
        message: "What is the employees last name?",
        name: "last_name"
      },
      {
        type: "input",
        message: "What is the role_id?",
        name: "role_id"
      },
      {
        type: "input",
        message: "What is the manager_id?",
        name: "manager_id"
      }
    ];
    inquirer.prompt(questions).then(function (answer) {
      connection.query(
        "INSERT INTO employees SET ?",
        {
          id: answer.id,
          first_name: answer.first_name,
          last_name: answer.last_name,
          role_id: answer.role_id,
          manager_id: answer.manager_id
        });
    }).then(() => {
      cb("add complete");
    });
  }
};


module.exports = add;