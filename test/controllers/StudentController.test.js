const StudentController = require('./../../lib/controllers/StudentController')

describe('Unit Tests for StudentController Class', () => {
    test('1) Test for getAllStudents', () => {
        const students = StudentController.getAllStudents('./test/data/students.json')
        
        expect(students.length).toBe(25);
    })
})