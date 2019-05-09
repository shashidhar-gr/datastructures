function findSubSet(set = [], n = 0, subSet = [], w = 0) {
    
    console.log("n is ", n,", element in set is ",set[n-1]," and type of subSet is ",typeof(subSet), ", is subSet array? ", Array.isArray(subSet));

    if(w == 0)
        return subSet;
    
    if(n == 0 && w != 0)
        return subSet;

    if(set[n-1] > w)
        return findSubSet(set, n-1, subSet, w)

    //return findSubSet(set, n-1, subSet, w)
    
    return findSubSet(set, n-1, subSet.push(set[n-1]), w-set[n-1])
}

let set = [5, 10, 3];
let subSet = [];
let n = 3;
let w = 8;

console.log(findSubSet(set, n, subSet, w))