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
    message: 'Please describe the nature of your readme',
    name: 'description',
}
{
    type:'input',
    message: 'Please enter the installation instructions',
    name: 'installation',
}
{
    type:'input',
    message: 'What are the usage terms?'
    name: 'usage'
}
{
    //When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    type:'input',
    message: 'What Licensing?'
    name: 'license'
}
{
    type:'input',
    message: 'Who are the contributors'
    name: 'contributing'
}
{
    type:'input',
    message: ''
    name: 'tests'
}
{
    //When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
   //When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
    type:'input',
    message: ''
    name: 'questions'
}
//When a user clicks on the links in the Table of Contents then they are taken to the corresponding section of the README
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
