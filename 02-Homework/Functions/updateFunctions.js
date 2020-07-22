// Dependencies
const mysql = require("mysql");
const connection = require("../config/connection");
const inquirer = require("inquirer");

//ORM files
const view = require("./viewFunctions");



let update = {
    
    employee: function() {

        view.employees();
        view.roles();

        let question = [
        {
            type: "input",
            message: "which employee would you like to update",
            name: "employee"
        },
        {
            type: "input",
            message: "What would you like to update this employees role to?",
            name: "role"
        }]
        inquirer.prompt(question).then(function(answer) {
            connection.query(
              "UPDATE employees SET ? WHERE ?",
              [{
                role_id: answer.role
              },
              {
                id: answer.employee
              }])
  
              view.employees();
              console.log("update completed")
          });
    }


}

module.exports = update;