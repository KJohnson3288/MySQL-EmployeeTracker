//Dependencies
const inquirer = require("inquirer");
const cTable = require("console.table");
const mysql = require("mysql");

//ORM files
const connection = require("../config/connection");
const view = require("./viewFunctions");



//orm functions to run when any of the view choices are selected


    let remove = {

        department: function deleteDepartment() {

            view.departments();

            let question = 
            {
                type: "input",
                message: "Enter the id of the department you would like to remove?",
                name:"_department"
            }
            inquirer.prompt(question).then(function(answer) {
                connection.query(
                    "DELETE FROM departments WHERE id = ?",
                {
                    id: answer.remove_department
                })
                console.log("Department removed!")
                view.departments();
            })
        },
        role: function deleteRole() {

            view.departments();

            let question = 
            {
                type: "input",
                message: "Enter the id of the role you would like to remove?",
                name:"remove_role"
            }
            inquirer.prompt(question).then(function(answer) {
                connection.query(
                    "DELETE FROM roles WHERE departments.id = ?",
                {
                    id: answer.remove_role
                })
                console.log("Department removed!")
                view.roles();
            })
        },
        employee: function deleteEmployee() {

            view.departments();

            let question = 
            {
                type: "input",
                message: "Enter the id of the employee you would like to remove?",
                name:"remove_employee"
            }
            inquirer.prompt(question).then(function(answer) {
                connection.query(
                    "DELETE FROM employees WHERE id = ?",
                {
                    id: answer.remove_employee
                })
                console.log("Department removed!")
                view.employees();
            })
        },

    }


module.exports = remove;