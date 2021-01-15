process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

const count = (R, n, tight) => {
    // base case 1: freedom to use any digits
    if(tight === 0) {
        return Math.pow(10, n);
    }
    // base case 2: all digits of R are used
    if(n === 0) {
        return 1;
    }
    let numbers = 0;
    const ub = R[R.length - n].charCodeAt(0) - '0'.charCodeAt(0);
    for (let dig = 0; dig <= ub; dig++) {
        numbers += count(R, n-1, tight & (dig === ub ? 1 : 0 ));
    }
    return numbers;
}
const recursion = (R, n, tight, dp) => {
    // base case: if n is 0
    if(n === 0) {
        return 0;
    }
    if(dp[n][tight] !== -1) {
        return dp[n][tight] ;
    }

    const ub = tight ? (R[R.length - n].charCodeAt(0) - '0'.charCodeAt(0)): 9;
    let ans = 0;
    for (let dig =0; dig <= ub; dig++) {
        ans += (dig * count(R, n-1, tight & (dig === ub ? 1 : 0 )));
        ans += recursion(R, n -1, tight & (dig === ub ? 1 : 0 ), dp)
    }
    dp[n][tight]   = ans;
    return ans;
}

const main = () => {
    let t = readLine();
    t = parseInt(t);
    let i = 1;
    while(t--) {
        let line = readLine();
        let [L, R] = line.split(' ');
        L = parseInt(L);
        R = parseInt(R);
        const l = (L !== 0? L-1: 0).toString();
        const r = R.toString();   
        
        const dp1 = new Array(r.length+1).fill(0).map(c => new Array(2).fill(-1));
        const dp2 = new Array(l.length+1).fill(0).map(c => new Array(2).fill(-1));     
        const ans = recursion(r, r.length, 1, dp1) - recursion(l, l.length, 1, dp2);
        console.log(ans);
        i++;
    }
}