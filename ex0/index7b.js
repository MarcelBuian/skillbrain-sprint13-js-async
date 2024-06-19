import fs from 'fs';
const { promises: fsp } = fs;

const unionFiles = (inputPath1, inputPath2, outputPath) => {
    // Promisiunile ar trebui să fie returnată întotdeauna și să se construiască în lanț!
    const result = fsp.readFile(inputPath1, 'utf-8')
        .then((data1) => {
            const promise = fsp.readFile(inputPath2, 'utf-8')
                .then((data2) => fsp.writeFile(outputPath, `${data1}\n\n${data2}`));
            return promise;
        });
    return result; // acesta e un promise
};

const errorCallback = (error) => {
    console.error(error);
}
const result = unionFiles("first", "second", "union-first-and-second");
