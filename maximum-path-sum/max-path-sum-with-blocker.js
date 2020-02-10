const maxPathSum = arr => {
    // base case for row = 0;
    for(let i=1; i < arr[0].length; i++) {
        // if current or previous path is blocker then skip
        if(arr[0][i] === -1 || arr[0][i-1] === -1) {
            continue;
        }
        arr[0][i] = arr[0][i-1]  + arr[0][i] 
    }
    // base case for column =0
    for(let i=1; i < arr.length; i++) {
        // if current or previous path is blocker then skip
        if(arr[i][0] === -1 || arr[i-1][0] === -1) {
            continue;
        }
        arr[i][0] = arr[i-1][0]  + arr[i][0] 
    }
    // start topological sort from left to right
    for(let i=1; i < arr.length; i++) {
        for(let j=1; j < arr[0].length; j++) {
            // if current path is blocker then skip
            if(arr[i][j] === -1) {
                continue;
            }
            // if top and right is not blocker then use it
            if(arr[i-1][j] !== -1 &&  arr[i][j-1] !== -1) {
                arr[i][j] = arr[i][j] + Math.max(arr[i-1][j], arr[i][j-1]);
            } else if (arr[i-1][j] === -1 ) {
                // if left has blocker then use top
                arr[i][j] = arr[i][j] + arr[i][j-1]
            } else {
                // if top has blocker then use left
                arr[i][j] = arr[i][j] + arr[i-1][j];
            }
        }
    }
    return arr[arr.length-1][arr[0].length-1]
}
const grid = [
    [1,3,1],
    [1,5,1],
    [4,2,1]
]
console.log(maxPathSum(grid))