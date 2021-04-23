/**
 * - Given a string s 
 * - consisting of items as "*" 
 * - and closed compartments as an open and close "|"
 * - an array of starting indices startIndices
 * - and an array of ending indices endIndices
 * - determine the number of items 
 *      - in closed compartments 
 *      - within the substring between the two indices, inclusive.
 * - An item is represented as an asterisk *
 * - A compartment is represented as a pair of pipes | that may or may not have items between them.
 * - Example
 *  -   s = '|**|*|*'
 *        0 1 2 3 4 5 6
 *      - | * * | * | *
 *      startIndices = [0,0]
 *      endIndices = [4,5]
 *      {0, 4} -> 2
 *      {0, 5} -> 3
 *  - Approach 1:
 *      - dp
 *      - f(i,j): number of items between i and j
 *      - f(i,j): f(i,j-1) if s[i] is *
 *              : f(i,j-k)  if s[i] is |  and k is number of item till prev |
 */



 const numberOfItems = (s, startIndices, endIndices) => {
    const n = s.length;
    const dp = new Array(n).fill(0).map(a => new Array(n).fill(0));
    // base case: empty string i.e. i > j will have 0
    // base case: single len string i.e. i===j will have 0

    for (let i=0; i < n; i++) {
        for (let j=i+1; j < n; j++) {
            if(s[j] === '*') {
                dp[i][j] = j-1 >=0 ? dp[i][j-1] : 0;
            } else {
                // traverse left to find out prev | 
                let k=j-1;
                while(k >=i && s[k] !=='|') {
                    k--;
                }
                // if | found 
                if(k >=i && s[k] === '|') {
                    const count = j - k -1;
                    dp[i][j] = count + dp[i][k]
                }
            }
        }
    }
    const ans = [];
    // run query on dp
    for (let i=0; i < startIndices.length; i++) {
        const start = startIndices[i];
        const end = endIndices[i];
        ans.push(dp[start][end]);
    }
    return ans;
 }

 const test1 = () => {
     const s = '|**|*|*';
     const startIndices = [0,0];
     const endIndices = [4,5];
     const ans = numberOfItems(s, startIndices, endIndices);
     console.log({ans})
 }
 const test2 = () => {
    const s = '|**|*|****|';
    const startIndices = [0,0,1,0];
    const endIndices = [4,5,8, 10];
    const ans = numberOfItems(s, startIndices, endIndices);
    console.log({ans})
}
const test3 = () => {
    const s = '******|******||***||||||||**|8|';
    const startIndices = [1, 6, 7];
    const endIndices = [8, 13, 19];
    const ans = numberOfItems(s, startIndices, endIndices);
    console.log({ans})
}
test1();
test2();
test3();