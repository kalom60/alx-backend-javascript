const fs = require('fs');

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const lines = data.split('\n').slice(1);
      const students = {
        CS: [],
        SWE: [],
      };
      for (const student of lines) {
        const name = student.split(',')[0];
        const dept = student.split(',').slice(-1);
        students[dept].push(name);
      }
      resolve(students);
    }
  });
});

export default readDatabase;
module.exports = readDatabase;
