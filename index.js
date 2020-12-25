const path = require('path')
const express = require('express')
const app = express()
const server = require('http').createServer(app);
const WebSocket = require('ws');
const PORT = process.env.PORT || 3000;

const wss = new WebSocket.Server({ server:server });

wss.on('connection', function connection(ws) {
  console.log('A new client Connected!');
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send(message);
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
app.get('/script.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'script.js'))
})

server.listen(PORT, () => console.log(`Lisening on port : ${PORT}`))