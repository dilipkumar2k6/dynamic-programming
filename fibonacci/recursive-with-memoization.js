const fibHelper = (n, cache) => {
    if(cache.has(n)) {
        return cache.get(n);
    }
    const value = fibHelper(n-1, cache) + fibHelper(n-2, cache);
    cache.set(n, value);
    return value;
}
const fib = n => {
    const cache = new Map();
    cache.set(0,0);
    cache.set(1,1);
    return fibHelper(n, cache);
}
console.log(fib(6));