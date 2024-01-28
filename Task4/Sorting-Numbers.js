function sortingNumber(arrayOfNumbers) {
    arrayOfNumbers.sort((a, b) => a - b);

    let finalArray = [];

    for (let i = 1; arrayOfNumbers.length; i++) {
        let number = 0;
        if (i % 2 !== 0) {
            number = arrayOfNumbers.shift();
            finalArray.push(number);
        } else {
            number = arrayOfNumbers.pop();
            finalArray.push(number);
        }
    }

    
    return finalArray;
}

sortingNumber([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
