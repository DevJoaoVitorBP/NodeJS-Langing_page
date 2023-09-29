const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/src/index.html');
});

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server running on port 3000 🚀');
});

app.get('/', (res, req) => {
  res.type('text/css');
  res.sendFile(__dirname + '/public/src/assets/css/index.css');
})