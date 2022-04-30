const StudentService = require('../../lib/services/StudentService')
const Reader = require('./../../lib/utils/Reader')

describe('Unit Tests for StudentService Class', () => {
  test('1) Test filterByCertification', () => {
    const students = Reader.readJsonFile('./test/data/students.json')
    const studentsHaveCertification = StudentService.filterByCertification(students, true)

    expect(studentsHaveCertification.length).toBe(14)
  })
  test('2) Test filterByCredits', () => {
    const students = Reader.readJsonFile('./test/data/students.json')
    const studentsCredits = StudentService.filterByCredits(students, 500)

    expect(studentsCredits.length).toBe(14)
    expect(studentsCredits[4].name).toBe("Phillips")
  })
})