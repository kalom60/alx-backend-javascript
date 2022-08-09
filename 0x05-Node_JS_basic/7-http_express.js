const express = require('express');
const fs = require('fs');

const fsPromise = fs.promises;
const port = 1245;
const db = process.argv[2];
const host = 'localhost';

const app = express();

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
        const displayLine = 'This is the list of our students\n'
                       + `Number of students: ${response.length - 1}\n`
                       + `Number of students in CS: ${cs.length}. List: ${cs.join(', ')}\n`
                       + `Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`;
        res.send(displayLine);
      });
  } else {
    res.send('This is the list of our students');
  }
});

app.listen(port, host, () => {
  // console.log(`Example app listening on port ${port}`);
});

module.exports = app;
