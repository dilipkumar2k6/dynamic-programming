const climbingStairs = n => {
    const cache = new Array(n + 1);
    cache[0] = 0;
    cache[1] = 1;
    cache[2] = 2; // there will be 2 ways to climb stair 2.
    for (let i=3; i <=n; i++) {
        cache[i] = cache[i-1] + cache[i-2];
    }
    return cache[n];
}
console.log(climbingStairs(5))