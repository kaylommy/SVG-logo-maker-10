// require inquirer for the prompts
const inquirer = require('inquirer');
// require fs for writing files (node file system)
const fs = require('fs');

inquirer
    .prompt ([
        {
            type: 'input',
            message: 'What text would you like for your logo? Please enter up to 3 characters:',
            name: 'logoText',
            // validate ensures the user cannot enter more than 3 characters.
            validate: logoText => {
                if(logoText.length > 3) {
                    console.log('Make sure to enter no more than 3 characters.');
                }else {
                    // if 3 or less characters are inputed it will return true and continue on with the questions.
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: 'What color would you like for your text? Please enter a color name or the hexadecimal number:',
            name: 'textColor',
        },
        {
            type: 'list',
            message: 'Please choose a shape:',
            choices: ['circle', 'triangle', 'square'],
            name: 'shapes',
        },
        {
            type: 'input',
            message: 'What color would you like your shape? Please enter a color name or the hexadecimal number:',
            name: 'shapeColor',
        },
    ]).then((answers) => {
        fs.writeFile('logo.svg', answers, error => {
            // if there was an error it will be console logged, if successful it will log 'Generated logo.svg' in the console.
            error ? console.log(error, 'Something went wrong') : console.log('Generated logo.svg');
        })
    });