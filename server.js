var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Jack Asses\nIt\'s time to learn Node');
}).listen(process.env.PORT);