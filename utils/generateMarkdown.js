// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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
  
  ## Licenses

    * ${data.license}
  
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
