function generateMarkdown(data,badge) {
  return `
# ${data.title}

## Table of Contents

* [Project Description](#project-description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Demo Video](#Project-Demo-Video)
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

## Project Demo Video

${data.test}

## Questions

please feel free to ask me any questions.

Github username: ${data.username}

Github Email: <${data.email}>

`;
}

module.exports = generateMarkdown;
