function solve(number){
    `use strict`;

    for (let x = 1; x<=10; x++){
        let sum = number * x;
        console.log(`${number} X ${x} = ${sum}`);
    }
}

solve(5);