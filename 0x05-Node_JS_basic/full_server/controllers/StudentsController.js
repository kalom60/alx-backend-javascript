import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res, dbPath) {
    try {
      const data = await readDatabase(dbPath);
      const displayLine = [];
      displayLine.push('This is the list of our students');
      displayLine.push(`Number of students in CS: ${data.cs.length}. List: ${data.cs.join(', ')}`);
      displayLine.push(`Number of students in SWE: ${data.swe.length}. List: ${data.swe.join(', ')}`);
      res.status(200).send(`${displayLine.join('\n')}`);
    } catch (e) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res, dbPath) {
    const { major } = req.params;

    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const data = await readDatabase(dbPath);
      const list = major === 'CS' ? data.cs.join(', ') : data.swe.join(', ');
      return res.status(200).send(`List: ${list}`);
    } catch (err) {
      return res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
