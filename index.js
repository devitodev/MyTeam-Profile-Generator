const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const managerArray = []
const engineerArray = []
const internArray = []
const generateHTML = require('./src/generateHTML')


const questions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the manager\'s name?',
    },
    {
        type: 'input',
        name: 'ID',
        message: 'What is the manager\'s ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the manager\'s email address?',
    },
    
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is manager\'s office number?',
    },
]

inquirer.prompt(
    questions
).then(answers => {
    const manager = new Manager(answers.managerName, answers.ID, answers.email, answers.officeNumber)
    managerArray.push(manager)
    createTeam()
}) 

function createTeam() {
    inquirer.prompt([{
        type:'list',
        name: 'choice',
        message: 'Which type of team member is next?',
        choices: ['Engineer', 'Intern', 'All done!']
    }])
    .then(answer => {
        if (answer.choice === 'Engineer') {
            createEngineer() 
        } else if (answer.choice === 'Intern') {
            createIntern()
        } else {
            fs.writeFileSync(path.join(__dirname,'/dist/team.html'),generateHTML(managerArray, engineerArray, internArray))
        }
    })
}

function createEngineer() {
    inquirer.prompt(
        [
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is the engineer\'s name?',
            },
            {
                type: 'input',
                name: 'ID',
                message: 'What is the engineer\'s ID?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the engineer\'s email address?',
            },
            
            {
                type: 'input',
                name: 'github',
                message: 'What is engineer\'s GitHub username?',
            },
        ]
    ) .then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.ID, answers.email, answers.github) 
        engineerArray.push(engineer)
        createTeam()
    })
}
function createIntern() {
    inquirer.prompt(
        [
            {
                type: 'input',
                name: 'internName',
                message: 'What is the intern\'s name?',
            },
            {
                type: 'input',
                name: 'ID',
                message: 'What is the intern\'s ID?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the intern\'s email address?',
            },
            
            {
                type: 'input',
                name: 'school',
                message: 'What is intern\'s school?',
            },
        ]
    ) .then(answers => {
        const intern = new Intern(answers.internName, answers.ID, answers.email, answers.school) 
        internArray.push(intern)
        createTeam()
    })
}

