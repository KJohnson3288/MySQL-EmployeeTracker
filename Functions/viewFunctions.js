//Dependencies
const inquirer = require("inquirer");
const cTable = require("console.table");
const mysql = require("mysql");

//ORM files
const connection = require("../config/connection");


//orm functions to run when any of the view choices are selected

var view = {
    departments: function(cb) {
        connection.query("SELECT * FROM departments",
        (err, res) =>{
            if (err) throw err;
           cb(res)
        });
    },

    roles: function(cb) {
        connection.query("SELECT * FROM roles",
        (err, res) =>{
            if (err) throw err;
            cb(res)
        });
    },
    
    employees: function(cb) {
        connection.query("SELECT employees.id, employees.first_name, employees.last_name, roles.title AS roles, departments.department_name AS department , CONCAT(manager.first_name,' ',manager.last_name) AS manager FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id LEFT JOIN employees manager ON employees.manager_id = manager.id",
        (err, res) =>{
            if (err) throw err;
            cb(res)
        });
    }


   
    

    
}



module.exports = view;