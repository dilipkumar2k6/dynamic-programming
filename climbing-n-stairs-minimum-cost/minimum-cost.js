const minimumCost = arr =>{
    // add cost for start and end
    arr.push(0);
    arr.unshift(0);
    // base case
    for(let i=2; i < arr.length; i++) {
        arr[i] = arr[i] + Math.min(arr[i-1], arr[i-2]);
    }
    console.log(arr);
    return arr[arr.length - 1];
}
const arr = [1,100,1,1,1,100,1,1,100,1];
console.log(minimumCost(arr));