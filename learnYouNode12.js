var http = require('http'),
    map = require('through2-map');

var callback = function (request, response) {
    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(response);
}

var server = http.createServer(callback);

server.listen(process.argv[2]);

