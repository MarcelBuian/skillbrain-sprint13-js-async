import fs from 'fs';
const { promises: fsp } = fs;

const filepaths = ["first", "second", "third", "fisier_inexistent"];

const promises = filepaths.map((filepath) => fsp.readFile(filepath, 'utf-8')
    .then((v) => ({ result: 'success', value: v }))
    .catch((e) => ({ result: 'error', error: e })));
const promise = Promise.all(promises);

promise.then((data) => {
    console.log("Fisierele au fost citite!");
    console.log(data);
});