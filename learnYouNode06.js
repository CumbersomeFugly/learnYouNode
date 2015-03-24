var fileLister = require('./learnYouNode06Module.js');

var callback = function(err, finalList) {
    if (err) {return console.log(err);}

    for(j = 0; j < finalList.length; j += 1) {
        console.log(finalList[j]);
    }
}

fileLister(process.argv[2],process.argv[3], callback);
