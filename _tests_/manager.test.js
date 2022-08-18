const Manager = require('../lib/manager');

describe('Manager', () => {
    it('should return a name', () => {

            const name = 'angel'
            const id = '1234'
            const email = 'angel@email.com'
            const officeNumber = '1234567'

            const manager = new Manager(name, id, email, officeNumber);

        expect(manager.name).toBe(name);
    });

    it('should return an ID', () => {

            const name = 'angel'
            const id = '1234'
            const email = 'angel@email.com'
            const officeNumber = '1234567'

            const manager = new Manager(name, id, email, officeNumber);

        expect(manager.id).toBe(id);
    });

    it('should return an email', () => {

            const name = 'angel'
            const id = '1234'
            const email = 'angel@email.com'
            const officeNumber = '1234567'

            const manager = new Manager(name, id, email, officeNumber);

        expect(manager.email).toBe(email);
    });

    it('should return an Office Number', () => {

            const name = 'angel'
            const id = '1234'
            const email = 'angel@email.com'
            const officeNumber = '1234567'

            const manager = new Manager(name, id, email, officeNumber);

        expect(manager.officeNumber).toBe(officeNumber);
    });

    it('should return a role', () => {

            const name = 'angel'
            const id = '1234'
            const email = 'angel@email.com'
            const officeNumber = '1234567'

            const manager = new Manager(name, id, email, officeNumber);

        expect(manager.getRole()).toBe('Manager');
    });
})