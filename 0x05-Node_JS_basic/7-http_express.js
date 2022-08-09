const express = require('express');
const fs = require('fs');

const fsPromise = fs.promises;
const port = 1245;
const db = process.argv[2];
const host = 'localhost';

const app = express();

async function countStudents(dataPath) {
  if (fs.existsSync(dataPath)) {
    const data = await fsPromise.readFile(dataPath);
    const lines = data.toString().split('\n');
    let res = lines.filter((item) => item);
    res = res.map((item) => item.split(','));

    const cs = [];
    const swe = [];
    for (const i of res) {
      for (let j = 0; j < i.length; j += 1) {
        if (i[j] === 'CS') {
          cs.push(i[0]);
        }
        if (i[j] === 'SWE') {
          swe.push(i[0]);
        }
      }
    }
    const send = [];
    send.push(`Number of students: ${res.length - 1}`);
    send.push(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
    send.push(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
    return send;
  }
  return 'This is the list of our students';
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(db)
    .then((data) => {
      try {
        res.send(`${data.join('\n')}`);
      } catch (err) {
        res.send(data);
      }
    });
});

app.listen(port, host, () => {
  // console.log(`Example app listening on port ${port}`);
});

module.exports = app;
