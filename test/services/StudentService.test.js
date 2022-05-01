const StudentService = require('../../lib/services/StudentService')
const Reader = require('./../../lib/utils/Reader')
const credits = 500
const boolean = true

const path = "./test/data/students.json"

describe('Unit Tests for StudentService Class', () => {
  test('1) Test filterByCertification', () => {
    const students = Reader.readJsonFile(path)
    const studentsHaveCertification = StudentService.filterByCertification(students, boolean)

    expect(studentsHaveCertification.length).toBe(11)
  })
  test('2) Test filterByCredits', () => {
    const students = Reader.readJsonFile(path)
    const studentsCredits = StudentService.filterByCredits(students, credits)

    expect(studentsCredits.length).toBe(15)
    expect(studentsCredits[5].name).toBe("Kara")
  })
})