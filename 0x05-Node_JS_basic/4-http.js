const http = require('http');

const app = http.createServer();
const host = 'localhost';
const port = 1245;

app.on('request', (_, res) => {
  const resText = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', resText.length);
  res.statusCode = 200;
  res.write(Buffer.from(resText));
});

app.listen(port, host, () => {
  //   process.stdout.write(`Server listening at -> http://${host}:${port}\n`);
});

module.exports = app;
