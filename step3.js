const fs = require('fs');
const axios = require('axios');

// async function cat(path) {
const cat = (path, out) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if(err) {
            console.log(`ERROR reading ${path}: \n`, err);
            process.exit(1)
        }
        handleOutput(data, out);
    })
}

const webCat = (url, out) => {
    axios.get(url)
    .then(function(response){
        handleOutput(response.data, out);
    })
    .catch(function (error) {
        console.log(`ERROR fetching ${url}:`, error.message);
    })
}

const respond = (data) => {
    for (d of data)
    console.log(d);
}

const handleOutput = (data, out) => {
    if (out) {
        fs.writeFile(out, data, (err) => {
            if (err) throw err;
        })
    } else {
        console.log(data)
    }
}

let path;
let out;

if (process.argv[2] === "--out") {
    path = process.argv[4];
    out = process.argv[3];
    if (/http/.test(path)) {
        webCat(path, out);
    } else {
        cat(path, out);
    }
} else {
    path = process.argv[2];
    if (/http/.test(path)) {
        webCat(path);
    } else {
        cat(path)
    }
}