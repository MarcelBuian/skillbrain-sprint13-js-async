function resolveAfter2Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    resolveAfter2Seconds().then((result) => {
        console.log(result);
    });
}

asyncCall();
console.log("Ultima linie");