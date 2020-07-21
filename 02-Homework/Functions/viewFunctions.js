//Dependencies
const inquirer = require("inquirer");
const cTable = require("console.table");
const mysql = require("mysql");

//ORM files
const connection = require("../config/connection");


//orm functions to run when any of the view choices are selected

var view = {
    departments: function viewDepartments() {
        connection.query("SELECT * FROM departments",
        (err, res) =>{
            if (err) throw err;
            console.log(res)
        });
    },
    roles: function viewRoles() {
        connection.query("SELECT * FROM roles",
        (err, res) =>{
            if (err) throw err;
            console.log(res)
        });
    },
    employees: function viewEmployees() {
        connection.query("SELECT * FROM employees",
        (err, res) =>{
            if (err) throw err;
            console.log(res)
        });
    }
    

    
}



module.exports = view;