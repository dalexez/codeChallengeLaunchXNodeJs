class StudentService {
    static filterByCertification(students, boolean){
        return students.filter((student) => student.haveCertification === boolean)        
    }
}

module.exports = StudentService