require("dotenv").config();
const generateMarkdown = require("./assets/generateReadme.js");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser(){
    return inquirer.prompt([
    {    
        type: "input",
        name: "title",
        message: "Title of the project?",
    },
    {    
        type: "input",
        name: "description",
        message: "Description of the project.",
    },
    {    
        type: "input",
        name: "installation",
        message: "Installation requirements?",
    },
    {    
        type: "input",
        name: "usage",
        message: "How to run the project?",
    },
    {
        type: "list",
        message: "Which license used for the project?",
        name: "license",
        choices: 
        [
            "Apache license 2.0", 
            "GNU General Public License v3.0", 
            "MIT",
            "Unlicensed"
        ],
        default: 2
    },
    {
        type: "input",
        message: "How to contribute for this project?",
        name: "contribute",
    },
    {
        type: "input",
        message: "Link of Demo Video of the project?",
        name: "test",
    },
    {
        type: "input",
        message: "Type your github username?",
        name: "username",
        validate: function(answer)
        { 
            if(answer == "") {
                return "You must enter your github username";
            }
            return true;
        }
    }, 
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
        validate: function(answer)
        { 
            if(answer == "") {
                return "You must enter email address";
            }
            return true;
        }
    }
]);
}

async function init() {
    console.log("Welcome to readme file generator")
    try{
        const data = await promptUser();
        const license = data.license;
        const badge = await renderBadge(license);
        const readme = generateMarkdown(data,badge);
        await writeFileAsync("ORLANDO_README.md",readme);
        console.log("readme.MD succesfully generated");
    } catch(err) {
      console.log(err);
    }
}

async function renderBadge(license){
    let badge = "";
    switch(license){
        case "Apache license 2.0":
            return badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        case "GNU General Public License v3.0":
            return badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        case "MIT":
            return badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        case "The Unlicense":
            return badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
        default:
            console.log("Render badge failed");
    }
}

init();
