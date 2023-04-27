import inquirer from 'inquirer';
import fs from "fs/promises";


let {
    title,
    description,
    license,
    installation,
    usage,
    contributing,
    tests,
    questions
} = await inquirer.prompt([
    
    {
        type: 'input',
        name: 'title',
        message: "Write a title for your project: ",

    },
    {
        type: 'input',
        name: 'description',
        message: "Write a description of your project: ",
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which License for your Github repository?',
        choices: ['MIT', 'Apache 2.0', 'ISC', 'BSD'],

    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the usage instructions for your project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines for your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the testing instructions for your project?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What are the instructions for users to contact you with questions?',
    },

])


fs.writeFile("README.md", readmeText);

function generateLicenseBadge(license) {
    if (license === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

    } else if (license === "Apache 2.0") {
        return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

    } else if (license === "ISC") {
        return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";

    } else if (license === "BSD") {
        return "[![License: BSD](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";

    } else {
        return ""
    }
}

function generateLicense(license) {
    if (license === "MIT") {
        return "This project is licensed under the terms of the MIT license.";
    } else if (license === "Apache 2.0") {
        return "This project is licensed under the terms of the Apache 2.0 license.";
    } else if (license === "ISC") {
        return "This project is licensed under the terms of the ISC license.";
    } else if (license === "BSD") {
        return "This project is licensed under the terms of the BSD-3-Clause license.";
    } else {
        return ""
    }
}

let readmeText = `# ${title}\n\n${generateLicenseBadge(license)}\n\n## Description\n\n${description}\n\n## Table of Contents\n\n${generateTableOfContents()}\n\n## Installation\n\n${installation}\n\n## Usage\n\n${usage}\n\n## Contributing\n\n${contributing}\n\n## Tests\n\n${tests}\n\n## Questions\n\n${questions}\n`;


fs.writeFile("README.md", readmeText, function (err) {
    if (err) {
        console.log("An error occurred while writing to README.md:", err);
    } else {
        console.log("README.md was saved successfully!");
    }
});
