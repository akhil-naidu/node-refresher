const http = require('http');

http
  .createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    // fetch data from database
    const data = '{"name": "akhil"}';

    res.end(data);
  })
  .listen(5005);
