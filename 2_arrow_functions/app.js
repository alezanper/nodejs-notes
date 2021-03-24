// Old way

function sum1(a, b){
    return a + b; 
}

const sum2 = (a, b) => {
    return a + b;
}

// New Way
const sum = (a, b) => a + b;

const total = sum(10, 20);
console.log("Total: ", total);
