const http = require("http");
const hostName = "127.0.0.1";
const port = 8080;

http.createServer((req, res) => {
    res.writeHead(200, {"content-type":"text/plain"});
    res.end("Hello world");
}).listen(port, hostName, ()=>{
    console.log(`Server running at 
    http://${hostName}:${port}`);
});