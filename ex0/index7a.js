import fs from 'fs';

const unionFiles = (inputPath1, inputPath2, outputPath, cb) => {
    fs.readFile(inputPath1, 'utf-8', (error1, data1) => {
        if (error1) {
            cb(error1);
            return;
        }
        fs.readFile(inputPath2, 'utf-8', (error2, data2) => {
            if (error2) {
                cb(error2);
                return;
            }
            fs.writeFile(outputPath, `${data1}\n${data2}`, 'utf8', (error) => {
                if (error) {
                    cb(error);
                    return;
                }
                // console.log(`The files content's ${data1} and ${data2} successfull copied`);
            });
        });
    });
}

const errorCallback = (error) => {
    console.error(error);
}
const result = unionFiles("first", "second", "union-first-and-second\"\\", errorCallback);
