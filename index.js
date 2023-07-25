//  Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
//  Create an array of questions for user input
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

//  Create a function to write README file
function writeToFile(fileName, data) {
    let formatedFileName = `${fileName.split(' ').join('')}.md`;
    fs.writeFile(formatedFileName,data,(err) =>
    err ? console.log(err) : console.log('success'))
}

//  Create a function to initialize app
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
            name: 'license',
            choices:['Apache_2.0','bsd_2_clause','MIT','none']
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

//  Function call to initialize app
init();
