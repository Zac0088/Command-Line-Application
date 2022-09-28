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
        name: "project",
    },
    {
        type: "input",
        message: "Description of your project:",
        name: "description",
    },
    {
        type: "checkbox",
        message: "What license does your project require? (SPACEBAR to checkmark and ENTER to confirm)",
        name: License,
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'N/A'],
    },
    {
        type: "input",
        message: "What command should run dependencies?",
        name: "install",
    },
    {
        type: "input",
        message: "what command should be used to run tests?",
        name: "test",
    },
    {
        type: "input",
        message: "What does the user need to know about this repo?",
        name: "use",
    },
    {
        type: "input",
        message: "How does the user contribute to this repo?",
        name: "contribute",
    },
];


function writeToFile(fileName, data) {
    FontFaceSet.writeToFile(fileName, data, function (err) {
        if (err) throw err;
        console.log("File Created");
    })
}


function init() {
    inquirer.createPromptModule(questions).then((data) => {
        const readmeFile = generateMarkdown(data);
        writeToFile("generatedReadMe.md",readmeFile);
    })
}


init();
