// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
    if (data.license === 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
    } else if (data.license === 'Apache 2.0') {
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue)]';
    } else if (data.license === 'GPL 3.0') {
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue))';
    } else if (data.license === 'BSD 3') {
        return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue))]';
    } else {
        return '';
    }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
    if (data.license === 'MIT') {
        return '(https://opensource.org/licenses/MIT)';
    } else if (data.license === 'Apache 2.0') {
        return '(https://opensource.org/licenses/Apache-2.0)';
    } else if (data.license === 'GPL 3.0') {
        return '(https://www.gnu.org/licenses/gpl-3.0)';
    } else if (data.license === 'BSD 3') {
        return '(https://opensource.org/licenses/BSD-3-Clause)';
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
    if (data.license === 'None') {
        return ''
    } else { return `
    ## Licenses
    * ${data.license}
    * ${renderLicenseBadge(data)}${renderLicenseLink(data)}`
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.description}
  
  ## Table of Contents
  
  - [License](#license)
  - [Technologies](#technologies)
  - [Tests](#tests)
  - [Dependencies](#dependencies)
  - [Contributing](#contributing)
  
${renderLicenseSection(data)}
  
  ## Technologies

    * Markdown
    * Node.js 
    * JavaScript
  
  
  ## Tests

    * To run a test, enter ${data.tests}
  
  ## Dependencies

    * To install dependencies, enter ${data.dependencies}
  
  ## Contributing

  GitHub: https://github.com/${data.username}
  
`;
}

module.exports = generateMarkdown;
