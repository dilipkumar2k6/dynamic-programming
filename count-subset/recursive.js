const c = (n,k) => {
    // base case
    if(k ===0 || k ===n) {
        return 1;
    }
    // if k > n then return 0
    if(k > n) {
        return 0
    };
    return c(n-1, k) + c(n-1, k-1);
};

let n = 6;
for (let k=0; k <= n; k++) {
    const r = c(n,k);
    console.log({n, k, r});
}
