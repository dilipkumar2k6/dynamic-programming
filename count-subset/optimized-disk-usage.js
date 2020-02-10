const countSubset = (n,k) => {
    // Initialize table
    let cache1 = new Array(k+1);
    let cache2 = new Array(k+1);

    // update base case
    cache1[0] = 1;
    cache1[1] = 1;
    cache2[0] = 1;
    cache2[1] = 1;
    // topological sort for valid entries for eg for k > n, C(n,k) are invalid
    for(let i=2; i <= n ;i++) {
        for (let j=1; j < Math.min(k+1, i+1); j++) {
            if(i === j) {
                cache2[j] = 1;
                cache1[j] = 1;
            } else {
                if(i%2 === 0) {
                    // start with prev and current
                    cache2[j] = cache1[j-1] + cache1[j];
                } else {
                    // now switch to current and prev
                    cache1[j] = cache2[j-1] + cache2[j];
                }
            }
        }
    }
    if(n%2 === 0) {
        return cache2[k];
    }
    return cache1[k];

}
console.log(countSubset(9,5));