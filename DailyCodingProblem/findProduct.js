/*
    This problem was asked by Uber.

    Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

    For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

    Follow-up: what if you can't use division?

    LeetCode: https://leetcode.com/problems/product-of-array-except-self/
    GeekForGeeks: https://www.geeksforgeeks.org/a-product-array-puzzle/
*/

exports.findProduct = function(A = []) {
    if(A.length === 0 || A.length === 1) {
        return A;
    }

    let sum = 1;
    for(let i = 0; i < A.length; i++) {
        sum*= A[i];
    }

    for(let i = 0; i < A.length; i++){
        A[i] = sum/A[i];    
    }
    return A;
}