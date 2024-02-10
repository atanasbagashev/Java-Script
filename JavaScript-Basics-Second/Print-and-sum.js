function printAndSum(firstNumber, secondNumber) {
    'use strict';

    let message = '';

    let sum = 0;

    for (let x = firstNumber; x <= secondNumber; x++) {
        message += `${x} `;
        sum += x;
    }
    console.log(message.concat(" "));
    console.log(`Sum: ${sum}`);
    
}

printAndSum(1, 10);
