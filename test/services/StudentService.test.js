const StudentService = require('../../lib/services/StudentService')
const Reader = require('./../../lib/utils/Reader')

describe('Unit Tests for StudentService Class', () => {
  test('1) Test filterByCertification', () => {
    const students = Reader.readJsonFile('./test/data/students.json')
    const studentsHaveCertification = StudentService.filterByCertification(students, true)

    expect(studentsHaveCertification.length).toBe(18)
  })
})