class StudentService {
    static filterByCertification(students, boolean){
        const studentsCertification = students.filter((student) => student.haveCertification === boolean)
        return studentsCertification.map(student => student.email)        
    }
    static filterByCredits(students, credits){
        return students.filter((student) => student.credits > credits)
    }
    static allStudents(students){
        return students
    }
}   

module.exports = StudentService