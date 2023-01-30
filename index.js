import express from 'express'
import { newEvent } from './src/controllers/events.controllers.js';
import eventsRoutes from './src/routes/events.routes.js';

const app = express()
const PORT = 3000;

app.use(express.json())

app.use(newEvent)
app.use(eventsRoutes)

app.listen(3000)
console.log(`corriendo bb en el puerto:${PORT}`)

// const http = require('http');

// const app = http.createServer((request, response) => {
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.end();
// });

// const PORT = 2000
// app.listen(PORT);
// console.log(`corriendo bb en el puerto:${PORT}`);