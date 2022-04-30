const Reader = require('./../../lib/utils/Reader')

class StudentController {
    static getAllStudents(path){
        return Reader.readJsonFile(path)
    }
}

module.exports = StudentController