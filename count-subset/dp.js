const c = (n,k) => {
    const table = new Array(n+1).fill(0).map(a => new Array(k+1).fill(0));
    // Initialize for base case i.e. c(n,0) = 1, c(n,n) = 1,
    for (let i=0; i < n + 1; i++) {
        table[i][0] = 1;
    }
    for (let i=1; i < n + 1; i++) {
        table[i][i] = 1;
    }    
    // fill remaining
    for (let i = 2; i < n + 1; i++) {
        for (let j=1; j < k + 1; j++) {
            table[i][j] = table[i-1][j] + table[i-1][j-1];
        }
    }
    return table[n][k]
}

let n = 6;
for (let k=0; k <= n; k++) {
    const r = c(n,k);
    console.log({n, k, r});
}

console.log(c(2,5));