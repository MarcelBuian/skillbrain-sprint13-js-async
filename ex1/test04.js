

const wordApiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const translations = {
    "word": "cuvant",
    "sun": "soare",
    "city": "oras",
};

function translate_batch(textList) {
    const translatePromises = [];
    textList.forEach(element => {
        translatePromises.push(translate(element));
    });

    return Promise.all(translatePromises);
}

function translate(text) {
    return new Promise(function (resolveCallback, failCallback) {
        word_check(text)
            .then(boolResponse => {
                if (boolResponse) {
                    const translatedText = translations[text];
                    if (translatedText) {
                        resolveCallback(translatedText);
                    } else {
                        failCallback("No translated found for " + translatedText);
                    }
                }
                failCallback(`The text ${text} could not be translated`);
            })
            .catch(error => {
                failCallback(`The text ${text} failed to translate: ` + error);
            })
            ;
    })
}

function word_check(text) {
    return new Promise(function (resolveCallback, failCallback) {
        const fullUrl = wordApiUrl + text;
        fetch(fullUrl)
            .then(response => {
                const data = response.json();
                if (data) {
                    return data;
                }
                failCallback('Network response was not ok on url ' + fullUrl);
            })
            .then(data => {
                if (data[0]?.word) {
                    resolveCallback(true);
                }
                failCallback('No word found for ' + text);
            })
            .catch(error => {
                failCallback(error);
            });
    });
}


const batchText = ["sun", "word", "city"];
console.log("Translating...", batchText);
translate_batch(batchText)
    .then(word => {
        console.log(word)
    })
    .catch(error => {
        console.error(error);
    })
    ;