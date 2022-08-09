const http = require('http');
const fs = require('fs');

const fsPromise = fs.promises;
const db = process.argv.slice(2)[0];
const host = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const { url } = req;

  if (url === '/') {
    res.write('Hello Holberton School!');
  } else if (url === '/students') {
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
          res.end(`${displayLine.join('\n')}`);
        });
    } else {
      throw new Error('Cannot load the database');
    }
  }
  res.statusCode = 404;
  res.end();
});

app.listen(port, host, () => {
  //   process.stdout.write(`Server listening at -> http://${host}:${port}\n`);
});

module.exports = app;
