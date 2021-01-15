/**
 * https://www.youtube.com/watch?v=685x-rzOIlY
 * https://docs.google.com/document/d/1zuw8hBXHsiTYTH8u986fQhn8TWfpOk9BQBIRH3lo_W8/edit
Problem Statement

Let there be N workers and N jobs. Any worker can be assigned to perform any job, incurring some cost that may vary depending on the work-job assignment. It is required to perform all jobs by assigning exactly one worker to each job and exactly one job to each agent in such a way that the total cost of the assignment is minimized.

Input Format
Number of workers and job: N
Cost matrix C with dimension N*N where C(i,j) is the cost incurred on assigning ith Person to jth Job.

Sample Input
4

[
9 2 7 8
6 4 3 7
5 8 1 8
7 6 9 4
]

Sample Output
13

Constraints
N <= 20

- Approach:
    - Use recursion with memoization
    - f(i, mask) = minimum cost to perform assignment of person 0 to i for available jobs mask
    - f(i, mask) = min(
        f(i+1, mask ^(2<<j))
    )
 */
const getMinCost = (cost) => {
    const n = cost.length;
    const mask = Math.pow(2, n) - 1;
    const dp = new Array(n).fill(0).map(a => new Array(mask+1).fill(-1));
    return recursion(cost, mask, 0, dp);
}
const recursion = (cost, mask, i, dp) => {
    // base case: no more persons are available
    if(i === cost.length) {
        return 0;
    }
    // if already in cache
    if(dp[i][mask] !== -1) {
        return dp[i][mask];
    }    
    let ans = Number.MAX_SAFE_INTEGER;
    // if jth bit is on i.e. job is not yet allocated
    for (let j=0; j < cost.length; j++) {
        // if j job is not available then skip
        if(!(mask & (1 << j))) {
            continue;
        }
        ans = Math.min(
            ans, 
            cost[i][j] + recursion(cost, mask ^(1 << j), i + 1, dp)
        )
    }
    dp[i][mask] = ans; 
    return ans;
}
const test = () => {
    const cost =    [[9, 2, 7, 8],
                    [6, 4, 3, 7],
                    [5, 8, 1, 8],
                    [7, 6, 9, 4]];
    const ans = getMinCost(cost);
    console.log({ans})

}
test();