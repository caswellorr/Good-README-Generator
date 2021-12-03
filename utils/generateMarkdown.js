// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// ** use conditional - 3 options - connected to the license list in the index

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// ${renderLicenseBadge}



// TODO: Create a function to generate markdown for README
// ============ GENERATE MARKDOWN FUNCTION ================
// user input from terminal fills the interpolated strings

function generateMarkdown(response) {

  return `
  # ${response.title} 

  ## Description

  ${response.description}
 
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

    ${response.installation}

  ## Usage

    ${response.usage}

  ## Contribution Guidelines

    ${response.contribute}
 
  ## Tests

  In order to test, open the console and run the following:

    \`\`\` ${response.test} \`\`\`

  ## Questions

  If you have any questions about the repo, please feel free to reach out.

    GitHub Profile: ${response.link}

    Email: ${response.email}

---

 ## License

  This project is licensed under ${response.license} 
`

};

// ============ EXPORT TO OTHER INDEX ================

// exports generateMarkdown to index, connected by the 'required'
module.exports = generateMarkdown;
