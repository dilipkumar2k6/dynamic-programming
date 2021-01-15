const recursion = (num, n, x, tight, dp) => {
    // base case 1: if x is < 0
    if(x < 0) {
        return 0;
    }
    // base case 2: single len num
    if(n === 1) {
        if(x >=0 && x <= 9) {
            return 1;
        }
        return 0;
    }
    if(dp[num][n][tight] !== -1) {
        return dp[num][n][tight];
    }
    const ub = tight ? (num[num.length - n].charCodeAt(0) - '0'.charCodeAt(0)): 9;
    let ans = 0;
    for (let dig = 0; dig <= ub; dig++) {
        ans += recursion(num, n - 1, x - dig, tight & (dig == ub), dp)
    }
    dp[num][n][tight] = ans;
    return ans;
}
const solve = (R, x) => {
    const n = R.length;
    const dp = new Array(n+1).fill(0)
                .map(a => new Array(x+1).fill(0))
                .map(b => new Array(2).fill(-1));
    return recursion(R, R.length, x, 1, dp)
}
const test = () => {
    const R = '15'
    const x = 5;
    return solve(R, x);
}