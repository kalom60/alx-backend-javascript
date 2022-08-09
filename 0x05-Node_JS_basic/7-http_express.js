const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

const db = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const msg = 'This is the list of our students\n';
  try {
    fs.readFile(db, 'utf-8', (err, data) => {
      if (data) {
        const lines = data.split('\n').slice(1);
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
        const displayLine = [];
        displayLine.push(`Number of students: ${lines.length}`);
        // const csNames = cs.join(', ');
        // const sweNames = swe.join(', ');
        displayLine.push(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
        displayLine.push(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
        res.status(200).send(displayLine.join('\n'));
      }
    });
  } catch (err) {
    res.send(`${msg}${err.message}`);
  }
});

app.listen(port, () => {
  // console.log(`Example app listening on port ${port}`);
});

module.exports = app;
