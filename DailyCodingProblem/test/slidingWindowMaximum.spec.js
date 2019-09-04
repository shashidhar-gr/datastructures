var findMaxBruteForce = require('../slidingWindowMaximum').findMaxBruteForce;
var assert = require('assert');

describe('findMax', function() {
    it('should return empty array, since the input array is empty.', function() {
        assert.deepEqual(findMaxBruteForce(), [])
    })
    it('should return empty array, since k = 0.', function() {
        assert.deepEqual(findMaxBruteForce([1], 0), [])
    })
    it('should return input array, since the input array contains only single element.', function() {
        assert.deepEqual(findMaxBruteForce([1], 1), [1])
    })
    it('should return [1, 2], since the input array is [1, 2] and k = 1.', function() {
        assert.deepEqual(findMaxBruteForce([1, 2], 1), [1, 2])
    })
    it('should return [2], since the input array is [1, 2] and k = 2.', function() {
        assert.deepEqual(findMaxBruteForce([1, 2], 2), [2])
    })
    it('should return [10, 5, 2, 7, 8, 7], since the input array is [10, 5, 2, 7, 8, 7] and k = 1.', function() {
        assert.deepEqual(findMaxBruteForce([10, 5, 2, 7, 8, 7], 1), [10, 5, 2, 7, 8, 7])
    })
    it('should return [10, 7, 8, 8], since the input array is [10, 5, 2, 7, 8, 7] and k = 3.', function() {
        assert.deepEqual(findMaxBruteForce([10, 5, 2, 7, 8, 7], 3), [10, 7, 8, 8])
    })
    it('should return [3, 3, 5, 5, 6, 7], since the input array is [1, 3, -1, -3, 5, 3, 6 ,7] and k = 3.', function() {
        assert.deepEqual(findMaxBruteForce([1, 3, -1, -3, 5, 3, 6 ,7], 3), [3, 3, 5, 5, 6, 7])
    })
})