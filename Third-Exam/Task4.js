function arrayRotation(array, numberRotation){

for (let x = 1; x <= numberRotation; x++){

    let number = array.shift();
   array.push(number);
}

console.log(array.join(' '))
}

arrayRotation([51, 47, 32, 61, 21], 2)

