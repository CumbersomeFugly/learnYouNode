var http = require('http');

var callback = function(response) {
    response.setEncoding('utf8');

    response.on("data", function (data) {
        console.log(data);
    });
    
    response.on("error", function (error) {
        console.log(error);
    });
    response.on("end", function (error) {
        console.log("");
    });


};

http.get(process.argv[2], callback);
