const express = require('express');
const fs = require('fs');

const fsPromise = fs.promises;
const app = express();
const port = 1245;

const db = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  if (fs.existsSync(db)) {
    fsPromise.readFile(db)
      .then((data) => {
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
        res.send(`${displayLine.join('\n')}`);
      });
  } else {
    res.send('This is the list of our students');
  }
});

app.listen(port, () => {
  // console.log(`Example app listening on port ${port}`);
});

module.exports = app;
