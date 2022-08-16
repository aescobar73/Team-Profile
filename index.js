const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');

inquirer
    .prompt([
        {
            type: 'input',
            message: ('What is the team manager\'s name? '),
            name: 'name',
        },
        {
            type: 'input',
            message: ('What is the team manager\'s ID?'),
            name: 'id',
        },
        {
            type: 'input',
            message: ('What is the team Manager\'s email address?'),
            name: 'email',
        },
        {
            type: 'input',
            message: ('What is the team manager\'s office number?'),
            name: "number"
        },
    ])

    .then((response) => {

        const teamHtml = `<html><body><h2>This page belongs to: ${response.name}</h2><div>${response.id}</div></body></html>`

        fs.appendFile('team.html', (teamHtml), (err) => {
                err ? console.error(err) : console.log('Team Created!')
            });

        members();

    })

    const makeEnginner = () => {

       return inquirer
            .prompt([
                    {
                        type: 'input',
                        message: ('What is the engineer\'s name? '),
                        name: 'name',
                    },
                    {
                        type: 'input',
                        message: ('What is the engineer\'s ID?'),
                        name: 'id',
                    },
                    {
                        type: 'input',
                        message: ('What is the engineer\'s email address?'),
                        name: 'email',
                    },
                    {
                        type: 'input',
                        message: ('What is the engineer\'s office number?'),
                        name: "number"
                    },
        ])

        .then((response2) => {

            const teamHtml = `<html><body><h2>This page belongs to: ${response2.name}</h2><div>${response2.id}</div></body></html>`

            fs.appendFile('team.html', (teamHtml), (err) => {
                    err ? console.error(err) : console.log('Team Created!')
                });

                members()

            })
    

        

    }

    const makeIntern = () => {

        return inquirer
            .prompt([

                    {
                        type: 'input',
                        message: ('What is the intern\'s name? '),
                        name: 'name',
                    },
                    {
                        type: 'input',
                        message: ('What is the intern\'s ID?'),
                        name: 'id',
                    },
                    {
                        type: 'input',
                        message: ('What is the intern\'s email address?'),
                        name: 'email',
                    },
                    {
                        type: 'input',
                        message: ('What is the intern\'s office number?'),
                        name: "number"
                    },
    
                ])

                .then((response3) => {

                    const teamHtml = `<h3>This page belongs to: ${response3.name}</h3>\n
                    <div>${response3.id}</div>`

                    fs.appendFile('team.html', (teamHtml), (err) => {
                            err ? console.error(err) : console.log('Team Created!')
                        });

                        members()

                    })
            

            

    }

    const members = () => {
        return inquirer.prompt([
        {
            type: 'list',
            message: ('Which type of team member would you like to add?'),
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
            name: 'title'
        }
    ])
        .then((choice) => {
            switch(choice.title) {
                case 'Engineer':
                    makeEnginner();
                    break;
                case 'Intern':
                    makeIntern();
                    break;
                default: 
                    text = 'Team Created';
            }
        })
    }
        // if(response.title === 'Engineer'){
        //     inquirer.prompt([
        //         {
        //             type: 'input',
        //             message: ('What is the engineer\'s name? '),
        //             name: 'name',
        //         },
        //         {
        //             type: 'input',
        //             message: ('What is the engineer\'s ID?'),
        //             name: 'id',
        //         },
        //         {
        //             type: 'input',
        //             message: ('What is the engineer\'s email address?'),
        //             name: 'email',
        //         },
        //         {
        //             type: 'input',
        //             message: ('What is the engineer\'s office number?'),
        //             name: "number"
        //         },
        //         {
        //             type: 'list',
        //             message: ('Which type of team member would you like to add?'),
        //             choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members.'],
        //             name: 'title'
        //         }

        //     ])
        // } else if(response.title === 'Intern') {
        //     inquirer.prompt([

        //         {
        //             type: 'input',
        //             message: ('What is the intern\'s name? '),
        //             name: 'name',
        //         },
        //         {
        //             type: 'input',
        //             message: ('What is the intern\'s ID?'),
        //             name: 'id',
        //         },
        //         {
        //             type: 'input',
        //             message: ('What is the intern\'s email address?'),
        //             name: 'email',
        //         },
        //         {
        //             type: 'input',
        //             message: ('What is the intern\'s office number?'),
        //             name: "number"
        //         },
        //         {
        //             type: 'list',
        //             message: ('Which type of team member would you like to add?'),
        //             choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members.'],
        //             name: 'title'
        //         }

        //     ])
        // } else if(response.title === 'I don\'t want to add any more team members.') {

        //     // 

        // }

        
    // })

    // fs.appendFile('team.html', JSON.stringify(response), (err) => {
        //     err ? console.error(err) : console.log('Team Created!')
        // })