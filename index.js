const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = (response) =>
`# Title ${response.title}
![License](https://img.shields.io/badge/License-${response.license}-blue.svg "License Badge")\n 

 # Description\n 
 ${response.description}\n

 # Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#Contributing)
* [Features](#Features)
* [Questions](#questions)

# Installation
${response.Installation}

 # Usage
 ${response.usage}

 # License
 ${response.license}

 # Features
 ${response.Features}

 # Contributing 
 [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)
 
 ${response.Contributing}
`;

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Give a short description of your project',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Describe how to use this project',
      name: 'usage',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of license should your project have?',
      choices: ['MIT', 'APACHE', 'GPL', 'BSD', 'None'],
    },
    {
      type: 'input',
      message: 'Describe how to install this project',
      name: 'Installation',
    },
    {
      type: 'input',
      message: 'List what features your application has.',
      name: 'Features',
    },
    {
      type: 'input',
      message: 'List what resposibilities contributors have.',
      name: 'Contributing',
    },

  ])
  .then((response) =>{
  const readmeContent = generateReadme(response);
  fs.writeFile('readme.md', readmeContent, (err) =>
  err ? console.log(err) : console.log('Successfully Readme.md!')     
  )  
  });
  

