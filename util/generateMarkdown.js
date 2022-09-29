
function renderLicenseBadge(license) {
    if (license !== 'N/A') {
        return `![Badge](https://img.shields.io/badge/license-${license}-blue.svg)`;
    } else {
        return '';
    }
    }



function renderLicenseLink(license) {
    if (license !== "N/A") {
        return `\n * [license](#license)\n`
    }
    else{
        return "";
    }
}


function renderLicenseSection(license) {
    if (license !== "N/A") {
        return `## License
        license used is ${license}.`
    }
    else {
        return "";
    }
}


function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}


## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contribution](#contribution)
- [Testing](#testing)
- [Questions](#questions)

# Description 

${data.description}

# Installation 
* Follow instruction below for install:

${data.install}

# Usage 

${data.use}


${renderLicenseSection(data.license)}


# Contribution 

${data.contribute}

# Testing 
* Follow instructions below to run test:

${data.test}

# Questions 

If you have any questions about this project please contact via Email or Github.

Email: ${data.email}.

Github: [${data.Username}](${data.Username})

`;

}


module.exports = generateMarkdown;

