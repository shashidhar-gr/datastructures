/*
    Daily Coding Problem

    This problem was recently asked by Google.

    Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

    For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

    Bonus: Can you do this in one pass?
*/

/*
    Bruteforce technique. 
        -> Iterate through all elemetns and try to find a pair that sum up to k.
    Time complexity: O(N^2)
    Space complexity: O(1)
*/
    exports.findPairBruteForce = function(A = [], k = 0) {
        if(A.length === 0) {
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
*/
    exports.findPairSorting = function(A = [], k = 0) {
        if(A.length === 0) {
            return false;
        }
    }