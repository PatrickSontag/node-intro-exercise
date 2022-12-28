const fs = require('fs');

const cat = (path) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if(err) {
            console.log("ERROR", err);
            process.kill(1)
        }
        console.log("DATA...", data);
    })
}

const argv = process.argv;

for (let [i, arg] of argv.entries()) {
    // console.log(i, arg);
    if (i === 2) {
        cat(arg)
    }
}
