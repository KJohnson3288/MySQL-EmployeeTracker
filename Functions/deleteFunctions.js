//Dependencies
const inquirer = require("inquirer");
const cTable = require("console.table");
const mysql = require("mysql");

//ORM files
const connection = require("../config/connection");
const view = require("./viewFunctions");
const start = require("../server")



//orm functions to run when any of the view choices are selected

    let remove = {

        department: function(cb) {
           
            view.departments((data) => {
                console.table(data)
            });
            
            let question = 
            [{
                type: "number",
                message: "Enter the id of the department you would like to remove?",
                name:"id"
            }];
            inquirer.prompt(question).then(function(answer) {
                connection.query(
                    "DELETE FROM departments WHERE ?",
                {
                    id: answer.id
                })
        
            }).then(()=>{
                cb("department removed");
              });
        },
        
        role: function(cb) {

            view.roles((data) => {
                console.table(data)
            });
            

            let question = 
            [{
                type: "input",
                message: "Enter the id of the role you would like to remove?",
                name:"remove_role"
            }]
            inquirer.prompt(question).then(function(answer) {
                connection.query(
                    "DELETE FROM roles WHERE ?",
                {
                    id: answer.remove_role
                })
               
            }).then(()=>{
                cb("role remove");
              });
        },

        employee: function(cb) {

            view.employees((data) => {
                console.table(data)
            });
            

            let question = 
            [{
                type: "input",
                message: "Enter the id of the employee you would like to remove?",
                name:"remove_employee"
            }]
            inquirer.prompt(question).then(function(answer) {
                connection.query(
                    "DELETE FROM employees WHERE ?",
                {
                    id: answer.remove_employee
                })
                
            }).then(()=>{
                cb("employee remove");
              });
        }

    }


module.exports = remove;