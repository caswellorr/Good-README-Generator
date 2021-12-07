
// ============ GENERATE MARKDOWN FUNCTION ================

function generateMarkdown({title, description, link, installation, usage, contribute, test, gitHub, email, license }) {

  return `
  # ${title} ${renderLicenseBadge(license)}
  ## Description

  ${description}

  Link : [Click Here](${link})
 
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

  GitHub Profile: ${gitHub}

  Email: ${email}

  Links: 

--- 

  ## License

  This project is licensed under ${license} 
  
  `


};

// ============= LICENSE BADGE =================

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

// ============ EXPORT SCRIPT ================

module.exports = generateMarkdown;