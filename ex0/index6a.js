import fs from 'fs';

// Cod cu callback functions

fs.readFile('./first', 'utf-8', (_error1, data1) => {
    console.log(data1);
    fs.readFile('./second', 'utf-8', (_error2, data2) => {
        console.log(data2);
        fs.readFile('./third', 'utf-8', (_error3, data3) => {
            console.log(data3);
        });
    });
});