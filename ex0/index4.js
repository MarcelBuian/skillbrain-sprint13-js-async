import fs from 'fs';

const callback = function (error, content) {
    if (error) {
        console.error("Eroare citind fisierul");
        throw error;
    }
    console.log(content);
}

fs.readFile('./myfile.tx', 'utf-8', callback);

console.log("Am finisat");