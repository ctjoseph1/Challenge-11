// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
   

## Table of contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${generateLicenseBatch(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}

`;
}

function generateLicenseBatch(licenseName) {
  // return `${licenseName} array is working`;
if (licenseName=== 'MIT') {
  return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
} else if (licenseName=== 'GPL') {
  return '[![License: MIT](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/GPL)'
} else if (licenseName=== 'Apache'){
  return '[![License: MIT](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache)'
} else if (licenseName=== 'None'){
  return '[![License: MIT](https://img.shields.io/badge/License-None-yellow.svg)](https://opensource.org/licenses/None)'
}
}


module.exports = generateMarkdown;
