const StudentController = require('./../../lib/controllers/StudentController')
const path = "./test/data/students.json"

describe('Unit Tests for StudentController Class', () => {
    test('1) Test for getAllStudents', () => {
        const students = StudentController.getAllStudents(path)
        
        expect(students.length).toBe(25);
    })
    test('2) Test for getStudentsByCertication', () => {
        const students = StudentController.getStudentsByCertification(true, path)
        
        expect(students.length).toBe(11);
    })
})