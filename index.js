
// =========== NODE MODULES ===============

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// =============  PROMPT ARRAY  ==============
// displays in terminal with node.js

const prompts = [
  {
    type: 'input',
    name: 'Title',
    message: 'What is the title of the project?'
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Provide a short description explaining the what, why, and how of your project: '
  },
  {
    type: 'input',
    name: 'Table of Contents',
    message: 'If your README is long, a table of contents makes it easy for users to find what they need.'
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'What are the steps required to install your project?'
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'Please provide instructions for use: '
  },
  {
    type: 'input',
    name: 'Contribute',
    message: 'Please include Contribution Guidelines: '
  },
  {
    type: 'input',
    name: 'Test',
    message: 'Please provide examples on how to run tests on your application here: '
  },
  {
    type: 'input',
    name: 'Link',
    message: 'Please enter the link to your GitHub profile: '
  },
  {
    type: 'input',
    name: 'Email',
    message: 'Please enter your Email: '
  },
  {
    type: 'list',
    name: 'License',
    message: 'What license are you using?',
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
  }
  
]

console.log(prompts);

// ================= INQUIRER ===================
// runs inquirer to interact with terminal??

inquirer

  .prompt (prompts); // Passes prompts

  .then((answers) => {
      // Uses user feedback for... to generate the markdown??
      generateMarkdown(answers)

  }) 

  .catch ((error) => {
    
    if (error.isTyError){
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// ============ GENERATE MARKDOWN FUNCTION ================
// user input from terminal fills the interpolated strings

function generateMarkdown (answers){

  return `
  # ${answers.Title} ${licenseBadge}
  ## Descritpion
  ${answers.Description}
 
  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Test](#test)
  * [Questions](#questions)
  * [License](#license)
 
  ## Installation

  Included is a step-by-step description of how to get the development environment running:

    \`\`\` ${answers.Installtion} \`\`\`

  ## Usage

    ${answers.Usage}

  ## Contribution Guidelines

    ${answers.Contribute}
 
  ## Tests

  In order to test, open the console and run the following:

    \`\`\` ${answers.Test} \`\`\`

  ## Questions

  If you have any questions about the repo, please feel free to reach out.

    GitHub Profile: ${answers.Link}

    Email: ${answers.Email}

---

 ## License

  This project is licensed under ${answers.License} 
`

}

