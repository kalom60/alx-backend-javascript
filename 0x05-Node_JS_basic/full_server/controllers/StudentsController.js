import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res, dbPath) {
    // const dbPath = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(dbPath)
      .then((data) => {
        const resBody = ['This is the list of our students'];
        for (const stu of Object.keys(data)) {
          const names = data[stu].join(', ');
          resBody.push(
            `Number of students in ${stu}: ${data[stu].length}. List: ${names}` //eslint-disable-line
          );
        }
        res.status(200).send(resBody.join('\n'));
      })
      .catch((err) => {
        res.status(500).send(`Cannot load the database ${err}`);
      });
  }

  static getAllStudentsByMajor(req, res, dbPath) {
    const { major } = req.params;

    if (major === 'CS' || major === 'SWE') {
      // const dbPath = process.argv.length > 2 ? process.argv[2] : '';

      readDatabase(dbPath)
        .then((data) => {
          const names = data[major];
          res.status(200).send(`List: ${names.join(', ')}`);
        })
        .catch((err) => {
          res.status(500).send(`Cannot load the database ${err}`);
        });
    } else {
      res.status(500).send('Major parameter must be CS or SWE');
    }
  }
}

export default StudentsController;
module.exports = StudentsController;
