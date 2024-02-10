function solve(arrayOFNames){
    'use strict';

    
    arrayOFNames.sort((a, b) => {
        return a.localeCompare(b)
    })
    for (let i = 1; i <= arrayOFNames.length ; i++){
    console.log( `${i}.${arrayOFNames[i -1]}`)}

}
solve(["John",
"Bob",
"Christina",
"Ema"])