// f(m,n) = f(m, n -1) + f(m -1, n)
const moves = (m, n) => {
    const table = new Array(m).fill(0).map(a => new Array(n).fill(0));
    // For m=0 or n=0 there would be only one way to reach the taget cell
    for(let i=0; i < m; i++) {
        table[i][0] = 1;
    }
    for(let i=0; i < n; i++) {
        table[0][i] = 1;
    }
    // do topological traversing from left to right
    for(let i=1; i < m; i++) {
        for (let j=1; j < n; j++) {
            table[i][j] = table[i][j-1] + table[i-1][j];
        }
    }
    return table[m-1][n-1];
}
console.log(moves(5,5))