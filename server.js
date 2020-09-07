//Dependencies
const inquirer = require("inquirer");
const cTable = require("console.table");
var mysql = require("mysql");

//ORM files 
const connection = require("./config/connection");
const view = require("./Functions/viewFunctions");
const add = require("./Functions/addFunctions");
const remove = require("./Functions/deleteFunctions");
const update = require("./Functions/updateFunctions");
const { builtinModules } = require("module");

//Starting inquirer
start();

function start() {
    inquirer.prompt({
        type: "rawlist",
        message: "What would you like to do?",
        name: "start",
        choices: [
            "View departments",
            "View roles",
            "View employees",
            "Add department",
            "Add role",
            "Add employee",
            "Remove department",
            "Remove role",
            "Remove employee",
            "Update employee",
            "Exit Program"
        ]
    }).then(function (answers) {

        if (answers.start === "View departments") {
            view.departments((data) => {
                console.table(data);
                start();
            });


        } else if (answers.start === "View roles") {
            view.roles((data) => {
                console.table(data);
                start();
            });

        } else if (answers.start === "View employees") {
            view.employees((data) => {
                console.table(data);
                start();
            });

        } else if (answers.start === "Add department") {
            add.department((cb) => {
                console.log(cb);
                start();
            });

        } else if (answers.start === "Add role") {
            add.role((cb) => {
                console.log(cb);
                start();
            });

        } else if (answers.start === "Add employee") {
            add.employee((cb) => {
                console.log(cb);
                start();
            });

        } else if (answers.start === "Remove department") {
            remove.department((cb) => {
                console.log(cb);
                start();
            });

        } else if (answers.start === "Remove role") {
            remove.role((cb) => {
                console.log(cb);
                start();
            });

        } else if (answers.start === "Remove employee") {
            remove.employee((cb) => {
                console.log(cb);
                start();
            });

        } else if (answers.start === "Update employee") {
            update.employee((cb) => {
                console.log(cb);
                start();
            });

        } else if (answers.start === "Exit Program") {
            process.exit()

        }
    });

}


