var fs = require('fs'),
    path = require('path'),
    finalList = [];


var callback = function(err, list) {
    if(err) {console.log(err);} else {
        for(i = 0;i<list.length;i+=1) {
            if (path.extname(list[i]).toString() === "." + process.argv[3].toString()) {
                finalList.push(list[i]);
            }
        }
        
        for(j=0;j<finalList.length;j+=1) {
            console.log(finalList[j]);
        }
    }
}

fs.readdir(process.argv[2], callback);
