const Reader = require('./../../lib/utils/Reader')

describe('Unit Tests for Reader Class', () => {
    test('1) Read the path of a file and the data on it', () => {
      const students = Reader.readJsonFile('./students.json');
  
      expect(students.length).toBe(15);
      expect(students[1].name).toBe('');
    });
  });