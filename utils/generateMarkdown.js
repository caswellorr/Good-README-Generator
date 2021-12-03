// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {

  if (license === 'MIT') {

    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    
      
  }
  
  else if (license === 'APACHE 2.0') {

    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'

  } 
  
  else if (license === 'WTFPL') {

    return '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)'

  }

  else if (license === 'None') {

    return ''
  }

}

// TODO: Create a function to generate markdown for README
// ============ GENERATE MARKDOWN FUNCTION ================
// user input from terminal fills the interpolated strings

function generateMarkdown({title, description, installation, usage, contribute, test, link, email, license }) {

  return `
  # ${title} ${renderLicenseBadge(license)}
  ## Description

  ${description}
 
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

    ${installation}

  ## Usage

    ${usage}

  ## Contribution Guidelines

    ${contribute}
 
  ## Tests

  In order to test, open the console and run the following:

    \`\`\` ${test} \`\`\`

  ## Questions

  If you have any questions about the repo, please feel free to reach out.

    GitHub Profile: ${link}

    Email: ${email}

--- 

  ## License

  This project is licensed under ${license} 
  
  `


};

// ============ EXPORT TO OTHER INDEX ================

// exports generateMarkdown to index, connected by the 'required'
module.exports = generateMarkdown;
