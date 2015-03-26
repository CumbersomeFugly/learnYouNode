var http = require('http'),
    fs = require('fs');

var callback = function (request, response) {
    var stream = fs.createReadStream(process.argv[3]);
    stream.pipe(response);
}

var server = http.createServer(callback);

server.listen(process.argv[2]);

