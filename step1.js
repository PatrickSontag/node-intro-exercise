const fs = require('fs');

const cat = (path) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if(err) {
            console.log(`ERROR reading ${path}: \n`, err);
            process.exit(1)
        }
        console.log(data);
    })
}

if (process.argv[2]) {
    cat(process.argv[2]);
}
