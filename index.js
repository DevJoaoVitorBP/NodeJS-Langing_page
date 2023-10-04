const express = require('express');
const app = express();
const http = require('http');
const os = require('os'); 
const port = 3000;

// Function to get the local IP
function getLocalIP() {
  const ifaces = os.networkInterfaces();
  for (let dev in ifaces) {
    for (let details of ifaces[dev]) {
      if (details.family === 'IPv4' && details.internal === false) {
        return details.address;
      }
    }
  }
  return '0.0.0.0';
}

// Get the local IP
const host = getLocalIP();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/src/index.html');
});

app.use(express.static('public'));

// Start the server
http.createServer(app).listen(port, host, () => {
  console.log(`Server running at http://${host}:${port} 🚀`);
});
