/*
    Find duplicates in O(n) time and O(1) extra space

    Given an array of n elements which contains elements from 0 to n-1, with any of these numbers appearing any number of times. Find these repeating numbers in O(n) and using only constant memory space.
    
    For example, let n be 7 and array be {1, 2, 3, 1, 3, 6, 6}, the answer should be 1, 3 and 6.

    GeekForGeeks: https://www.geeksforgeeks.org/find-duplicates-in-on-time-and-constant-extra-space/
    youtube: https://www.youtube.com/watch?v=GeHOlt_QYz8
*/

/*
    Time - O(n)
    Space - O(1)
*/
function findDuplicates(list = []) {
    if(list.length <= 1)
        return []
    
    let result = [];    
    for(let i = 0; i < list.length; i++) {
        if((list[Math.abs(list[i])]) > 0)
            list[Math.abs(list[i])] = list[Math.abs(list[i])] * -1;
        else    
            result.push(Math.abs(list[i]))   
    }
    return result;
}

exports.findDuplicates = findDuplicates
