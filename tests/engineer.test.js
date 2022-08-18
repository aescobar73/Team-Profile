const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    it('should return a name', () => {

        const name = 'angel'
        const id = '1234'
        const email = 'angel@email.com'
        const github = 'www.github.com'

        const engineer = new Engineer(name, id, email, github)

        expect(engineer.name).toBe(name)
    });

    it('should return an ID', () => {

        const name = 'angel'
        const id = '1234'
        const email = 'angel@email.com'
        const github = 'www.github.com'

        const engineer = new Engineer(name, id, email, github)

        expect(engineer.id).toBe(id)
    });

    it('should return an email', () => {

        const name = 'angel'
        const id = '1234'
        const email = 'angel@email.com'
        const github = 'www.github.com'

        const engineer = new Engineer(name, id, email, github)

        expect(engineer.email).toBe(email)
    });

    it('should return a user github', () => {

        const name = 'angel'
        const id = '1234'
        const email = 'angel@email.com'
        const github = 'www.github.com'

        const engineer = new Engineer(name, id, email, github)

        expect(engineer.github).toBe(github)
    });

    it('should return a role', () => {

        const name = 'angel'
        const id = '1234'
        const email = 'angel@email.com'
        const github = 'www.github.com'

        const engineer = new Engineer(name, id, email, github)


        expect(engineer.getRole()).toBe('Engineer');
    })
})