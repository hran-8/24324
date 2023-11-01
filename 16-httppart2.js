const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('welcome');
// })

const server = http.createServer();

server.on('request', (res, end)=>{
    res.end('Welcome');
})

server.listen(5000)
server.emit('request')