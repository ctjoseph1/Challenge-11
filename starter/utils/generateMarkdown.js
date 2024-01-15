// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of contents
1. [Installation](#installation)
2. [Usage](#usage)
3.
## Installation

${data.installation}

## Usage
${data.usage}

`;
}

module.exports = generateMarkdown;
