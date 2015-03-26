var net = require('net'),
    dateStamp = "";

var date = new Date();


var checkLeadingZero = function (num) {
    if (num < 10) {
        return "0" + num;
    } else {
        return num;
    }
}
var updateDate = function () {
    dateStamp = "";
    dateStamp += (date.getFullYear() + "-" + checkLeadingZero(date.getMonth() + 1) + "-" + checkLeadingZero(date.getDate()) + " " + date.getHours() + ":" + date.getMinutes());
}

var server = net.createServer(function (socket) {
    updateDate();
    socket.write(dateStamp);
    socket.end("");
});

server.listen(process.argv[2]);
