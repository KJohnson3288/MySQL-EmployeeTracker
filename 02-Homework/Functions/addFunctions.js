// Dependencies
const mysql = require("mysql");
const connection = require("../config/connection");
const inquirer = require("inquirer");

//ORM files
const view = require("./viewFunctions");



let add = {

department: function() {
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
        inquirer.prompt(questions).then(function(answer) {
          connection.query(
            "INSERT INTO departments SET ?",
            {
              id: answer.id,
              department_name: answer.department_name
            })

            view.departments();
            console.log("add completed")
        })
    },
    role: function() {
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
        inquirer.prompt(questions).then(function(answer) {
          connection.query(
            "INSERT INTO roles SET ?",
            {
              id: answer.id,
              title: answer.title,
              salary: answer.salary,
              department_id: answer.department_id
            })

            view.roles();
            console.log("add completed")
        })
    },
    employee: function() {
        let questions = [
          {
            type: "input",
            message: "What's the role id?",
            name: "id"
          },
          {
            type: "input",
            message: "What is the employee's first name?",
            name: "firstName"
          },
          {
            type: "input",
            message: "What is the employees last name?",
            name: "lastName"
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
        inquirer.prompt(questions).then(function(answer) {
          connection.query(
            "INSERT INTO employees SET ?",
            {
              id: answer.id,
              firstname: answer.first_name,
              firstname: answer.last_name,
              role_id: answer.role_id,
              managerid: answer.manager_id
            });

            view.employees();
            console.log("add completed");
        })
    }

};
       

module.exports = add;