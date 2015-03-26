var http = require('http'),
    receivedCharacters = ["","",""],
    runningCount = 0;

var callback = function(index, response) {
    response.setEncoding('utf8');

    response.on("data", function (data) {
            receivedCharacters[index]+=data;
    });
    
    response.on("error", function (error) {
//        console.log(error);
    });
    response.on("end", function (error) {
	runningCount += 1;
        if (runningCount === 3) {
            for (i = 0; i < 3; i += 1) {
                console.log(receivedCharacters[i]);
	    }
        }
    });
};

for (j = 0; j < 3; j += 1) {
    http.get(process.argv[j + 2], callback.bind(undefined, j));
}
