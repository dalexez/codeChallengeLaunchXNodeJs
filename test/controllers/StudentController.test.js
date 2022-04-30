const StudentController = require('./../../lib/controllers/StudentController')

describe('Unit Tests for StudentController Class', () => {
    test('1) Test for getAllStudents', () => {
        const students = StudentController.getAllStudents()
        
        expect(students.length).toBe(25);
    })
})