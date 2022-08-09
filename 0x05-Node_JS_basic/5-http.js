const http = require('http');

const db = process.argv.slice(2)[0];
const host = 'localhost';
const port = 1245;

const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(db).then((data) => {
      res.write(`Number of students: ${data.res.length - 1}\n`);
      res.write(`Number of students in CS: ${data.cs.length}. List: ${data.cs.join(', ')}\n`);
      res.write(`Number of students in SWE: ${data.swe.length}. List: ${data.swe.join(', ')}`);
      res.end();
    }).catch((err) => res.end(err.message));
  }
});

app.listen(port, host, () => {
  //   process.stdout.write(`Server listening at -> http://${host}:${port}\n`);
});

module.exports = app;
