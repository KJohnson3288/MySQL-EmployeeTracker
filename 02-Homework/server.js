//Dependencies
const inquirer = require("inquirer");
const cTable = require("console.table");
var mysql = require("mysql");

//ORM files 
const connection = require("./config/connection");
const view = require("./Functions/viewFunctions");
const add = require("./Functions/addFunctions");
const remove = require("./Functions/deleteFunctions");
const { builtinModules } = require("module");

//start
start();

//Starting inquirer
  function start() {
      inquirer.prompt({
          type: "list",
          message: "What would you like to do?",
          name: "start",
          choices:[
            "View departments",
            "View roles",
            "View employees",
            "Add department",
            "Add roles",
            "Add employee",
            "Remove department",
            "Remove roles",
            "Remove employee",
          ]
      }).then(function(answers) {
           if (answers.start === "View department"){
            view.departments();
            start();
            
        } else if (answers.start === "View roles"){
            view.roles();
            start();
            
        } else if (answers.start === "View employee"){
            view.employees();
            start();

        } else if (answers.start === "Add department"){
            add.department();
            start();

        } else if (answers.start === "Add roles"){
            add.role();
            start();

        } else if (answers.start === "Add employee"){
            add.employee();
            start();

        } else if (answers.start === "Remove department"){
            remove.department();
            start();

        } else if (answers.start === "Remove roles"){
            remove.roles();
            start();

        } else if (answers.start === "Remove employee"){
            remove.employee();
            start();

        }
      })
  }
