const fs = require('fs');
const axios = require('axios');

// async function cat(path) {
const cat = (path, out) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if(err) {
            console.log(`ERROR reading ${path}: \n`, err);
            process.exit(1)
        }
        console.log("CAT data:", data)
    })
}

const webCat = (url) => {
    axios.get(url)
    .then(function(response){
        respond([response.data])
    })
    .catch(function (error) {
        respond([`ERROR fetching ${url}:`, error.message])
    })
}

const respond = (data) => {
    for (d of data)
    console.log(d);
}

let path;
let out;

if (process.argv[2] === "--out") {
    path = process.argv[4];
    out = process.argv[3];
    console.log("OUT path:", path)
    console.log("OUT out:", out)
    cat(path, out);
} else {
    path = process.argv[2];
}
if (/http/.test(path)) {
    webCat(path);
} else {
    cat(path)
}