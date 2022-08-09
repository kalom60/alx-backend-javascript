// This script will create a simple http server with express

const express = require('express');
const fs = require('fs');

const argv = process.argv.slice(1);
const fsPromise = fs.promises;
const port = 1245;
const host = 'localhost';

const app = express();

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  if (fs.existsSync(argv[1])) {
    fsPromise.readFile(argv[1])
      .then((content) => {
        const str = content.toString();
        const data = str.split('\n');
        const list = [];
        for (const i of data) {
          const student = i.split(',');
          list.push(student);
        }

        const newList = list.slice(1, list.length);
        let fieldCs = 0;
        const newCs = [];
        let fieldSwe = 0;
        const newSwe = [];
        let counter = 0;
        for (const i of newList) {
          for (let j = 0; j < i.length; j += 1) {
            if (i[j] === 'CS') {
              counter += 1;
              fieldCs += 1;
              newCs.push(i[0]);
            }
            if (i[j] === 'SWE') {
              counter += 1;
              fieldSwe += 1;
              newSwe.push(i[0]);
            }
          }
        }
        const string = 'This is the list of our students\n'
                       + `Number of students: ${counter}\n`
                       + `Number of students in CS: ${fieldCs}. List: ${newCs.join(', ')}\n`
                       + `Number of students in SWE: ${fieldSwe}. List: ${newSwe.join(', ')}`;
        response.send(string);
      });
  } else {
    response.send('This is the list of our students');
  }
});

app.listen(port, host, () => {
  process.stdout.write('...');
});

module.exports = app;
