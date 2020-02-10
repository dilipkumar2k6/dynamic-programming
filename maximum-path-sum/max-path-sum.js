const maxPathSum = arr => {
    // base case for row = 0;
    for(let i=1; i < arr[0].length; i++) {
        arr[0][i] = arr[0][i-1]  + arr[0][i] 
    }
    // base case for column =0
    for(let i=1; i < arr.length; i++) {
        arr[i][0] = arr[i-1][0]  + arr[i][0] 
    }
    // start topological sort from left to right
    for(let i=1; i < arr.length; i++) {
        for(let j=1; j < arr[0].length; j++) {
            arr[i][j] = arr[i][j] + Math.max(arr[i-1][j], arr[i][j-1]);
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