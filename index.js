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
        name: "title",
    },
    {
        type: "input",
        message: "Description of your project:",
        name: "description",
    },
    {
        type: "checkbox",
        message: "What license does your project require? (SPACEBAR to checkmark and ENTER to confirm)",
        name: "license",
        choices: ['MIT', 'APACHE 2.0', 'BSD', 'N/A'],
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


function writeToFile(fileName,data) {
    fs.writeFile(fileName, data, (err) =>
    err? console.log(err) : console.log('success! File Created!'));
};

function init() {
    inquirer.prompt(questions).then((data) => {
        const readmeFile = generateMarkdown(data);
        writeToFile("generatedReadMe.md",readmeFile);
    })
}


init();
