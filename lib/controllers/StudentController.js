const Reader = require('./../../lib/utils/Reader')
const StudentService = require('./../../lib/services/StudentService')

class StudentController {
    static getAllStudents(path){
        return Reader.readJsonFile(path)
    }
    static getStudentsByCertification(boolean, path){
        const students = Reader.readJsonFile(path)
        return StudentService.filterByCertification(students, boolean)
    }
    static getStudentsByCredits(credits, path){
        const students = Reader.readJsonFile(path)
        return StudentService.filterByCredits(students, credits)
    }
}

module.exports = StudentController