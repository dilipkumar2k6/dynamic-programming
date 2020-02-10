const maxPathSumPath = arr => {
    // base case for 0,0
    arr[0][0] = { d: arr[0][0], sX: -1, sY: -1  }
    // base case for row = 0;
    for(let i=1; i < arr[0].length; i++) {
        arr[0][i] = { d: arr[0][i-1].d  + arr[0][i], sX: 0, sY: i -1  }
    }
    // base case for column =0
    for(let i=1; i < arr.length; i++) {
        arr[i][0] = { d: arr[i-1][0].d  + arr[i][0] , sX: i-1, sY: 0 }
    }
    // start topological sort from left to right
    for(let i=1; i < arr.length; i++) {
        for(let j=1; j < arr[0].length; j++) {
            if(arr[i-1][j].d > arr[i][j-1].d) {
                arr[i][j] = { d: arr[i][j] +  arr[i-1][j].d, sX: i-1, sY: j };
            } else {
                arr[i][j] = { d: arr[i][j] +  arr[i][j-1].d, sX: i, sY: j-1 };
            }
        }
    }
    console.log(arr);
    let i= arr.length - 1;
    let j=arr[0].length - 1;
    const path = [];
    while(i!== 0 || j!== 0) {
        const {sX, sY} = arr[i][j];
        path.unshift([sX,sY]);
        i = sX;
        j = sY;
    }
    path.push([arr.length-1, arr[0].length-1])
    return path;
}
const grid = [
    [1,3,1],
    [1,5,1],
    [-4,2,1]
]
console.log(maxPathSumPath(grid))