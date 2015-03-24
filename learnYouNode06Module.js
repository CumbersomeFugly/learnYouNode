var fs = require('fs'),
    path = require('path'),
    finalList = [];

module.exports = function (directoryName, extension, innerCallback) {
    fs.readdir(process.argv[2], function (err, list) {
	    if(err) {console.log("Testing12321");
                     return innerCallback(err, []);}

	    for(i = 0;i<list.length;i+=1) {
	        if (path.extname(list[i]) === "." + extension) {
                finalList.push(list[i]);
                }
            }

            innerCallback(null, finalList);
    });
};
