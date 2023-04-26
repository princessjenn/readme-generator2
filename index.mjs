import inquirer from 'inquirer';
import fs from "fs/promises"; 


let { title, description, license } = await inquirer
    .prompt([
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
    ])

let readmeText = `# Title ${title}\n\n Title of your project here, displayed with the largest heading\n\n ## Description ${description}\n\n Insert description here\n\n ## License ${generateLicense(license)}\n\n`;

//## License ${generateLicense}(license) 

//### A third-level heading`


fs.writeFile("README.md", readmeText);

function generateLicense(license) {
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

fs.writeFile("README.md", readmeText, function (err) {
    if (err) {
        console.log("An error occurred while writing to README.md:", err);
    } else {
        console.log("README.md was saved successfully!");
    }
});
 


//console.log(description);