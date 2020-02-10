const countSubset = (n,k) => {
    // Initialize table
    const table = new Array(n+1).fill(0).map(a => new Array(k+1));
    // update base case
    // 1. C(i,0) = 1
    for(let i=0; i <n+1; i++) {
        table[i][0] = 1;
    }
    // 2. C(i,i) = 1
    for(let i=0; i < k + 1; i++) {
        table[i][i] = 1;
    }
    // topological sort for valid entries for eg for k > n, C(n,k) are invalid
    for(let i=2; i <= n ;i++) {
        for (let j=1; j < Math.min(k+1, i); j++) {
            table[i][j] = table[i-1][j-1] + table[i-1][j];
        }
    }
    return table[n][k];
}
console.log(countSubset(10,8));