/**
 * https://www.youtube.com/watch?v=d7kvyp6dfz8
 * https://codeforces.com/contest/16/problem/E
 * Approach:
 * - No of pairs t = n*(n-1)/2
 * - Let's work on selecting fish 1
 * - Chance of selecting a pair (1,2)= 1/t
 * - For pair (1,2), chances that fish 1 looses = 1/t * P(2,1)
 * - Probability of fish 1 loosing fight = 1/t(p21 + p31 + p41 + p51+ .....pN1)
 * - Probability of moving from state (1,2,3,...N) to (2,3,...N) is probability of fish 1 loosing fight
 * - Dynamic problem
 * - example 1:
 *  - 1. dp[s] : probability of set s
 *  - 2. Initially all fishes in the pond are alive i.e. we need to find out dp[{1,2,...N}] = 1
 *  - 3. What does set {1} represent?
 *      - It means on previous day there was two fish and fish 1 win the fight
 *      - On previous day, it could have following
 *          - {1, 2}
 *          - {1, 3}
 *          - {1, 4}
 *          - {1, n}
 *      - What is probability to move from {1,x} to {1}
 *      - dp({1,x}) * p1x
 *      - dp[{1}] = sum (dp({1,x}) * p1x) where x = 2....n
 *      - Generalize formula
 *          - dp[{s 0.....k}] = sum( dp[s' 0.....k, j] * pjx ) where x = 1...k
 *          - pjx = 1/c(k,2) * sum(p1j + p2j + .... pkj)
 *       
 * 
 */ 

 const fishProbabilityOfAlive = (prob) =>{ 
    const n = prob.length;
    const dp = new Array(n).fill(0);
    const mask = Math.pow(2, n) - 1;
    return recursion(prob, dp, mask, n);
 }
 const numberOfSetBits = (mask) => {
     let count = 0;
     while(mask) {
        count += (mask & 1)
        mask = mask >> 1;
     }
     return count;
 }
 const recursion = (prob, dp, mask, n) => {
     const alive = numberOfSetBits(mask);
     if(alive === n) {
         return 1; 
     }

     if(dp[mask] > 0.9) {
         return dp[mask];
     }

     let ans  = 0;
     for (let fish=0; fish < n; fish++) {
         // if this fish was alive in prvious day
         if(mask & (1<<fish)) {
            const prevMask =  mask ^(1<<fish);    
            const prevDay = recursion(prob, dp, prevMask, n - 1);
            ans += prevDay * probabilityOnMove(prob, prevMask, fish, n);
         }
     }
    dp[mask] = ans; 
    return ans;
 }

 const probabilityOnMove = (prob, prevMask, j) => {
    const k = numberOfSetBits(prevMask);
    const choices = ((k) * (k-1) )/2;
    let moveProb = 0;
    for (let fish = 1; fish <=k ; fish++) {
        if((1 << fish) & prevMask) {
            moveProb += prob[fish+1][j+1];
        }
    }
    return moveProb/choices; 
 }

 const test = () => {
    const prob = [
        [0, 1, 1, 1, 1],
        [0, 0, 0.5, 0.5, 0.5],
        [0, 0.5, 0, 0.5, 0.5],
        [0, 0.5, 0.5, 0, 0.5],
        [0, 0.5, 0.5, 0.5, 0]];
    const ans = fishProbabilityOfAlive(prob);
    console.log({ans});

    const prob2 = [[0, 0.5],[0.5, 0]];
    const ans2 = fishProbabilityOfAlive(prob2);
    console.log({ans2});
 }

 test();