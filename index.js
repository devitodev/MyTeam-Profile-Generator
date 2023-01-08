const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const questions = [
    {
        type: 'input',
        name: 'team-member-name',
        message: 'What is this team member\'s name?',
    },
    {
        type: 'input',
        name: 'job-title',
        message: 'What is this team member\'s job title?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is this team member\'s email address?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is this team member\'s GitHub username?',
    }
]

