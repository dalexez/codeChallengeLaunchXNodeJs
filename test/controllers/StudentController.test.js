const StudentController = require('./../../lib/controllers/StudentController')
const credits = 500
const boolean = true
const path = "./test/data/students.json"

describe('Unit Tests for StudentController Class', () => {
    test('1) Test for getAllStudents', () => {
        const students = StudentController.getAllStudents(path)
        
        expect(students.length).toBe(25)
    })
    test('2) Test for getStudentsByCertication', () => {
        const students = StudentController.getStudentsByCertification(boolean, path)
        
        expect(students.length).toBe(11)
        expect(students[5]).toBe("Montoya@visualpartnership.xyz")
    })
    test(') Test for getStudentsBycredits', () => {
        const students = StudentController.getStudentsByCredits(credits, path)
        
        expect(students.length).toBe(15)
    })
})