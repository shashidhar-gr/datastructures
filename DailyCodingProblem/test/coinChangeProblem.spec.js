var returnChange = require('../coinChangeProblem').returnChange;
var assert = require('assert');

describe('coinChangeProblem', function() {
    it('should return empty array.', function() {
        assert.deepEqual(returnChange([], 10), [])
    })
    it('should return empty array.', function() {
        assert.deepEqual(returnChange([1], 0), [])
    })
    it('should return array [1].', function() {
        assert.deepEqual(returnChange([1], 1), [1])
    })
    it('should return array [0, 1].', function() {
        assert.deepEqual(returnChange([1, 2], 2), [0, 1])
    })
    it('should return array [1, 1].', function() {
        assert.deepEqual(returnChange([1, 2], 3), [1, 1])
    })
    it('should return array [3000000].', function() {
        assert.deepEqual(returnChange([1], 3000000), [3000000])
    })
    it('should return array [0, 0, 0, 1, 1, 0, 0].', function() {
        assert.deepEqual(returnChange([1, 2, 5, 10, 20, 50, 100], 30), [0, 0, 0, 1, 1, 0, 0])
    })
})