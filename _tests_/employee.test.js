const Employee = require('../lib/employee');

describe('Employee', () => {
        it('should return a name', () => {

            const name = 'angel'
            const id = '1234'
            const email = 'angel@email.com'

            const employee = new Employee(name, id, email);

        expect(employee.name).toBe(name);
    });

    it('should return an ID', () => {

        const name = 'angel'
        const id = '1234'
        const email = 'angel@email.com'

        const employee = new Employee(name, id, email);

        expect(employee.id).toBe(id);
    });

    it('should return an email', () => {

        const name = 'angel'
        const id = '1234'
        const email = 'angel@email.com'

        const employee = new Employee(name, id, email);

        expect(employee.email).toBe(email);
    });

    it('should return a role', () => {

        const name = 'angel'
        const id = '1234'
        const email = 'angel@email.com'

        const employee = new Employee(name, id, email);

        expect(employee.getRole()).toBe('Employee');
    })
})
