import fs from 'fs';
const { promises: fsp } = fs;

const unionFiles = (inputPath1, inputPath2, outputPath) => {
    let data1;
    const result = fsp.readFile(inputPath1, 'utf-8')
        .then((content) => data1 = content)
        .then(() => fsp.readFile(inputPath2, 'utf-8'))
        // then ia promise-ul de la readFile
        .then((data2) => fsp.writeFile(outputPath, `${data1}\n7c\n${data2}`));
    return result;
};
const errorCallback = (error) => {
    console.error(error);
}
const result = unionFiles("first", "second", "union-first-and-second");
