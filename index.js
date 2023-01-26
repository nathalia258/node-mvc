const http = require('http');

const app = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('holaaaaaaaaaaaaaaa');
});

const PORT = 2000
app.listen(PORT);
console.log(`corriendo bb en el puerto:${PORT}`);