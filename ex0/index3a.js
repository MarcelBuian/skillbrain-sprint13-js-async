import fs from 'fs';

// Trebuie sa fim in folderul ex0: cd ex0
let content = fs.readFileSync('./myfile.txt', 'utf-8');

content += " (continut copiat)";

for (let i = 0; i < 10_000_000; i++) {
    content += "1234567890";
}

fs.writeFileSync('./myfile-copy.txt', content);

console.log("Finisat");