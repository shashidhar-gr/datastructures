var findmax = require('../slidingWindowMaximum').findMax;
var assert = require('assert');

describe('findMax', function() {
    it('should return empty array, since the input array is empty.', function() {
        assert.deepEqual(findmax(), [])
    })
    it('should return empty array, since k = 0.', function() {
        assert.deepEqual(findmax([1], 0), [])
    })
    it('should return input array, since the input array contains only single element.', function() {
        assert.deepEqual(findmax([1], 1), [1])
    })
    it('should return [1, 2], since the input array is [1, 2] and k = 1.', function() {
        assert.deepEqual(findmax([1, 2], 1), [1, 2])
    })
    it('should return [2], since the input array is [1, 2] and k = 2.', function() {
        assert.deepEqual(findmax([1, 2], 2), [2])
    })
})