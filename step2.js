const fs = require('fs');
const axios = require('axios');

const cat = (path) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if(err) {
            console.log(`ERROR reading ${path}: \n`, err);
            process.exit(1)
        }
        console.log(data);
    })
}

const webCat = (url) => {
    axios.get(url).then(function(response){
        console.log(response.data);
    })
}

const isUrl = /http/.test(process.argv[2]);

if (process.argv[2]) {
    if (isUrl) {
        webCat(process.argv[2]);
    } else {
        cat(process.argv[2]);
    }
}