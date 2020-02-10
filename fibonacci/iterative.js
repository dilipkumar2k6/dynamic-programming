const fib = n => {
    const cache = new Array(n+1);
    cache[0] = 0;
    cache[1] = 1;
    for(let i = 2; i <=n; i++) {
        cache[i] = cache[i-1] + cache[i-2];
    }
    return cache[n];
}
console.log(fib(6));