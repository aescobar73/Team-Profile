const inquirer = require('inquirer');
const fs = require('fs');
// const { title } = require('process');

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

        const teamHtml = 
        `
        <html>
        <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        </head>
        <body>
        <h1 class="display-2 text-center bg-danger text-white">Team Members</h1>
        <div class="col-12 col-sm-6 col-md-3 mb-3">
            <div class="card">
                <div class="card-header bg-info">
                <h3>${response.name}</h3>
                <h3> Title: Manager</h3>
                </div>
                <div class="card-body">
                    <ul>
                    <li>ID: ${response.id}</li>
                    <li>Email: <a href='mailto:${response.email}'>${response.email}</a></li>
                    <li>Office Number: <a href="tel:${response.number}">${response.number}</a></li>
                    </ul>
                </div>
            </div>
        </div>
        </body>
        </html>`

        fs.appendFile('./dist/team.html', (teamHtml), (err) => {
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
                        message: ('What is the engineer\'s Github username?'),
                        name: "github"
                    },
        ])

        .then((response2) => {

            const teamHtml2 = 
            `
            <html>
            <div class="col-12 col-sm-6 col-md-3 mb-3">
            <div class="card">
                <div class="card-header bg-info">
                <h2>${response2.name}</h2>
                <h3>Title: Engineer</h3>
                </div>
                <div class="card-body">
                    <ul>
                    <li>ID: ${response2.id}</li>
                    <li>Email: <a href='mailto:${response2.email}'>${response2.email}</a></li>
                    <li>Github: <a href='${response2.github}' target="_blank">${response2.github}</a></li>
                    </ul>
                </div>
            </div>
            </div>
            </html>`

            fs.appendFile('./dist/team.html', (teamHtml2), (err) => {
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
                        message: ('What is the intern\'s school?'),
                        name: "school"
                    },
    
                ])

                .then((response3) => {

                    const teamHtml3 = 
                    `
                    <html>
                    <div class="col-12 col-sm-6 col-md-3 mb-3">
                        <div class="card">
                            <div class="card-header bg-info">
                            <h2>${response3.name}</h2>
                            <h3>Title: Intern</h3>
                            </div>
                            <div class="card-body">
                                <ul>
                                <li>ID: ${response3.id}</li>
                                <li>Email: <a href='mailto:${response3.email}'>${response3.email}</a></li>
                                <li>School: ${response3.school}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </html>`

                    fs.appendFile('./dist/team.html', (teamHtml3), (err) => {
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
        