function sumDigits(digits){
    `use strict`;
    const digitsAsString = digits.toString();

    let totalSum = 0;
    for (const char of digitsAsString){
    
        let number =(parseInt(char));
        totalSum += number;
    }
    console.log(totalSum);

}
sumDigits(23123123123);