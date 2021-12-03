

// =========== NODE MODULES ===============

const inquirer = require('inquirer');
const fs = require('fs');
// const util = require('util');

// Imports generateMarkdown script from 'module.exports' in generate markdown script
const generateMarkdown = require('./utils/generateMarkdown.js');

// =============  PROMPT ARRAY  ==============

const prompts = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of the project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description explaining the what, why, and how of your project: '
  },
  {
    type: 'input',
    name: 'Table of Contents',
    message: 'If your README is long, a table of contents makes it easy for users to find what they need.'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide instructions for use: '
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'Please include Contribution Guidelines: '
  },
  {
    type: 'input',
    name: 'test',
    message: 'Please provide examples on how to run tests on your application here: '
  },
  {
    type: 'input',
    name: 'link',
    message: 'Please enter the link to your GitHub profile: '
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your Email: '
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license are you using?',
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
  }

];

// ================= INQUIRER ===================

inquirer

  .prompt(prompts) // Passes prompts

  .then((response) => {

    writeToFile(response); // then passes the writeToFile function to write the responses to the readme file

  });

// ================ WRITE TO FILE FUNCTION ============ 

function writeToFile(response) {

  fs.writeFile('README.md', generateMarkdown(response), (err) => {
    err
      ? console.log(err)
      : console.log("Success!")
  })
};

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();



