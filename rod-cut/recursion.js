const recursion = (rodLength, prices) => {
    // base case
    if(rodLength === 0) {
        return 0;
    }
    // ask sub-ordinate to solve remaining 
    let maxPrice = 0;
    for(let i=1; i <=rodLength; i++) {
        const subordinate = recursion(rodLength - i, prices);
        maxPrice = Math.max(maxPrice , subordinate + prices[i]);
    }
    return maxPrice;
}

const prices = [0, 1, 3, 3, 8, 8, 10];
const rodLength = 6;
console.log(recursion(rodLength, prices));