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




## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Testing](#testing)
- [Questions](#questions)

## Description

${data.description}

## Installation

${data.install}

## Usage

${data.use}

## License

${data.license}

## Contribution

${data.contribute}

## Testing

${data.test}

## Questions

If you have any questions about this project please contact via Email or Github.
Email: ${data.email}.

Github: [${data.Username}](${data.Username})

`;

}


module.exports = generateMarkdown;

