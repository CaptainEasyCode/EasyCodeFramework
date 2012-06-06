var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('It would have been nice if they said something about the ssh key first!');
}).listen(process.env.PORT);