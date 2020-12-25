const path = require('path')
const express = require('express')
const app = express()
const server = require('http').createServer(app);
const WebSocket = require('ws');
const PORT = process.env.PORT || 3000;

const wss = new WebSocket.Server({ server:server });
controlli = []
turtles = []

wss.on('connection', function connection(ws) {
  console.log('A new client Connected!');
  ws.on('message', function incoming(message) {
    console.log(`received: ${message}`);
    //ws.send(message);
    switch (message){
      case 'controllo':
        controlli.push(ws)
        break;
      case 'turtle':
        turtles.push(ws)
        break;
      default:
        if (controlli.includes(ws)){
          for (turtle of turtles){
            turtle.send(message)
          }
        }else{
          for (constrollo of controlli){
            controllo.send(message)
          }
        }
    }
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
app.get('/script.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'script.js'))
})

server.listen(PORT, () => console.log(`Lisening on port : ${PORT}`))