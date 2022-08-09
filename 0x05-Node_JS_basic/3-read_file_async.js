const fs = require('fs');

const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const lines = data.split('\n');
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
      console.log(`Number of students: ${data.length}`);
      const csNames = cs.join(', ');
      const sweNames = swe.join(', ');
      console.log(`Number of students in CS: ${cs.length}. List: ${csNames}`);
      console.log(`Number of students in SWE: ${swe.length}. List: ${sweNames}`);
      resolve(true);
    }
  });
});

module.exports = countStudents;
