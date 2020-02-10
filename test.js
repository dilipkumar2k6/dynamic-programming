const levenshteinDistanceHelper = (strWord1, strWord2, cache)=>{
    const key = `${strWord1}-${strWord2}`;

    if(cache.has(key)) {
        return cache.get(key);
    }

    // if both are empty then match
    if(strWord1.length === 0 && strWord2.length === 0) {
        return 0;
    }
    // if one is empty then edit distance is not possible
    if(strWord1.length === 0 || strWord2.length === 0) {
        return Number.MAX_SAFE_INTEGER;
    }
    // if last element is same then recurse on smaller value
    if(strWord1[strWord1.length - 1] === strWord2[strWord2.length -1]) {
        const distance = levenshteinDistanceHelper(strWord1.substring(0, strWord1.length - 1), strWord2.substring(0, strWord2.length - 1), cache);
        cache.set(key, distance);
        return distance;
    }
    // if last element is not same then apply all possible operations
    // perform delete operation on word1
    const dist1 = 1 + levenshteinDistanceHelper(strWord1.substring(0, strWord1.length - 1), strWord2, cache);
    
    // perform replace operation
    const dist2 = 1 + levenshteinDistanceHelper(strWord1.substring(0, strWord1.length - 1), strWord2.substring(0, strWord2.length - 1), cache);
    // perform insert operation on word1 if word1 size is less
    let dist3 = Number.MAX_SAFE_INTEGER;
    if(strWord1.length < strWord2.length) {
        dist3 = 1 + levenshteinDistanceHelper(strWord1, strWord2.substring(0, strWord2.length - 1), cache);
    }
    
    // return minimum of these three
    const distance = Math.min(dist1, dist2, dist3);
    cache.set(key, distance);
    return distance;
}
/*
 * Complete the function below.
 */
function levenshteinDistance(strWord1, strWord2) {
    const cache = new Map();
    return levenshteinDistanceHelper(strWord1, strWord2, cache);
}

console.log(levenshteinDistance('wvksnuxaldljqcjqnazsfoxqbylzhtcbvtpqqvkjhoqyrmdpjpxmzxvaulvbkyeyewlhuuutcpugkmqfhwwxwcdjyavnszhwth', 'opszfjkvkzjbgltaqnzytzwhiupbrioyttquvttipgefsuawjwzmkmhomkjpnafyacssguytebhcltwmqivuekhzivcqxmqkgwrfihaviegiroozb'))

