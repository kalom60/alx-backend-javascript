const http = require('http');
const fs = require('fs');

const db = process.argv.slice(2)[0];
const host = 'localhost';
const port = 1245;
const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const { url } = req;

  if (url === '/') {
    res.write('Hello Holberton School!');
  } else if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const data = fs.readFileSync(db, 'utf-8').split('\n').slice(1);
      const cs = [];
      const swe = [];
      for (const student of data) {
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
      console.log(
        `Number of students in SWE: ${swe.length}. List: ${sweNames}` //eslint-disable-line
      );
    } catch (err) {
      res.write(new Error('Cannot load the database'));
    }
  }
  res.statusCode = 404;
  res.end();
});

app.listen(port, host, () => {
  //   process.stdout.write(`Server listening at -> http://${host}:${port}\n`);
});

module.exports = app;
