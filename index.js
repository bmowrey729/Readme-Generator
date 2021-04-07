const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = (response) =>
`# Title ${response.title}

#license\n
![License](https://img.shields.io/badge/License-${response.license}-blue.svg "License Badge")\n

 # Description  
 ${response.description}

 # Table of Contents 
* [License](#license)
* [Installation](#installation)
* [Usage](#usage)
* [Features](#Features)
* [Testing](#Testing)
* [Contributing](#Contributing)
* [Questions](#questions)

# Installation
${response.Installation}

 # Usage
 ${response.usage}

  # Features
 ${response.Features}

 # Testing
 ${response.Testing}
 
 # Contributing 
 [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)
 
 ${response.Contributing}
 
 # Questions
 If you have any questions concerning this project please contact me from one of the following:
 
${response.Questions}
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
      message: 'Give a short description of your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Describe how to use this project.',
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
      message: 'Describe how to install this project.',
      name: 'Installation',
    },
    {
      type: 'input',
      message: 'List what features your project has.',
      name: 'Features',
    },
    {
      type: 'input',
      message: 'List what resposibilities contributors have.',
      name: 'Contributing',
    },

    {
      type: 'input',
      message: 'List any procedures for testing your project.',
      name: 'Testing',
    },
    {
      type: 'input',
      message: 'Please list contact info. email, URL for Linkedin profile, URL for Github profile.',
      name: 'Questions',
    },

  ])
  .then((response) =>{
  const readmeContent = generateReadme(response);
  fs.writeFile('readme.md', readmeContent, (err) =>
  err ? console.log(err) : console.log('Successfully Readme.md!')     
  )  
  });
  

