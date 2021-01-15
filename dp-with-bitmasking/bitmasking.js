const add = (subset, x) => {
    return subset ^ (1 << (x-1));
}
const remove = (subset, x) => {
    return subset ^ (1<<(x-1));
}
const display = subset => {
    const set = [];
    for (let bitNo=0; bitNo <=9; bitNo++) {
        if(subset & (1<<bitNo)) {
            set.push(bitNo+1);
        } 
    }
    return set;
 }
const test = () => {
    console.log('Subset 19 represent ', display(19));
}
test();