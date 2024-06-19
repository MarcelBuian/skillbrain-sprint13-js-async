import fs from 'fs';

const unionFiles = (inputPath1, inputPath2, outputPath, cb) => {
    const obj = {};
    const callbackAfterReadFile2 = (error2, data2) => {
        if (error2) {
            cb(error2);
            return;
        }
        fs.writeFile(outputPath, `${obj.data1}\n----\n${data2}`, cb);
    };
    const callbackAfterReadFile1 = (error1, data1) => {
        obj.data1 = data1;
        if (error1) {
            cb(error1);
            return;
        }
        fs.readFile(inputPath2, 'utf-8', callbackAfterReadFile2);
    };
    fs.readFile(inputPath1, 'utf-8', callbackAfterReadFile1);
}

const errorCallback = (error) => {
    console.error(error);
}
const result = unionFiles("first", "second", "union-first-and-second", errorCallback);
