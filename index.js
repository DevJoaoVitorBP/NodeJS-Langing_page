const express = require('express');
const app = express();
const http = require('http');
const host = 'localhost';
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/src/index.html');
});

app.use(express.static('public'));

http.createServer(app).listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});

app.get('/', (res, req) => {
  res.type('text/css');
  res.sendFile(__dirname + '/public/src/assets/css/index.css');
})