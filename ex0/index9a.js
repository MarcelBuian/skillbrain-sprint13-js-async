import fs from 'fs';

const promise = new Promise((resolve, reject) => {
    fs.readFile('first', (err, data) => {
        if (err) {
            reject(err);
            return;
        }
        resolve(data);
    });
});

promise.then((data) => {
    console.log("Success");
    console.log(data);
}).catch((error) => {
    console.log("Error");
    console.error(error);
});