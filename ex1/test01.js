const myPromise = new Promise(function (successCallback, failCallback) {
    //                0  1  2  3
    let sampleData = [2, 4, 6, 8];
    // Rezultatul va fi un numar intreg intre [1,2,3,4,5]
    let randomNumber = Math.ceil(Math.random() * 5);
    console.log("randomNumber este " + randomNumber);
    if (sampleData[randomNumber]) {
        successCallback(sampleData[randomNumber]);
    } else {
        failCallback('An error occured! ' + ' Could not find a number in sampleData for index: ' + randomNumber);
    }
});

// for (i = 0; i < 100; i++) {
//     const a = Math.random();
//     const b = a * 5;
//     const c = Math.ceil(b);
//     console.log(a + " " + b + " " + c);
// }
// return;

myPromise
    .then(function (e) {
        console.log(e);
    })
    .catch(function (error) {
        console.error("erorare: " + error);
        // throw new Error(error);
    })
    .finally(function () {
        console.log('Promise completed');
    });