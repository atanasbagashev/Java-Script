function calculateCircleArea(input) {
    
    if (typeof input === 'number' && !isNaN(input)) {
        
        const area = Math.PI * Math.pow(input, 2);
        
        console.log(`Circle area: ${area.toFixed(2)}`);
    } else {
        
        console.log(`We cannot calculate the circle area, because we received a ${typeof input}.`);
    }
}


calculateCircleArea(3);
calculateCircleArea("not a number");
calculateCircleArea(3);
calculateCircleArea(5);
