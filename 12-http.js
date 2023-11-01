const http = require('http');

const server = http.createServer((req, res)=>{
    if (req.url === '/') {
        console.log('this thing activated')
        res.end('Welcome to the home page');

    }
    else if (req.url === '/about'){
        res.end('This is the about page.'); 
    }
    else res.end(
        `<h1>Oops!</h1><p>That page doesn't exist</p>
        <a href ="/">back to homepage</a>`
        );

})

server.listen(5000, () =>{
    console.log('  listening on 5000')
}) ;
