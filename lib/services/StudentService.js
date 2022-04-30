class StudentService {
    static filterByCertification(students, boolean){
        return students.filter((student) => student.haveCertification === boolean)        
    }
    static filterByCredits(students, credits){
        return students.filter((student) => student.credits > credits)
    }
}   

module.exports = StudentService