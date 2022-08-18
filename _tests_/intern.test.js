const Intern = require('../lib/intern');

describe('Intern', () => {
    it('should return a name', () => {

        const name = 'angel'
        const id = '1234'
        const email = 'angel@email.com'
        const school = 'SIU'

        const intern = new Intern(name, id, email, school);

        expect(intern.name).toBe(name)

    });

    it('should return an ID', () => {

        const name = 'angel'
        const id = '1234'
        const email = 'angel@email.com'
        const school = 'SIU'

        const intern = new Intern(name, id, email, school);

        expect(intern.id).toBe(id)
    });

    it('should return and email', () => {

        const name = 'angel'
        const id = '1234'
        const email = 'angel@email.com'
        const school = 'SIU'

        const intern = new Intern(name, id, email, school);

        expect(intern.email).toBe(email)
    });

    it('should return a school', () => {

        const name = 'angel'
        const id = '1234'
        const email = 'angel@email.com'
        const school = 'SIU'

        const intern = new Intern(name, id, email, school);

        expect(intern.school).toBe(school)
    });

    it('should return a Role', () => {

        const name = 'angel'
        const id = '1234'
        const email = 'angel@email.com'
        const school = 'SIU'

        const intern = new Intern(name, id, email, school);

        expect(intern.getRole()).toBe('Intern');
    })

})