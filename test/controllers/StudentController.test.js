const StudentController = require('./../../lib/controllers/StudentController')

describe('Unit Tests for StudentController Class', () => {
    test('1) Test for getAllStudents', () => {
        const students = StudentController.getAllStudents('./test/data/students.json')
        
        expect(students.length).toBe(25);
    })
    test('2) Test for getStudentsByCertication', () => {
        const students = StudentController.getStudentsByCertification(true)
        
        expect(students.length).toBe(10);
    })
})