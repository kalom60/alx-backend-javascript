const fs = require('fs');

const countStudents = (dataPath) => { //eslint-disable-line
  return new Promise((resolve, reject) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const lines = data.toString().split('\n').slice(1);
      const cs = [];
      const swe = [];
      for (const student of lines) {
        if (student.includes('CS')) {
          let name = student.split(',').slice(0, 1);
          name = String(name);
          cs.push(name);
        } else {
          let name = student.split(',').slice(0, 1);
          name = String(name);
          swe.push(name);
        }
      }
      const res = []
      res.push(`Number of students: ${lines.length}`);
      res.push(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
      res.push(
        `Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}` //eslint-disable-line
      );
      console.log(`${res.join('\n')}`);
      resolve(res);
    });
  });
};

module.exports = countStudents;
