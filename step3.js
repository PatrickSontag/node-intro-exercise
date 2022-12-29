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

// const cat = (path) => {
//     fs.readFile(path, 'utf8', (err, data) => {
//         console.log("cat4")
//         if(err) {
//             console.log(`ERROR reading ${path}: \n`, err);
//             process.exit(1)
//         }
//         console.log("cat2")
//         // respond([data]);
//     })
// }

const webCat = (url) => {
    axios.get(url)
    .then(function(response){
        respond([response.data])
    })
    .catch(function (error) {
        respond([`ERROR fetching ${url}:`, error.message])
        // console.log(`ERROR fetching ${url}: \n`, error.message);
    })
}

const respond = (data) => {
    for (d of data)
    console.log(d);
    // console.log(data);
}

const argv2 = process.argv[2];
const argv3 = process.argv[3];
const argv4 = process.argv[4];

const hasOutFlag = /--out/.test(argv2);
const isUrl = /http/.test(argv2);

const switchBoard = () => {
    if (argv2) {
        if (hasOutFlag) {
            console.log("argv2:", argv2);
            console.log("argv3:", argv3);
            console.log("argv4:", argv4);
            return
        }
        if (isUrl) {
            webCat(argv2);
            return
        }
        cat(argv2);
        return
    }
    console.log("additional argument needed");
    process.exit(1);
}

switchBoard();