const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Home Page');
    }
    else if(req.url === '/about') {
        // BLOCKING CODE!!!!
        for (let i = 0; i < 1000; i++){
            for (let j = 0; j < 50; j++) {
                console.log(`${j} and ${i}`);
            }
        }
        res.end('About Page');
    }
    else{
        res.end('This is not a valid page.');
    }


});

server.listen(5000, ()=>{
    console.log('Listening on port 5000');
})