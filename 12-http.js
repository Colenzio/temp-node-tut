const http = require('http');

const server = http.createServer((req, res)=> {
    if(req.url === '/'){
        res.end('Welcome to the homepage')
    }
    if(req.url === '/about'){
        res.end('Here is our history')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>Cant seem to find the page you are looking for</p>`)
})

server.listen(5000)