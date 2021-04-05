const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = (response) =>
`# Title ${response.title}

 # Description
 ${response.description}

 # Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

# Installation
${response.Installation}

 # Usage
 ${response.usage}

 # License
 ${response.license}

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
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
      type: 'input',
      message: 'Describe how to install this project',
      name: 'Installation',
    },
  ])
  .then((response) =>{
  const readmeContent = generateReadme(response);
  fs.writeFile('readme.md', readmeContent, (err) =>
  err ? console.log(err) : console.log('Successfully Readme.md!')     
  )  
  });
  

