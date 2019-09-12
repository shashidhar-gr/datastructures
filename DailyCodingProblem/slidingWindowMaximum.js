/**
 * Daily Coding Problem: Problem #18 [Hard]

    This problem was asked by Google.

    Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.

    For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:

    10 = max(10, 5, 2)
    7 = max(5, 2, 7)
    8 = max(2, 7, 8)
    8 = max(7, 8, 7)
    Do this in O(n) time and O(k) space. You can modify the input array in-place and you do not need to store the results. You can simply print them out as you compute them.

    LeetCode: https://leetcode.com/problems/sliding-window-maximum/
    GeekForGeeks: https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/
 */

 /** 
  * Time complexity: O(N*K)
 */

 var Deque = require('./deque').Deque;

 function findMaxBruteForce(a = null, k = 0) {
    if(a === null || a.length === 0 || k === 0) {
        return [];
    }

    let highestList = [];
    let highest = 0, i = 0, n = a.length;

    for(let i = 0; i <= n-k; i++) {
        highest = a[i];

        for(let j = 1; j < k; j++) {
            if(a[i+j] > highest) {
                highest = a[i+j];
            }
        }

        highestList.push(highest);
    }
    return highestList;
 }

/** 
  * Time complexity: 
 */
 //findMaxDeque([1, 2], 1)
 function findMaxDeque(a = null, k = 0) {
    if(a === null || a.length === 0 || k === 0) {
        return [];
    }

    let deque = new Deque();
    let output = [];
    for(let i = 0; i <= a.length-k; i++) {
        while( !deque.isEmpty() && deque.getRear() <= i ) {
            deque.removeRear()
        }

        for(let j = deque.isEmpty() ? 0: deque.getFront(); j < i+k; j++) {
            if(deque.isEmpty()) {
                deque.addFront(j)
            }
            else {
                while(a[j] > a[deque.getFront()] && !deque.isEmpty()) {
                    deque.removeFront()
                }
                deque.addFront(j)
            }  
        }
        output.push(a[deque.getRear()])
    }
    return output;
 }
 
 exports.findMaxBruteForce = findMaxBruteForce;
 exports.findMaxDeque = findMaxDeque;
