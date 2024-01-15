const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user inquirer 9/10
const questions = [
{
type:'input',
message: 'What is the title of your project?',
name: 'title',
},
{
    type:'input',
    message: 'What is the title of your project?',
    name: 'title',   
}

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// function to initialize program
function init() {
inquirer.prompt(questions)
.then (data => {
    const readme= generateMarkdown(data)
    writeToFile('./utils/readme.md', readme)
})
}

// function call to initialize program
init();
