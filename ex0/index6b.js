import fs from 'fs';

// Redenumirea promises în fsp pentru abreviere
const { promises: fsp } = fs;

fsp.readFile('./first', 'utf-8')
    .then((data1) => console.log(data1))
    .then(() => fsp.readFile('./second', 'utf-8'))
    .then((data2) => console.log(data2))
    .then(() => fsp.readFile('./third', 'utf-8'))
    .then((data3) => console.log(data3));