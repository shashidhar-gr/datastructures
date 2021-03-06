/*
    Daily Coding Problem: Problem #1 [Easy]

    This problem was recently asked by Google.

    Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

    For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

    Bonus: Can you do this in one pass?

    LeetCode: https://leetcode.com/problems/two-sum/
    GeekForGeeks: https://www.geeksforgeeks.org/given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x/
*/

/*
    Bruteforce technique. 
        -> Iterate through all elemetns and try to find a pair that sum up to k.
    Time complexity: O(N^2)
    Space complexity: O(1)
*/
    exports.findPairBruteForce = function(A = [], k = 0) {
        if(A.length === 0 || A.length === 1) {
            return false;
        }

        for(let i = 0; i < A.length-1; i++) {
            for(let j = 1; j < A.length; j++) {
                if(A[i] + A[j] === k) {
                    return true;
                }
            }
        }

        return false;
    }


/*
    Sorting method.
        -> Sort the elements in array.
        -> Check sum of elements at two ends.
    Time complexity: O(N^2)
    Space complexity: O(1)    
*/
    exports.findPairSorting = function(A = [], k = 0) {
        if(A.length === 0 || A.length === 1) {
            return false;
        }

        A = module.exports.bubbleSort(A);
        let j = A.length;
        let i = 0;

        while(i < j) {
            if(A[i] + A[j] === k)
                return true;
            if((A[i] + A[j]) < k)
                i++;
            else    
                j--; 
        }

        return false;
    }
/*
    Hashing method.
        -> Iterate through each array.
        -> For each element calulate  
        -> Check sum of elements at two ends.
    Time complexity: O(N)
    Space complexity: O(N)    
*/
    exports.findPairHashing = function(A = [], k = 0) {
        if(A.length === 0 || A.length === 1) {
            return false;
        }

        let hashSet = {}
        let temp = 0;
        for(let i = 0; i < A.length; i++) {
            temp = k - A[i];
                if(hashSet[temp])
                    return true;
                else    
                    hashSet[A[i]] = true;
        }

        return false;
    }

/** 
    * Bubble sort
*/
    exports.bubbleSort = function(A = []) {
        if(A.length === 0) {
            return A;
        }
        let temp;
        for(let i = 0; i < A.length; i++) {
            for(let j = 0; j < A.length; j++) {
                if(A[j] > A[j+1]) {
                    temp = A[j];
                    A[j] = A[j+1];
                    A[j+1] = temp;
                }
            }
        }

        return A;
    }
