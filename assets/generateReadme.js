function generateMarkdown(data,badge) {
  return `
# ${data.title}

## Table of Contents

* [Project Description](#project-description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Demo Video](#tests)
* [Questions?](#questions)

## Project Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## License

This project is under ${data.license} for licensing.

${badge}

## Contributing

${data.contribute}

## Tests

${data.test}

## Questions

Please contact me for any questions related to the application through the information below:

Github username: ${data.username}

Github Email: <${data.email}>

`;
}

module.exports = generateMarkdown;
