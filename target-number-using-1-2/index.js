const targetNumber = n => {
    const cache = new Array(n+1);
    // base case
    cache[0] = 0;
    cache[1] = 1;
    cache[2] = 2;
    for(let i=3; i <=n; i++) {
        cache[i] = cache[i-1] + cache[i-2];
    }
    return cache[n];
}
console.log(targetNumber(5))