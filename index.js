const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

const server = require('express')()
    .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
    .listen(PORT, () => console.log(`Listening on ${PORT}`));


const { Server } = require('ws');
const wss = new Server({ server });

wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.on('message', (msg)=>{
        console.log(msg);
        ws.send(msg);
    })
    ws.on('close', () => console.log('Client disconnected'));
});

