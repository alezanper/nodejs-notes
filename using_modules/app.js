const http = require ("http");

const server = http.createServer((req, res)=>{
    res.end("Hello World from node js update");
});

server.listen(9090);