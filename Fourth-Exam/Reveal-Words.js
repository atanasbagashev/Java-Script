function revealWords(words, stringWords) {
    'use strict';

    let arrayString = stringWords.split(" ");

    arrayString.forEach((element, index) => {
        if (element.includes("*")) {
            arrayString[index] = words.find(word => word.length === element.length) || element;
        }
    });

    return arrayString
}

revealWords(['great', 'learning'], 'softuni is ***** place for ******** new programming languages');



function revealWords(words, stringWords) {
    'use strict';

    let arrayString = stringWords.split(" ");

    for (let i = 0; i < arrayString.length; i++) {
        let element = arrayString[i];
        if (element.includes("*")) {
            for (let j = 0; j < words.length; j++) {
                let word = words[j];
                if (word.length === element.length) {
                    arrayString[i] = word;
                    break;
                }
            }
        }
    }

    console.log(arrayString.join(" "));
}

revealWords(['great', 'learning'], 'softuni is ***** place for ******** new programming languages');
