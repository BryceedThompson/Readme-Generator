// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    'What is your Title?',
    'What is your description?',
    'What are your installation instructions?',
    'What is your usage?',
    'What licence are you using?',
    'What are your instructions for running tests?',
    'What is your github user name?',
    'What is your email adress'
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let formatedFileName = `${fileName.split(' ').join('').md}`;
    fs.writeFile(formatedFileName,data,(err) =>
    err ? console.log(err) : console.log('success'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type:'input',
            message:questions[0],
            name: 'title'
        },
        {
            type:'input',
            message:questions[1],
            name: 'description'
        },
        {
            type:'input',
            message:questions[2],
            name: 'installation'
        },
        {
            type:'input',
            message:questions[3],
            name: 'usage'
        },
        {
            type:'list',
            message:questions[4],
            name: 'licence',
            choices:['Apache 2.0','GNU v3.0','MIT','none']
        },
        {
            type:'input',
            message:questions[5],
            name: 'test instructions'
        },
        {
            type:'input',
            message:questions[6],
            name: 'userName'
        },
        {
            type:'input',
            message:questions[7],
            name: 'email'
        }
    
    ]).then(responce => {
        console.log(responce);
        writeToFile(responce.title, generateMarkdown(responce));
    })
}

// Function call to initialize app
init();
