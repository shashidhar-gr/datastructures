var findPair = require('./findPair');
var assert = require('assert');

describe('findPairBruteForce', function() {
    it('should return false, since input array is empty', function() {
        assert.equal(findPair.findPairBruteForce([], 0), false)
    })
    it('should return true, since input array contains proper pair. A = [10, 15, 3, 7], k = 17', function() {
        assert.equal(findPair.findPairBruteForce([10, 15, 3, 7], 17), true)
    })
    it('should return false, since input array does not contains proper pair. A = [10, 15, 3, 7], k = 1', function() {
        assert.equal(findPair.findPairBruteForce([10, 15, 3, 7], 1), false)
    })
})

describe('findPairSorting', function() {
    it('should return false, since input array is empty', function() {
        assert.equal(findPair.findPairSorting([], 0), false)
    })
})