import fs from 'fs';

// Trebuie sa fim in folderul ex0: cd ex0
let content = fs.readFileSync('./myfile.txt', 'utf-8');

content += " (continut copiat)";

for (let i = 0; i < 10_000_000; i++) {
    content += "1234567890";
}

fs.writeFile('./myfile-copy.txt', content, 'utf8', (err) => {
    console.log("File saved!");
});

console.log("Finisat");