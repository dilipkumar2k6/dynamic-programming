const fib = n => {
    const cache = new Array(3);
    cache[0] = 0;
    cache[1] = 1;
    for(let i = 2; i <=n; i++) {
        cache[i % 3] = cache[(i-1) % 3] + cache[(i-2) % 3];
    }
    return cache[n%3];
}
console.log(fib(6));