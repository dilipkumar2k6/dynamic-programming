// https://codingcompetitions.withgoogle.com/kickstart/round/000000000019ff49/000000000043b0c6#problem
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

const recursion = (R, n, even, leading, tight, dp) => {
    // base case: if n is 0
    if(n === 0) {
        return 1;
    }
    if(dp[n][even][leading][tight] !== -1) {
        return dp[n][even][leading][tight] ;
    }
    // if even position
    if(even) {
        const digits = [0, 2, 4, 6, 8];
        const ub = tight ? (R[R.length - n].charCodeAt(0) - '0'.charCodeAt(0)): 9;
        let ans = 0;
        for (const dig of digits) {
            if(dig <= ub) {
                ans += recursion(R, n-1, 0, 0, tight & (dig === ub ? 1 : 0 ), dp);
            }
        }
        dp[n][even][leading][tight]  = ans;
        return ans;
    } else {
        const digits = [1, 3, 5, 7, 9];
        const ub = tight ? (R[R.length - n].charCodeAt(0) - '0'.charCodeAt(0)): 9;
        let ans = 0;
        if(leading) {
            ans += recursion(R, n - 1, 0, 1, 0, dp)
        }
        for (const dig of digits) {
            if(dig <= ub) {
                ans += recursion(R, n-1, 1, 0, tight & (dig === ub ? 1 : 0 ), dp);
            }
        }
        dp[n][even][leading][tight]  = ans;
        return ans;        
    }
}

const main = () => {
    let t = readLine();
    t = parseInt(t);
    let i = 1;
    while(t--) {
        let line = readLine();
        const [L, R] = line.split(' ');
        const l = (L-1).toString();
        const r = R.toString();   
        const dp1 = new Array(R.length+1).fill(0)
                    .map(a => new Array(2).fill(0)
                    .map(b => new Array(2).fill(0)
                    .map(c => new Array(2).fill(-1))));
        const dp2 = new Array(L.length+1).fill(0)
                    .map(a => new Array(2).fill(0)
                    .map(b => new Array(2).fill(0)
                    .map(c => new Array(2).fill(-1))));   

        const ans = recursion(r, r.length, 0, 1, 1, dp1) - recursion(l, l.length, 0, 1, 1, dp2);
        console.log(`Case #${i}: ${ans}`);
        i++;
    }
}