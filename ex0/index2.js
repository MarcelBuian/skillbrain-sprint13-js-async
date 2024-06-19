const data = [16, 64, 4];
const data2 = data.map(Math.sqrt); // [4, 8, 2]
const predicate = (v) => unknown > 2;

const predicate2 = function (v) {
    throw new Error("eroare custom");
}

try {
    const data3 = data2.filter(predicate2);
} catch (e) {
    console.error("Am prins exceptia");
    console.log(e);
}

console.log("Cod finisat");