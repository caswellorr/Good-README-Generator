const inquierer = require('inquirer');
const fs = require('fs');
const util = require('util');

const prompts = [
  {
    type: 'input',
    name: 'Title',
    message: 'What is the title of the project?'
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Please describe the project: '
  },
  {
    type: 'input',
    name: 'Table of Contents',
    message: 'Table of Contents'
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'Please include the Installation Instructions: '
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'Please include the Usage Information: '
  },
  {
    type: 'list',
    name: 'License',
    message: 'What license are you using?',
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
  },
  {
    type: 'input',
    name: 'Contributing',
    message: 'Please include Contribution Guidelines: '
  },
  {
    type: 'input',
    name: 'Test',
    message: 'Please include Testing Instructions: '
  },
  {
    type: 'input',
    name: 'Questions',
    message: 'Please include any questions you may have: '
  },
 
]