const recursion = (weight, i, target) => {
    if(target === 0) {
        return true;
    }
    if(i === weight.length) {
        return false;
    }
    // include
    let include = false;
    if(target - weight[i] >=0) {
        include =  recursion(weight, i + 1, target - weight[i])
    }
    let exclude = recursion(weight, i + 1, target);
    return exclude || include;
}

const weight = [1,2,3,4,5,7];
const target = 60;
console.log(recursion(weight, 0, target));