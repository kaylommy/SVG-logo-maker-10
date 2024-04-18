// require inquirer for the prompts
const inquirer = require('inquirer');
// require fs for writing files (node file system)
const fs = require('fs');
// require the shapes.js file
const { Circle, Triangle, Square } = require('./lib/shapes');

inquirer
    .prompt ([
        {
            type: 'input',
            message: 'What text would you like for your logo? Please enter up to 3 characters:',
            name: 'logoText',
            // validate ensures the user cannot enter more than 3 characters.
            validate: logoText => {
                if(logoText.length > 3) {
                    console.log(' Make sure to enter no more than 3 characters.');
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
            name: 'logoShape',
        },
        {
            type: 'input',
            message: 'What color would you like your shape? Please enter a color name or the hexadecimal number:',
            name: 'shapeColor',
            // this validate compares if the shapeColor and textColor are the same if they are it logs a message to enter a new color.
            validate: (shapeColor, answers) => {
                if(shapeColor === answers.textColor){
                    console.log(' The shape color and text color cannot be the same. Please enter a new color');
                }else {
                    return true;
                }
            }
        },
    ]).then((answers) => {
        // if statement for each shape and their corresponding svg file
        if (answers.logoShape === 'circle'){
            const circle = new Circle(answers.logoText, answers.textColor, answers.shapeColor)
            fs.writeFile('./examples/circle.svg', circle.render(), error => {
                // if there was an error it will be console logged, if successful it will log 'Generated ___.svg' in the console.
                error ? console.log(error, 'Something went wrong') : console.log('Generated circle.svg');
            })
        }else if (answers.logoShape === 'triangle'){
            const triangle = new Triangle(answers.logoText, answers.textColor, answers.shapeColor)
            fs.writeFile('./examples/triangle.svg', triangle.render(), error => {
                error ? console.log(error, 'Something went wrong') : console.log('Generated triangle.svg');
            })
        }else if (answers.logoShape === 'square'){
            const square = new Square(answers.logoText, answers.textColor, answers.shapeColor)
            fs.writeFile('./examples/square.svg', square.render(), error => {
                error ? console.log(error, 'Something went wrong') : console.log('Generated square.svg');
            })
        }

    });