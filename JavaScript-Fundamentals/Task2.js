function solve (...people){
    
    let sortedArray = people.sort();
    console.log(sortedArray.join(` `))
    console.log(people.join(" "))
}

solve("Georgi", "Pesho", "Gosho")