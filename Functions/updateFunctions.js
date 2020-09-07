// Dependencies
const mysql = require("mysql");
const connection = require("../config/connection");
const inquirer = require("inquirer");

//ORM files
const view = require("./viewFunctions");



let update = {

  employee: function (cb) {

    view.employees((data) => {
      console.table(data)
    });
    view.roles((data) => {
      console.table(data)
    });

    let questions =
      [{
        type: "number",
        message: "What would you like to update this employees role to?",
        name: "role_id"
      },
      {
        type: "number",
        message: "input the id of the employee you would like to update.",
        name: "id"
      }];
    inquirer.prompt(questions).then(function (answer) {
      connection.query(
        "UPDATE employees SET ? WHERE ?",
        {
          role_id: answer.role_id,
          id: answer.id
        })
        
    }).then(() => {
      cb("update complete");
    });
  }
};

module.exports = update;