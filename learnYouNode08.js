var http = require('http'),
    receivedCharacters = "";

var callback = function(response) {
    response.setEncoding('utf8');

    response.on("data", function (data) {
        receivedCharacters += data;
    });
    
    response.on("error", function (error) {
        console.log(error);
    });
    response.on("end", function (error) {
        console.log(receivedCharacters.length);
        console.log(receivedCharacters);
    });


};

http.get(process.argv[2], callback);
