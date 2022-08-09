const express = require('express');

const port = 1245;
const db = process.argv[2];
const host = 'localhost';

const app = express();

const countStudents = require('./3-read_file_async');

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');

  await countStudents(db).then((data) => {
    res.write(`Number of students: ${data.res.length - 1}\n`);
    res.write(`Number of students in CS: ${data.cs.length}. List: ${data.cs.join(', ')}\n`);
    res.write(`Number of students in SWE: ${data.swe.length}. List: ${data.swe.join(', ')}`);
  }).catch((err) => res.write(err.message))
    .finally(() => {
      res.end();
    });
});

app.listen(port, host, () => {
  // process.stdin.write(`app listening on port ${port}`);
});

module.exports = app;
