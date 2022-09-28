const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require ("./util/generateMarkdown.js");


const questions = [
    {
        type: "input",
        message: "What is your Github username?",
        name: "Username",
    },
    {
        type: "input",
        message: "What is your Email adress?",
        name: "email" 
    },
    {
        type: "input",
        message: "What is your projects name?",
        name: "project"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
