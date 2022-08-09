const express = require('express');
const fs = require('fs');

const port = 1245;
const db = process.argv[2];
const host = 'localhost';

const app = express();

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('This is the list of our students'));
        return;
      }
      const lines = data.toString().split('\n');
      let response = lines.filter((item) => item);
      response = response.map((item) => item.split(','));

      const cs = [];
      const swe = [];
      for (const i of response) {
        for (let j = 0; j < i.length; j += 1) {
          if (i[j] === 'CS') {
            cs.push(i[0]);
          }
          if (i[j] === 'SWE') {
            swe.push(i[0]);
          }
        }
      }
      const displayLine = [];
      displayLine.push('This is the list of our students');
      displayLine.push(`Number of students: ${response.length - 1}`);
      displayLine.push(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
      displayLine.push(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
      resolve(displayLine);
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const students = await countStudents(db);
    res.send(`${students.join('\n')}`);
  } catch (error) {
    res.send(`${error.message}`);
  }
});

app.listen(port, host, () => {
  // process.stdin.write(`app listening on port ${port}`);
});

module.exports = app;
