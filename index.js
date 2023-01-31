import express from 'express'
import eventsRoutes from './src/routes/events.routes.js';
import participantsRoutes from './src/routes/participants.routes.js';

const app = express()
const PORT = 3000;

app.use(express.json())

app.use(eventsRoutes)
app.use(participantsRoutes)
app.listen(3000)
console.log(`corriendo en el puerto:${PORT}`)

// const http = require('http');

// const app = http.createServer((request, response) => {
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.end();
// });

// const PORT = 2000
// app.listen(PORT);
// console.log(`corriendo bb en el puerto:${PORT}`);