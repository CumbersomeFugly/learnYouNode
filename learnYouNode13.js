var http = require('http');

var timeParser = function (data) {

    var expectsUNIX = false,
        convertedDate = "",
        convertedYears = 0,
        convertedMonths = 0,
        convertedDays = 0,
        convertedHours = 0,
        convertedMinutes = 0,
        convertedSeconds = 0,
        convertedMilliseconds = 0;

    if (data.charAt(5) === "p") {
        convertedDate = data.slice(19, data.length);
    } else { 
        convertedDate = data.slice(18, data.length);
        expectsUNIX= true;
    }

    convertedYears = Number(convertedDate.slice(0,4));
    convertedMonths = Number(convertedDate.slice(5,7));
    convertedDays = Number(convertedDate.slice(8,10));
    convertedHours = Number(convertedDate.slice(11,13) -5);
    convertedMinutes = Number(convertedDate.slice(14,16));
    convertedSeconds = Number(convertedDate.slice(17,19));
    convertedMilliseconds = Number(convertedDate.slice (20,23));

//making date file
    if (expectsUNIX === true) {
        var date = new Date(convertedYears, convertedMonths - 1, convertedDays, convertedMinutes, convertedSeconds, convertedMilliseconds);
        return {"unixtime": date.getTime()};
    } else {
    //making JSON file
        var JSONformatted = {
            "hour": Number(convertedHours),
            "minute": Number(convertedMinutes),
            "second": Number(convertedSeconds)
        }
    
        return JSONformatted;
    }
}

var callback = function (request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify(timeParser(request.url)));
    response.end();
}

var server = http.createServer(callback);

server.listen(process.argv[2]);
